import { atom } from 'jotai'
import { Source } from '@/types/article'

export type TimeRange = 'all' | 'today' | 'week' | 'month'
export type Language = 'all' | 'zh' | 'en'
export type SortBy = 'default' | 'latest' | 'popular'

export interface FilterState {
  timeRange: TimeRange
  language: Language
  sortBy: SortBy
}

export const selectedSourceIdAtom = atom<string | null>(null)
export const selectedSourceAtom = atom<Source | null>(null)

export const filterAtom = atom<FilterState>({
  timeRange: 'all',
  language: 'all',
  sortBy: 'default',
}) 