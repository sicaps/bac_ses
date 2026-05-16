import type { Flashcard, QuizQuestion } from '../types'

/**
 * Fisher-Yates shuffle (in-place)
 */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Truncate a string for display as a quiz option.
 * Keep it readable but not enormous.
 */
function truncate(text: string, max = 80): string {
  if (text.length <= max) return text
  const cutoff = text.lastIndexOf(' ', max)
  return cutoff > 0 ? text.slice(0, cutoff) + '…' : text.slice(0, max) + '…'
}

/**
 * Build a multiple-choice QuizQuestion from one flashcard,
 * using answers from other flashcards as distractors.
 */
function buildQuestion(
  card: Flashcard,
  distractorPool: Flashcard[],
): QuizQuestion {
  const correctAnswer = card.answer

  // Pick up to 3 unique distractors from the pool
  const pool = distractorPool.filter(c => c.id !== card.id && c.answer !== correctAnswer)
  const shuffled = shuffle(pool)
  const distractors = shuffled
    .slice(0, 3)
    .map(c => c.answer)

  // If we don't have enough distractors, pad with generic ones
  while (distractors.length < 3) {
    distractors.push('Aucune des réponses ci-dessus')
  }

  // Assemble and shuffle options
  const options = shuffle([correctAnswer, ...distractors])
  const correctIndex = options.indexOf(correctAnswer)

  return {
    flashcardId: card.id,
    question: card.question,
    correctAnswer: truncate(correctAnswer),
    options: options.map(o => truncate(o)),
    correctIndex,
  }
}

/**
 * Generate an array of quiz questions for a given set of flashcards.
 * Each flashcard becomes one MCQ. Distractors are drawn from the
 * same pool (other flashcards in the same set).
 */
export function generateQuiz(flashcards: Flashcard[]): QuizQuestion[] {
  if (flashcards.length < 2) {
    // Need at least 2 cards to generate distractors
    return []
  }

  const questions = flashcards.map(card =>
    buildQuestion(card, flashcards)
  )

  // Shuffle the question order so the user doesn't get them
  // in the same order as the flashcard list
  return shuffle(questions)
}
