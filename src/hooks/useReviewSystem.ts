import { useState, useCallback, useEffect } from 'react'
import type { ReviewEntry, ReviewRating } from '../types'

const STORAGE_KEY = 'bac_ses_reviews'

const INTERVALS: Record<ReviewRating, number> = {
  again: 60_000,           // 1 minute
  good: 86_400_000,        // 1 day
  easy: 259_200_000,       // 3 days
}

const LEVEL_MAP: Record<ReviewRating, number> = {
  again: 1,
  good: 2,
  easy: 3,
}

function loadReviews(): Map<string, ReviewEntry> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Map()
    const parsed = JSON.parse(raw) as [string, ReviewEntry][]
    return new Map(parsed)
  } catch {
    return new Map()
  }
}

function saveReviews(reviews: Map<string, ReviewEntry>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(reviews.entries())))
}

export function useReviewSystem() {
  const [reviews, setReviews] = useState<Map<string, ReviewEntry>>(loadReviews)

  useEffect(() => {
    saveReviews(reviews)
  }, [reviews])

  const getStatus = useCallback((cardId: string): ReviewEntry => {
    return reviews.get(cardId) ?? {
      cardId,
      level: 0,
      nextReview: Date.now(),
      lastReviewed: null,
    }
  }, [reviews])

  const rateCard = useCallback((cardId: string, rating: ReviewRating) => {
    setReviews(prev => {
      const next = new Map(prev)
      next.set(cardId, {
        cardId,
        level: LEVEL_MAP[rating],
        nextReview: Date.now() + INTERVALS[rating],
        lastReviewed: Date.now(),
      })
      return next
    })
  }, [])

  const isDue = useCallback((cardId: string): boolean => {
    const entry = reviews.get(cardId)
    if (!entry) return true
    return Date.now() >= entry.nextReview
  }, [reviews])

  const getDueForTopic = useCallback((cardIds: string[]): string[] => {
    return cardIds.filter(id => isDue(id))
  }, [isDue])

  const getStats = useCallback(() => {
    let total = 0
    let mastered = 0
    let learning = 0
    reviews.forEach(entry => {
      total++
      if (entry.level >= 3) mastered++
      else if (entry.level >= 1) learning++
    })
    return { total, mastered, learning, newCards: 0 }
  }, [reviews])

  const resetCard = useCallback((cardId: string) => {
    setReviews(prev => {
      const next = new Map(prev)
      next.delete(cardId)
      return next
    })
  }, [])

  return { reviews, getStatus, rateCard, isDue, getDueForTopic, getStats, resetCard }
}
