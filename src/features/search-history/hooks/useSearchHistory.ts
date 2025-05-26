import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchHistoryItem {
  id: string
  studentId: string
  examType: string
  examYear: number
  timestamp: string
}

interface SearchHistoryState {
  history: SearchHistoryItem[]
  addToHistory: (item: Omit<SearchHistoryItem, 'id' | 'timestamp'>) => void
  clearHistory: () => void
}

export const useSearchHistory = create<SearchHistoryState>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (item) => set((state) => ({
        history: [
          {
            ...item,
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
          },
          ...state.history.slice(0, 9), // Keep only last 10 items
        ],
      })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'search-history',
    }
  )
) 