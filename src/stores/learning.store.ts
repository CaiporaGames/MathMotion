import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
// Apenas progresso local, nunca dados pessoais ou mensagens.
type LearningState = { completed: string[]; toggle: (slug: string) => void };
export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      completed: [],
      toggle: (slug) =>
        set((s) => ({
          completed: s.completed.includes(slug)
            ? s.completed.filter((x) => x !== slug)
            : [...s.completed, slug],
        })),
    }),
    {
      name: 'mathmotion-progress-v1',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
