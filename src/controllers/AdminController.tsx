'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AdminView, type AdminPhase } from '@/components/admin/AdminView';
import { firebaseConfigured } from '@/lib/firebase-config';
import * as service from '@/services/admin.service';
import { safeError } from '@/services/validation.service';
import type { SubmissionRecord, SubmissionStatus } from '@/types/submission';
export function AdminController() {
  const [phase, setPhase] = useState<AdminPhase>(firebaseConfigured ? 'loading' : 'unconfigured'),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(''),
    [items, setItems] = useState<SubmissionRecord[]>([]),
    [filter, setFilter] = useState('all'),
    [hasMore, setHasMore] = useState(false),
    [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const cursor = useRef<service.Cursor>(null),
    revision = useRef(0),
    lock = useRef(false);
  async function load(more = false, token = revision.current) {
    setBusy(true);
    try {
      const result = await service.fetchMessages(more ? cursor.current : null);
      if (token !== revision.current) return;
      setItems((old) =>
        more
          ? [...old, ...result.items.filter((x) => !old.some((y) => y.id === x.id))]
          : result.items,
      );
      cursor.current = result.cursor;
      setHasMore(result.hasMore);
    } catch (e) {
      if (token === revision.current) setError(safeError(e));
    } finally {
      if (token === revision.current) setBusy(false);
    }
  }
  useEffect(() => {
    if (!firebaseConfigured) return;
    let alive = true;
    let unsubscribe: (() => void) | undefined;
    try {
      unsubscribe = service.watchUser(async (user) => {
        const token = ++revision.current;
        setItems([]);
        cursor.current = null;
        setHasMore(false);
        setPendingDelete(null);
        if (!user || user.isAnonymous) {
          if (alive) setPhase('login');
          return;
        }
        setPhase('loading');
        try {
          const allowed = await service.isAdmin(user.uid);
          if (!alive || token !== revision.current) return;
          setPhase(allowed ? 'ready' : 'denied');
          if (allowed) await load(false, token);
        } catch (e) {
          if (alive && token === revision.current) {
            setError(safeError(e));
            setPhase('error');
          }
        }
      });
    } catch (e) {
      setError(safeError(e));
      setPhase('error');
    }
    return () => {
      alive = false;
      ++revision.current;
      unsubscribe?.();
    };
  }, []);
  async function enter(e: FormEvent) {
    e.preventDefault();
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError('');
    try {
      await service.login(email.trim(), password);
      setPassword('');
    } catch (e) {
      setError(safeError(e));
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  async function leave() {
    ++revision.current;
    setItems([]);
    setPassword('');
    setError('');
    try {
      await service.logout();
      setPhase('login');
    } catch (e) {
      setError(safeError(e));
    }
  }
  async function status(id: string, status: SubmissionStatus) {
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError('');
    try {
      await service.setMessageStatus(id, status);
      setItems((all) => all.map((item) => (item.id === id ? { ...item, status } : item)));
    } catch (e) {
      setError(safeError(e));
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  async function remove(id: string) {
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError('');
    try {
      await service.removeMessage(id);
      setItems((all) => all.filter((item) => item.id !== id));
      setPendingDelete(null);
    } catch (e) {
      setError(safeError(e));
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  return (
    <AdminView
      phase={phase}
      email={email}
      password={password}
      busy={busy}
      error={error}
      items={items.filter((x) => filter === 'all' || x.status === filter)}
      filter={filter}
      hasMore={hasMore}
      pendingDelete={pendingDelete}
      onEmail={setEmail}
      onPassword={setPassword}
      onLogin={enter}
      onLogout={leave}
      onRefresh={() => {
        setError('');
        void load();
      }}
      onMore={() => void load(true)}
      onFilter={setFilter}
      onStatus={status}
      onDelete={setPendingDelete}
      onConfirmDelete={remove}
      onCancelDelete={() => setPendingDelete(null)}
    />
  );
}
