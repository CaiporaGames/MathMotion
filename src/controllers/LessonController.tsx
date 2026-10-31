'use client';
import { useEffect, useState } from 'react';
import type { Lesson } from '@/types/content';
import { useLearningStore } from '@/stores/learning.store';
import { LessonView } from '@/components/lessons/LessonView';
import { ExplorerController } from './ExplorerController';
import { SubmissionController } from './SubmissionController';
import { DecimalExplorerController } from './DecimalExplorerController';
export function LessonController({ lesson }: { lesson: Lesson }) {
  const [step, setStep] = useState('');
  const completed = useLearningStore((s) => s.completed.includes(lesson.slug)),
    toggle = useLearningStore((s) => s.toggle);
  useEffect(() => {
    void useLearningStore.persist.rehydrate();
  }, []);
  function ask(value: string) {
    setStep(value);
    document.getElementById('pergunta')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(
      () => document.getElementById('question-message')?.focus({ preventScroll: true }),
      250,
    );
  }
  return (
    <LessonView
      lesson={lesson}
      completed={completed}
      onComplete={() => toggle(lesson.slug)}
      onQuestion={ask}
      explorer={lesson.decimalExplorer
        ? <DecimalExplorerController />
        : <ExplorerController kind={lesson.tool} config={lesson.toolConfig} />}
      form={
        <SubmissionController
          kind="question"
          lessonSlug={lesson.slug}
          lessonTitle={lesson.title}
          step={step}
          onStepChange={setStep}
        />
      }
    />
  );
}
