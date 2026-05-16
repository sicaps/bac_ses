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
