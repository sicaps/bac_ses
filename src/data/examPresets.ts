import type { ExamPreset } from '../types'

export const examPresets: ExamPreset[] = [
  {
    id: 'bac-complet',
    name: 'Épreuve complète BAC',
    description: '30 questions tous thèmes confondus — 60 min — Comme le jour J',
    themeIds: [],
    questionCount: 30,
    duration: 60,
    icon: '🎯',
  },
  {
    id: 'science-economique',
    name: 'Sujet 1 — Science Économique',
    description: '20 questions centrées sur l\'économie — 40 min',
    themeIds: ['science-economique'],
    questionCount: 20,
    duration: 40,
    icon: '📈',
  },
  {
    id: 'sociologie',
    name: 'Sujet 2 — Sociologie',
    description: '20 questions centrées sur la sociologie — 40 min',
    themeIds: ['sociologie'],
    questionCount: 20,
    duration: 40,
    icon: '👥',
  },
  {
    id: 'regards-croises',
    name: 'Sujet 3 — Regards Croisés',
    description: '20 questions centrées sur regards croisés et méthodologie — 40 min',
    themeIds: ['regards-croises'],
    questionCount: 20,
    duration: 40,
    icon: '🔄',
  },
  {
    id: 'express',
    name: 'Express',
    description: '10 questions aléatoires — 15 min — Pour une révision rapide',
    themeIds: [],
    questionCount: 10,
    duration: 15,
    icon: '⚡',
  },
]
