import { useMemo } from 'react'
import type { TopicStatus, Theme, QuizRecord } from '../types'
import './Dashboard.css'

interface Props {
  topicStatus: Map<string, TopicStatus>
  syllabus: Theme[]
  reviewStats: { total: number; mastered: number; learning: number }
  dueCount: number
  quizHistory: QuizRecord[]
  bestStreak: number
  avgScore: number
  onBack: () => void
}

export function Dashboard({
  topicStatus,
  syllabus,
  reviewStats,
  dueCount,
  quizHistory,
  bestStreak,
  avgScore,
  onBack,
}: Props) {
  // ── Topic stats ──
  const allTopics = useMemo(() => syllabus.flatMap(t => t.topics), [syllabus])
  const totalTopics = allTopics.length

  const topicStats = useMemo(() => {
    let mastered = 0
    let inProgress = 0
    let notStarted = 0
    allTopics.forEach(t => {
      const s = topicStatus.get(t.id) ?? 'not-started'
      if (s === 'mastered') mastered++
      else if (s === 'in-progress') inProgress++
      else notStarted++
    })
    return { mastered, inProgress, notStarted, total: totalTopics }
  }, [allTopics, topicStatus, totalTopics])

  const topicPct = totalTopics > 0 ? Math.round((topicStats.mastered / totalTopics) * 100) : 0

  // ── Review stats ──
  const reviewPct = reviewStats.total > 0
    ? Math.round((reviewStats.mastered / reviewStats.total) * 100)
    : 0

  // ── Readiness score ──
  const readinessScore = useMemo(() => {
    const topicWeight = 0.35
    const reviewWeight = 0.35
    const quizWeight = 0.30

    const topicScore = topicPct / 100
    const reviewScore = reviewPct / 100
    const quizScore = avgScore / 100

    return Math.round((topicScore * topicWeight + reviewScore * reviewWeight + quizScore * quizWeight) * 100)
  }, [topicPct, reviewPct, avgScore])

  // ── Theme breakdown ──
  const themeBreakdown = useMemo(() => {
    return syllabus.map(theme => {
      const total = theme.topics.length
      const done = theme.topics.filter(t => (topicStatus.get(t.id) ?? 'not-started') === 'mastered').length
      const pct = total > 0 ? Math.round((done / total) * 100) : 0
      return { ...theme, done, pct, total }
    })
  }, [syllabus, topicStatus])

  return (
    <div className="db-view">
      <header className="db-header">
        <button className="db-back-btn" onClick={onBack}>← Retour</button>
        <h1>📊 Tableau de bord</h1>
        <div />
      </header>

      <div className="db-grid">
        {/* ── Readiness ── */}
        <div className="db-card db-readiness">
          <h3>Niveau de préparation</h3>
          <div className="db-big-ring" style={{
            background: `conic-gradient(#6366f1 ${readinessScore}%, rgba(255,255,255,0.06) ${readinessScore}%)`
          }}>
            <span className="db-big-score">{readinessScore}%</span>
          </div>
        </div>

        {/* ── Topic Mastery ── */}
        <div className="db-card">
          <h3>Thèmes maîtrisés</h3>
          <div className="db-ring-sm" style={{
            background: `conic-gradient(#22c55e ${topicPct}%, rgba(255,255,255,0.06) ${topicPct}%)`
          }}>
            <span className="db-ring-text">{topicStats.mastered}/{topicStats.total}</span>
          </div>
          <div className="db-legend">
            <span><span className="db-dot mastered" /> {topicStats.mastered} maîtrisés</span>
            <span><span className="db-dot in-progress" /> {topicStats.inProgress} en cours</span>
            <span><span className="db-dot not-started" /> {topicStats.notStarted} à voir</span>
          </div>
        </div>

        {/* ── Flashcards ── */}
        <div className="db-card">
          <h3>Flashcards</h3>
          <div className="db-ring-sm" style={{
            background: `conic-gradient(#14b8a6 ${reviewPct}%, rgba(255,255,255,0.06) ${reviewPct}%)`
          }}>
            <span className="db-ring-text">{reviewStats.mastered}/{reviewStats.total}</span>
          </div>
          <div className="db-legend">
            <span><span className="db-dot mastered" /> {reviewStats.mastered} maîtrisées</span>
            <span><span className="db-dot in-progress" /> {reviewStats.learning} en apprentissage</span>
            <span className={dueCount > 0 ? 'db-due-alert' : ''}>
              📅 {dueCount} à réviser
            </span>
          </div>
        </div>

        {/* ── Quiz ── */}
        <div className="db-card">
          <h3>Quiz</h3>
          <div className="db-big-stat">{avgScore}%</div>
          <p className="db-stat-label">Moyenne</p>
          <div className="db-legend">
            <span>🏆 Meilleure série : {bestStreak}</span>
            <span>📝 {quizHistory.length} quiz complétés</span>
          </div>
        </div>
      </div>

      {/* ── Theme Breakdown ── */}
      <div className="db-section">
        <h2>Répartition par thème</h2>
        <div className="db-theme-list">
          {themeBreakdown.map(t => (
            <div key={t.id} className="db-theme-row">
              <div className="db-theme-info">
                <span>{t.icon}</span>
                <div>
                  <div className="db-theme-name">{t.titleFr}</div>
                  <div className="db-theme-bar">
                    <div className="db-theme-fill" style={{
                      width: `${t.pct}%`,
                      background: t.color,
                    }} />
                  </div>
                </div>
              </div>
              <span className="db-theme-pct">{t.done}/{t.total}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recent Quiz History ── */}
      {quizHistory.length > 0 && (
        <div className="db-section">
          <h2>Quiz récents</h2>
          <div className="db-quiz-list">
            {quizHistory.slice(0, 10).map((q, i) => (
              <div key={i} className="db-quiz-row">
                <span className="db-quiz-date">
                  {new Date(q.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                </span>
                <span className="db-quiz-topic">{q.topicName}</span>
                <span className={`db-quiz-score ${q.score === q.total ? 'db-perfect' : q.score / q.total >= 0.7 ? 'db-good' : ''}`}>
                  {q.score}/{q.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
