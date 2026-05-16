export type TopicStatus = 'not-started' | 'in-progress' | 'mastered'

export interface Topic {
  id: string
  title: string
  titleFr: string
  description: string
  status: TopicStatus
}

export interface Theme {
  id: string
  title: string
  titleFr: string
  icon: string
  color: string
  topics: Topic[]
}

export interface Flashcard {
  id: string
  topicId: string
  question: string
  answer: string
}

export type ReviewRating = 'again' | 'good' | 'easy'

export interface ReviewEntry {
  cardId: string
  level: number        // 0=new, 1=again, 2=good, 3=easy
  nextReview: number   // epoch ms
  lastReviewed: number | null
}

export type AppView = 'browse' | 'study' | 'quiz' | 'dashboard' | 'glossary' | 'exam'

export interface QuizRecord {
  date: number
  topicId: string
  topicName: string
  score: number
  total: number
}

export interface QuizQuestion {
  flashcardId: string
  question: string
  correctAnswer: string
  options: string[]     // [correctAnswer, distractor1, distractor2, distractor3] — shuffled
  correctIndex: number  // index of correctAnswer after shuffle
}

export interface QuizResult {
  question: QuizQuestion
  selectedIndex: number
  correct: boolean
}
