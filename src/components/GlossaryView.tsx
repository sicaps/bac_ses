import { useState, useMemo } from 'react'
import { glossary, type GlossaryEntry } from '../data/glossary'
import { syllabus } from '../data/syllabus'
import './GlossaryView.css'

interface Props {
  onBack: () => void
}

function themeColor(themeId: string): string {
  const theme = syllabus.find(t => t.id === themeId)
  return theme?.color ?? 'var(--text)'
}

function themeIcon(themeId: string): string {
  const theme = syllabus.find(t => t.id === themeId)
  return theme?.icon ?? '📝'
}

export function GlossaryView({ onBack }: Props) {
  const [search, setSearch] = useState('')
  const [activeTheme, setActiveTheme] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  const themes = useMemo(
    () => [{ id: null, label: 'Tous' }, ...syllabus.map(t => ({ id: t.id, label: t.titleFr }))],
    [],
  )

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return glossary.filter(entry => {
      if (activeTheme && entry.themeId !== activeTheme) return false
      if (!q) return true
      return (
        entry.termFr.toLowerCase().includes(q) ||
        entry.termEn.toLowerCase().includes(q) ||
        entry.definition.toLowerCase().includes(q)
      )
    })
  }, [search, activeTheme])

  const toggleExpanded = (id: string) => {
    setExpanded(prev => prev === id ? null : id)
  }

  const relatedTerms = (ids: string[]) => {
    return ids
      .map(id => glossary.find(e => e.id === id))
      .filter((e): e is GlossaryEntry => e !== undefined)
  }

  return (
    <div className="glo-view">
      <header className="glo-header">
        <button className="glo-back-btn" onClick={onBack}>← Retour</button>
        <h1>📖 Glossaire</h1>
        <div />
      </header>

      {/* ── Search ── */}
      <div className="glo-search">
        <span className="glo-search-icon">🔍</span>
        <input
          type="text"
          className="glo-search-input"
          placeholder="Rechercher un concept..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          autoFocus
        />
        {search && (
          <button className="glo-clear-btn" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {/* ── Theme filter tabs ── */}
      <div className="glo-tabs">
        {themes.map(t => (
          <button
            key={t.id ?? 'all'}
            className={`glo-tab ${activeTheme === t.id ? 'glo-active' : ''}`}
            onClick={() => setActiveTheme(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Results count ── */}
      <p className="glo-count">{filtered.length} concept{filtered.length > 1 ? 's' : ''}</p>

      {/* ── Entries ── */}
      <div className="glo-list">
        {filtered.map(entry => (
          <div key={entry.id} className="glo-card">
            <button
              className="glo-card-header"
              onClick={() => toggleExpanded(entry.id)}
              style={{ borderLeftColor: themeColor(entry.themeId) }}
            >
              <div className="glo-card-info">
                <span className="glo-theme-badge" style={{ background: themeColor(entry.themeId) }}>
                  {themeIcon(entry.themeId)}
                </span>
                <div>
                  <div className="glo-term-fr">{entry.termFr}</div>
                  <div className="glo-term-en">{entry.termEn}</div>
                </div>
              </div>
              <span className={`glo-expand-icon ${expanded === entry.id ? 'glo-open' : ''}`}>
                ▼
              </span>
            </button>

            {expanded === entry.id && (
              <div className="glo-card-body">
                <div className="glo-section">
                  <span className="glo-section-label">Définition</span>
                  <p>{entry.definition}</p>
                </div>
                <div className="glo-section">
                  <span className="glo-section-label">Exemple</span>
                  <p className="glo-example">{entry.example}</p>
                </div>
                {entry.related.length > 0 && (
                  <div className="glo-section">
                    <span className="glo-section-label">Concepts liés</span>
                    <div className="glo-related">
                      {relatedTerms(entry.related).map(r => (
                        <button
                          key={r.id}
                          className="glo-related-chip"
                          onClick={() => {
                            toggleExpanded(r.id)
                            setSearch('')
                            setActiveTheme(null)
                          }}
                          style={{ borderColor: themeColor(r.themeId) }}
                        >
                          {r.termFr}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glo-empty">
          <p>Aucun concept trouvé pour « {search} »</p>
        </div>
      )}
    </div>
  )
}
