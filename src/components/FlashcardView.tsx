import { useState, useMemo, useCallback } from 'react'
import type { Flashcard, ReviewRating } from '../types'
import './FlashcardView.css'

interface Props {
  flashcards: Flashcard[]
  topicTitle: string
  topicIcon: string
  topicColor: string
  onRate: (cardId: string, rating: ReviewRating) => void
  isCardDue: (cardId: string) => boolean
  onBack: () => void
}

export function FlashcardView({ flashcards, topicTitle, topicIcon, topicColor, onRate, isCardDue, onBack }: Props) {
  // Filter to due cards; if none due, show all for review anyway
  const dueCards = useMemo(
    () => {
      const filtered = flashcards.filter(c => isCardDue(c.id))
      return filtered.length > 0 ? filtered : flashcards
    },
    [flashcards, isCardDue],
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [finished, setFinished] = useState(false)
  const [studiedInSession, setStudiedInSession] = useState(0)

  const currentCard = dueCards[currentIndex]

  const handleRate = useCallback((rating: ReviewRating) => {
    if (!currentCard) return
    onRate(currentCard.id, rating)
    setFlipped(false)
    setStudiedInSession(s => s + 1)

    const nextIndex = currentIndex + 1
    if (nextIndex >= dueCards.length) {
      setFinished(true)
    } else {
      setCurrentIndex(nextIndex)
    }
  }, [currentCard, currentIndex, dueCards.length, onRate])

  const handleFlip = useCallback(() => {
    setFlipped(f => !f)
  }, [])

  const handleRestart = useCallback(() => {
    setCurrentIndex(0)
    setFlipped(false)
    setFinished(false)
    setStudiedInSession(0)
  }, [])

  if (dueCards.length === 0) {
    return (
      <div className="fc-view">
        <div className="fc-empty">
          <span className="fc-empty-icon">🎉</span>
          <h2>Toutes les cartes sont étudiées !</h2>
          <p>Toutes les flashcards pour ce thème ont été révisées.</p>
          <button className="fc-back-btn" onClick={onBack}>← Retour aux thèmes</button>
        </div>
      </div>
    )
  }

  if (finished) {
    return (
      <div className="fc-view">
        <div className="fc-done">
          <span className="fc-done-icon">✅</span>
          <h2>Session terminée !</h2>
          <p>{studiedInSession} carte{studiedInSession > 1 ? 's' : ''} révisée{studiedInSession > 1 ? 's' : ''}</p>
          <div className="fc-done-actions">
            <button className="fc-primary-btn" onClick={handleRestart}>Revoir les cartes</button>
            <button className="fc-back-btn" onClick={onBack}>← Retour aux thèmes</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fc-view">
      <header className="fc-header">
        <button className="fc-back-btn" onClick={onBack}>← Retour</button>
        <div className="fc-header-info">
          <span>{topicIcon}</span>
          <span>{topicTitle}</span>
        </div>
        <span className="fc-progress">{currentIndex + 1} / {dueCards.length}</span>
      </header>

      <div className="fc-card-container" onClick={handleFlip}>
        <div className={`fc-card ${flipped ? 'fc-flipped' : ''}`}>
          <div className="fc-card-front">
            <div className="fc-card-label">Question</div>
            <p className="fc-card-text">{currentCard.question}</p>
            <p className="fc-card-hint">Cliquez pour voir la réponse</p>
          </div>
          <div className="fc-card-back">
            <div className="fc-card-label" style={{ color: topicColor }}>Réponse</div>
            <p className="fc-card-text">{currentCard.answer}</p>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="fc-actions">
          <button className="fc-rating again" onClick={() => handleRate('again')}>
            🔄 Encore
          </button>
          <button className="fc-rating good" onClick={() => handleRate('good')}>
            👍 Bien
          </button>
          <button className="fc-rating easy" onClick={() => handleRate('easy')}>
            ⚡ Facile
          </button>
        </div>
      )}

      <div className="fc-progress-bar">
        <div className="fc-progress-fill" style={{
          width: `${((currentIndex + (flipped ? 1 : 0)) / dueCards.length) * 100}%`,
          background: topicColor,
        }} />
      </div>
    </div>
  )
}
