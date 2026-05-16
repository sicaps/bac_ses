import { useState, useCallback, useEffect } from 'react'
import type { QuizRecord } from '../types'

const STORAGE_KEY = 'bac_ses_quiz_history'
const MAX_RECORDS = 20

function loadHistory(): QuizRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as QuizRecord[]
  } catch {
    return []
  }
}

function saveHistory(records: QuizRecord[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export function useQuizHistory() {
  const [records, setRecords] = useState<QuizRecord[]>(loadHistory)

  useEffect(() => {
    saveHistory(records)
  }, [records])

  const addRecord = useCallback((record: Omit<QuizRecord, 'date'>) => {
    setRecords(prev => {
      const next = [{ ...record, date: Date.now() }, ...prev]
      // Keep only the most recent MAX_RECORDS
      if (next.length > MAX_RECORDS) next.length = MAX_RECORDS
      return next
    })
  }, [])

  const recent = records.slice(0, 10)

  const bestStreak = (() => {
    let streak = 0
    let current = 0
    for (const r of records) {
      if (r.score === r.total) {
        current++
        if (current > streak) streak = current
      } else {
        current = 0
      }
    }
    return streak
  })()

  const avgScore = records.length > 0
    ? Math.round(records.reduce((sum, r) => sum + (r.score / r.total), 0) / records.length * 100)
    : 0

  return { records, recent, bestStreak, avgScore, addRecord }
}
