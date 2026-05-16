import { useState, useMemo, useCallback, useEffect } from 'react'
import type { QuizResult } from '../types'
import { generateQuiz } from '../data/quiz'
import type { Flashcard } from '../types'
import './QuizView.css'

interface Props {
  flashcards: Flashcard[]
  topicTitle: string
  topicIcon: string
  topicColor: string
  onBack: () => void
  onComplete?: (score: number, total: number) => void
}

export function QuizView({ flashcards, topicTitle, topicIcon, topicColor, onBack, onComplete }: Props) {
  const questions = useMemo(() => generateQuiz(flashcards), [flashcards])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [results, setResults] = useState<QuizResult[]>([])
  const [finished, setFinished] = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)

  const currentQ = questions[currentIndex]

  const handleSelect = useCallback((idx: number) => {
    if (selectedIndex !== null) return // already answered this question
    setSelectedIndex(idx)

    const correct = idx === currentQ.correctIndex
    setResults(prev => [...prev, {
      question: currentQ,
      selectedIndex: idx,
      correct,
    }])
  }, [selectedIndex, currentQ])

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1
    if (nextIndex >= questions.length) {
      setFinished(true)
      const finalScore = results.filter(r => r.correct).length
      const total = questions.length
      onComplete?.(finalScore, total)
    } else {
      setCurrentIndex(nextIndex)
      setSelectedIndex(null)
    }
  }, [currentIndex, questions.length, selectedIndex, results, onComplete])

  // ── Keyboard shortcuts ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished || reviewMode) return

      // 1-4 to select options
      const num = parseInt(e.key)
      if (num >= 1 && num <= 4 && selectedIndex === null) {
        const idx = num - 1
        if (idx < currentQ.options.length) {
          handleSelect(idx)
        }
        return
      }

      // Enter to confirm / next
      if (e.key === 'Enter' && selectedIndex !== null) {
        handleNext()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [finished, reviewMode, selectedIndex, currentQ, handleSelect, handleNext])

  const handleRestart = useCallback(() => {
    setCurrentIndex(0)
    setSelectedIndex(null)
    setResults([])
    setFinished(false)
    setReviewMode(false)
    setReviewIndex(0)
  }, [])

  const score = results.filter(r => r.correct).length
  const total = questions.length

  // Not enough flashcards for a quiz
  if (questions.length === 0) {
    return (
      <div className="qz-view">
        <div className="qz-empty">
          <span className="qz-empty-icon">⚠️</span>
          <h2>Pas assez de cartes</h2>
          <p>Il faut au moins 2 flashcards pour générer un quiz.</p>
          <button className="qz-back-btn" onClick={onBack}>← Retour</button>
        </div>
      </div>
    )
  }

  // Review wrong answers
  if (reviewMode) {
    const wrongResults = results.filter(r => !r.correct)
    const reviewQ = wrongResults[reviewIndex]

    if (!reviewQ) {
      setReviewMode(false)
      return null
    }

    return (
      <div className="qz-view">
        <div className="qz-review-header">
          <button className="qz-back-btn" onClick={() => setReviewMode(false)}>← Résultats</button>
          <span>Révision {reviewIndex + 1}/{wrongResults.length}</span>
        </div>
        <div className="qz-card">
          <div className="qz-question-text">{reviewQ.question.question}</div>
          <div className="qz-review-answers">
            <div className="qz-review-correct">
              <span className="qz-review-label">✅ Bonne réponse :</span>
              <p>{reviewQ.question.correctAnswer}</p>
            </div>
            <div className="qz-review-wrong">
              <span className="qz-review-label">❌ Ta réponse :</span>
              <p>{reviewQ.question.options[reviewQ.selectedIndex]}</p>
            </div>
          </div>
        </div>
        <div className="qz-nav">
          {reviewIndex > 0 && (
            <button className="qz-nav-btn" onClick={() => setReviewIndex(i => i - 1)}>← Précédent</button>
          )}
          {reviewIndex < wrongResults.length - 1 ? (
            <button className="qz-nav-btn" onClick={() => setReviewIndex(i => i + 1)}>Suivant →</button>
          ) : (
            <button className="qz-nav-btn" onClick={() => setReviewMode(false)}>Voir le score →</button>
          )}
        </div>
      </div>
    )
  }

  // Finished screen
  if (finished) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0
    const wrongResults = results.filter(r => !r.correct)

    return (
      <div className="qz-view">
        <div className="qz-done">
          <span className="qz-done-icon">🏆</span>
          <h2>Quiz terminé !</h2>
          <div className="qz-score-ring" style={{
            background: `conic-gradient(${topicColor} ${pct}%, rgba(255,255,255,0.06) ${pct}%)`
          }}>
            <span className="qz-score-text">{score}/{total}</span>
          </div>
          <p className="qz-score-pct">{pct}% de bonnes réponses</p>

          <div className="qz-done-actions">
            {wrongResults.length > 0 && (
              <button className="qz-primary-btn" onClick={() => { setReviewMode(true); setReviewIndex(0) }}>
                🔄 Revoir les erreurs ({wrongResults.length})
              </button>
            )}
            <button className="qz-secondary-btn" onClick={handleRestart}>
              🔁 Recommencer
            </button>
            <button className="qz-back-btn" onClick={onBack}>
              ← Retour aux thèmes
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Question screen
  return (
    <div className="qz-view">
      <header className="qz-header">
        <button className="qz-back-btn" onClick={onBack}>← Retour</button>
        <div className="qz-header-info">
          <span>{topicIcon}</span>
          <span>{topicTitle}</span>
        </div>
        <span className="qz-progress" style={{ color: topicColor }}>
          {score}/{currentIndex + (selectedIndex !== null ? 1 : 0)}
        </span>
      </header>

      <div className="qz-card">
        <div className="qz-question-number" style={{ color: topicColor }}>
          Question {currentIndex + 1}/{total}
        </div>
        <div className="qz-question-text">{currentQ.question}</div>
        <p className="qz-keyboard-hint">⌨️ 1-4 pour choisir, Entrée pour valider</p>
      </div>

      <div className="qz-options">
        {currentQ.options.map((option, idx) => {
          let className = 'qz-option'
          let feedback = ''

          if (selectedIndex !== null) {
            if (idx === currentQ.correctIndex) {
              className += ' qz-correct'
              feedback = '✅'
            } else if (idx === selectedIndex) {
              className += ' qz-wrong'
              feedback = '❌'
            }
          }

          return (
            <button
              key={idx}
              className={className}
              onClick={() => handleSelect(idx)}
              disabled={selectedIndex !== null}
            >
              <span className="qz-option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="qz-option-text">{option}</span>
              {feedback && <span className="qz-option-feedback">{feedback}</span>}
            </button>
          )
        })}
      </div>

      {selectedIndex !== null && (
        <div className="qz-feedback-bar">
          {results[results.length - 1]?.correct ? (
            <span className="qz-correct-msg">✅ Bonne réponse !</span>
          ) : (
            <span className="qz-wrong-msg">
              ❌ {currentQ.options[currentQ.correctIndex]}
            </span>
          )}
          <button className="qz-next-btn" onClick={handleNext} style={{ background: topicColor }}>
            {currentIndex + 1 >= total ? 'Voir le score →' : 'Suivante →'}
          </button>
        </div>
      )}
    </div>
  )
}
