import { useState, useCallback } from 'react'
import { syllabus } from './data/syllabus'
import type { TopicStatus } from './types'
import './App.css'

const STATUS_CYCLE: TopicStatus[] = ['not-started', 'in-progress', 'mastered']

const statusLabels: Record<TopicStatus, string> = {
  'not-started': 'À voir',
  'in-progress': 'En cours',
  'mastered': 'Maîtrisé',
}

function App() {
  const [topicStatus, setTopicStatus] = useState<Map<string, TopicStatus>>(new Map())

  const cycleStatus = useCallback((topicId: string) => {
    setTopicStatus(prev => {
      const next = new Map(prev)
      const current = next.get(topicId) ?? 'not-started'
      const idx = STATUS_CYCLE.indexOf(current)
      next.set(topicId, STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length])
      return next
    })
  }, [])

  const allTopics = syllabus.flatMap(t => t.topics)
  const total = allTopics.length
  const mastered = allTopics.filter(t => (topicStatus.get(t.id) ?? 'not-started') === 'mastered').length
  const inProgress = allTopics.filter(t => (topicStatus.get(t.id) ?? 'not-started') === 'in-progress').length
  const progressPct = total > 0 ? Math.round(((mastered + inProgress * 0.5) / total) * 100) : 0

  return (
    <div className="app">
      <header className="header">
        <div className="header-glass">
          <h1>📚 bac_ses</h1>
          <p className="subtitle">BAC 2026 — Sciences Économiques et Sociales</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPct}%` }} />
            <span className="progress-label">{progressPct}%</span>
          </div>
          <div className="stats">
            <span className="stat"><span className="stat-dot mastered" /> {mastered} maîtrisés</span>
            <span className="stat"><span className="stat-dot in-progress" /> {inProgress} en cours</span>
            <span className="stat"><span className="stat-dot not-started" /> {total - mastered - inProgress} à voir</span>
          </div>
        </div>
      </header>

      <main className="main">
        {syllabus.map(theme => {
          const themeTotal = theme.topics.length
          const themeDone = theme.topics.filter(t => (topicStatus.get(t.id) ?? 'not-started') === 'mastered').length
          const themeProgress = Math.round((themeDone / themeTotal) * 100)

          return (
            <section key={theme.id} className="theme-section">
              <div className="theme-header">
                <span className="theme-icon">{theme.icon}</span>
                <div className="theme-info">
                  <h2>{theme.titleFr}</h2>
                  <p className="theme-sub">{theme.title}</p>
                </div>
                <div className="theme-progress">
                  <div className="theme-progress-ring" style={{
                    background: `conic-gradient(${theme.color} ${themeProgress}%, rgba(255,255,255,0.06) ${themeProgress}%)`
                  }}>
                    <span className="theme-progress-text">{themeProgress}%</span>
                  </div>
                </div>
              </div>

              <div className="topic-list">
                {theme.topics.map(topic => {
                  const status = topicStatus.get(topic.id) ?? 'not-started'
                  return (
                    <button
                      key={topic.id}
                      className={`topic-card status-${status}`}
                      onClick={() => cycleStatus(topic.id)}
                      title="Click to cycle status: À voir → En cours → Maîtrisé"
                    >
                      <div className="topic-body">
                        <h3>{topic.titleFr}</h3>
                        <p className="topic-desc">{topic.description}</p>
                      </div>
                      <span className={`status-badge ${status}`}>
                        {statusLabels[status]}
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>

      <footer className="footer">
        <p>bac_ses — click a topic to cycle its status</p>
      </footer>
    </div>
  )
}

export default App
