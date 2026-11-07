'use client';
import { useEffect, useState } from 'react';
import type { Lesson } from '@/types/content';
import { useLearningStore } from '@/stores/learning.store';
import { LessonView } from '@/components/lessons/LessonView';
import { ExplorerController } from './ExplorerController';
import { SubmissionController } from './SubmissionController';
import { DecimalExplorerController } from './DecimalExplorerController';
import { getLesson } from '@/services/content.service';
import { TrapezoidController } from './TrapezoidController';
import { PartitionController } from './PartitionController';
import { SquareSequenceController } from './SquareSequenceController';
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
      relatedLessons={(lesson.relatedLessons ?? []).flatMap(slug => {
        const related = getLesson(slug);
        return related ? [{ slug: related.slug, title: related.title }] : [];
      })}
      completed={completed}
      onComplete={() => toggle(lesson.slug)}
      onQuestion={ask}
      explorer={lesson.trapezoidExplorer
        ? <TrapezoidController />
        : lesson.partitionExplorer
        ? <PartitionController key={lesson.partitionExplorer} kind={lesson.partitionExplorer} />
        : lesson.sequenceExplorer
        ? <SquareSequenceController />
        : lesson.decimalExplorer
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
