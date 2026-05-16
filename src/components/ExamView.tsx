import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { generateQuiz } from '../data/quiz'
import { flashcards } from '../data/flashcards'
import { syllabus } from '../data/syllabus'
import type { QuizQuestion, ExamPreset } from '../types'
import { examPresets } from '../data/examPresets'
import './ExamView.css'

interface AnswerRecord {
  question: QuizQuestion
  selectedIndex: number | null  // null = unanswered / timed out
}

// Empty — replaced by presets

function themeForQuestion(q: QuizQuestion): { name: string; color: string; icon: string } {
  const card = flashcards.find(f => f.id === q.flashcardId)
  if (!card) return { name: 'SES', color: '#6366f1', icon: '📝' }
  for (const theme of syllabus) {
    if (theme.topics.some(tp => tp.id === card.topicId)) {
      return { name: theme.titleFr, color: theme.color, icon: theme.icon }
    }
  }
  return { name: 'SES', color: '#6366f1', icon: '📝' }
}

interface Props {
  onBack: () => void
  onComplete?: (score: number, total: number) => void
}

export function ExamView({ onBack, onComplete }: Props) {
  const [phase, setPhase] = useState<'setup' | 'exam' | 'results'>('setup')
  const [selectedPreset, setSelectedPreset] = useState<ExamPreset>(examPresets[0])
  const [timeRemaining, setTimeRemaining] = useState(selectedPreset.duration * 60)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(-1)

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Generate exam questions based on preset
  const examQuestions = useMemo(() => {
    // Filter flashcards by theme if preset specifies themeIds
    let pool = flashcards
    if (selectedPreset.themeIds.length > 0) {
      const topicIds = new Set(
        syllabus
          .filter(t => selectedPreset.themeIds.includes(t.id))
          .flatMap(t => t.topics.map(tp => tp.id))
      )
      pool = flashcards.filter(f => topicIds.has(f.topicId))
    }
    // If not enough cards in theme filter, fall back to all
    if (pool.length < 2) pool = flashcards
    const all = generateQuiz(pool)
    return all.slice(0, selectedPreset.questionCount)
  }, [selectedPreset])

  const currentQ = examQuestions[currentIndex]

  // ── Timer ──
  useEffect(() => {
    if (phase !== 'exam' || submitted) return

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up — auto-submit
          clearInterval(timerRef.current!)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, submitted])

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
    const s = sec % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const pct = selectedPreset.duration > 0 ? Math.round(((selectedPreset.duration * 60 - timeRemaining) / (selectedPreset.duration * 60)) * 100) : 0
  const isLowTime = timeRemaining > 0 && timeRemaining <= 60
  const isCritical = timeRemaining > 0 && timeRemaining <= 30

  // ── Start exam ──
  const handleStart = useCallback(() => {
    setTimeRemaining(selectedPreset.duration * 60)
    setCurrentIndex(0)
    setAnswers([])
    setSelectedIndex(null)
    setSubmitted(false)
    setReviewIndex(-1)
    setPhase('exam')
  }, [selectedPreset])

  // ── Select answer ──
  const handleSelect = useCallback((idx: number) => {
    if (submitted) return
    setSelectedIndex(idx)
  }, [submitted])

  // ── Next question ──
  const handleNext = useCallback(() => {
    if (selectedIndex === null) return

    const record: AnswerRecord = {
      question: currentQ,
      selectedIndex,
    }

    const nextAnswers = [...answers, record]
    setAnswers(nextAnswers)
    setSelectedIndex(null)

    if (currentIndex + 1 >= examQuestions.length) {
      // Answered all questions
      clearInterval(timerRef.current!)
      if (timerRef.current) clearInterval(timerRef.current)
      setAnswers(nextAnswers)
      setSubmitted(true)
      const score = nextAnswers.filter(a => a.selectedIndex !== null && a.selectedIndex === a.question.correctIndex).length
      onComplete?.(score, examQuestions.length)
      setPhase('results')
    } else {
      setCurrentIndex(i => i + 1)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, currentQ, currentIndex, answers, examQuestions.length, onComplete])

  // ── Submit on timeout ──
  const handleSubmit = useCallback(() => {
    if (submitted) return

    // Record current answer if any
    const finalAnswers = selectedIndex !== null
      ? [...answers, { question: currentQ, selectedIndex }]
      : answers

    // Mark remaining questions as unanswered
    const remaining = examQuestions.slice(finalAnswers.length)
    const allAnswers = [
      ...finalAnswers,
      ...remaining.map(q => ({ question: q, selectedIndex: null as null })),
    ]

    setAnswers(allAnswers)
    setSubmitted(true)
    setSelectedIndex(null)

    const score = allAnswers.filter(a => a.selectedIndex !== null && a.selectedIndex === a.question.correctIndex).length
    onComplete?.(score, examQuestions.length)
    setPhase('results')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, selectedIndex, currentQ, answers, examQuestions, onComplete])

  // ── Score ──
  const score = useMemo(() => {
    if (!submitted) return 0
    return answers.filter(a => a.selectedIndex !== null && a.selectedIndex === a.question.correctIndex).length
  }, [submitted, answers])

  const total = examQuestions.length
  const scorePct = total > 0 ? Math.round((score / total) * 100) : 0
  // ── Theme breakdown ──
  const themeBreakdown = useMemo(() => {
    if (!submitted) return []
    const map = new Map<string, { correct: number; total: number; name: string }>()

    answers.forEach(a => {
      const theme = themeForQuestion(a.question)
      const entry = map.get(theme.name) ?? { correct: 0, total: 0, name: theme.name }
      entry.total++
      if (a.selectedIndex !== null && a.selectedIndex === a.question.correctIndex) {
        entry.correct++
      }
      map.set(theme.name, entry)
    })

    return Array.from(map.values())
  }, [submitted, answers])

  // ── Review item ──
  const reviewItem = reviewIndex >= 0 ? answers[reviewIndex] : null

  // ── SETUP SCREEN ──
  if (phase === 'setup') {
    return (
      <div className="exam-view">
        <header className="exam-header">
          <button className="exam-back-btn" onClick={onBack}>← Retour</button>
          <h1>📝 Examen blanc</h1>
          <div />
        </header>

        <div className="exam-preset-grid">
          {examPresets.map(preset => (
            <button
              key={preset.id}
              className={`exam-preset-card ${selectedPreset.id === preset.id ? 'exam-preset-selected' : ''}`}
              onClick={() => setSelectedPreset(preset)}
            >
              <span className="exam-preset-icon">{preset.icon}</span>
              <div className="exam-preset-info">
                <div className="exam-preset-name">{preset.name}</div>
                <div className="exam-preset-desc">{preset.description}</div>
                <div className="exam-preset-meta">
                  <span>{preset.questionCount} questions</span>
                  <span>•</span>
                  <span>{preset.duration} min</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button className="exam-start-btn" onClick={handleStart}>
          ▶️ Commencer l'examen
        </button>
      </div>
    )
  }

  // ── RESULTS SCREEN ──
  if (phase === 'results') {
    // Individual review mode
    if (reviewItem && reviewIndex >= 0 && reviewIndex < answers.length) {
      const q = reviewItem.question
      const wasUnanswered = reviewItem.selectedIndex === null

      return (
        <div className="exam-view">
          <div className="exam-review-header">
            <button className="exam-back-btn" onClick={() => setReviewIndex(-1)}>← Résultats</button>
            <span>Révision {reviewIndex + 1}/{answers.length}</span>
          </div>

          <div className="exam-question-card review-mode">
            <div className="exam-question-number">Question {reviewIndex + 1}</div>
            <div className="exam-question-text">{q.question}</div>
          </div>

          <div className="exam-options">
            {q.options.map((opt, idx) => {
              let cls = 'exam-option'
              if (idx === q.correctIndex) cls += ' exam-correct'
              if (idx === reviewItem.selectedIndex && idx !== q.correctIndex) cls += ' exam-wrong'

              return (
                <div key={idx} className={cls}>
                  <span className="exam-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="exam-option-text">{opt}</span>
                  {idx === q.correctIndex && <span className="exam-option-feedback">✅</span>}
                  {idx === reviewItem.selectedIndex && idx !== q.correctIndex && <span className="exam-option-feedback">❌</span>}
                </div>
              )
            })}
          </div>

          {wasUnanswered && (
            <div className="exam-unanswered-note">⏰ Non répondue</div>
          )}

          <div className="exam-nav">
            {reviewIndex > 0 && (
              <button className="exam-nav-btn" onClick={() => setReviewIndex(i => i - 1)}>← Précédente</button>
            )}
            <div />
            {reviewIndex < answers.length - 1 ? (
              <button className="exam-nav-btn" onClick={() => setReviewIndex(i => i + 1)}>Suivante →</button>
            ) : (
              <button className="exam-nav-btn" onClick={() => setReviewIndex(-1)}>Résultats</button>
            )}
          </div>
        </div>
      )
    }

    // Main results screen
    return (
      <div className="exam-view">
        <header className="exam-header">
          <button className="exam-back-btn" onClick={onBack}>← Accueil</button>
          <h1>📝 Résultats</h1>
          <div />
        </header>

        {scorePct === 100 && <div className="exam-confetti" />}
        <div className="exam-result-card">
          <div className="exam-result-ring" style={{
            background: `conic-gradient(#6366f1 ${scorePct}%, rgba(255,255,255,0.06) ${scorePct}%)`
          }}>
            <span className="exam-result-text">{score}/{total}</span>
          </div>
          <div className="exam-result-pct">{scorePct}%</div>
          <div className="exam-result-time">
            ⏱️ {formatTime(selectedPreset.duration * 60 - timeRemaining)} / {formatTime(selectedPreset.duration * 60)}
          </div>

          <div className="exam-theme-breakdown">
            <h3>Par thème</h3>
            {themeBreakdown.map(t => (
              <div key={t.name} className="exam-theme-row">
                <span>{t.name}</span>
                <span className={t.correct === t.total ? 'exam-perfect' : t.correct / t.total >= 0.6 ? 'exam-good' : ''}>
                  {t.correct}/{t.total}
                </span>
              </div>
            ))}
          </div>

          <div className="exam-result-actions">
            <button className="exam-primary-btn" onClick={() => setReviewIndex(0)}>
              🔍 Revoir les réponses
            </button>
            <button className="exam-secondary-btn" onClick={handleStart}>
              🔁 Nouvel examen
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── EXAM SCREEN ──
  return (
    <div className="exam-view">
      <header className="exam-header">
        <div className={`exam-timer ${isCritical ? 'critical' : isLowTime ? 'low' : ''}`}>
          ⏱️ {formatTime(timeRemaining)}
        </div>
        <div className="exam-header-info">
          <span className="exam-progress-text">{currentIndex + 1}/{examQuestions.length}</span>
        </div>
      </header>

      <div className="exam-timer-bar">
        <div className="exam-timer-fill" style={{
          width: `${pct}%`,
          background: isCritical ? '#ef4444' : isLowTime ? '#fbbf24' : '#6366f1',
        }} />
      </div>

      <div className="exam-question-card">
        <div className="exam-question-number">Question {currentIndex + 1}</div>
        <div className="exam-question-text">{currentQ.question}</div>
      </div>

      <div className="exam-options">
        {currentQ.options.map((opt, idx) => {
          let cls = 'exam-option'
          if (selectedIndex === idx) cls += ' exam-selected'

          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleSelect(idx)}
            >
              <span className="exam-option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="exam-option-text">{opt}</span>
            </button>
          )
        })}
      </div>

      <div className="exam-footer">
        <span className="exam-answered-count">
          {answers.length + (selectedIndex !== null ? 1 : 0)} répondue{answers.length + (selectedIndex !== null ? 1 : 0) > 1 ? 's' : ''}
        </span>
        <button
          className={`exam-next-btn ${selectedIndex !== null ? 'exam-ready' : ''}`}
          onClick={handleNext}
          disabled={selectedIndex === null}
        >
          {currentIndex + 1 >= total ? 'Terminer →' : 'Suivante →'}
        </button>
      </div>
    </div>
  )
}
