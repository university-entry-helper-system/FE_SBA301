export interface ExamType {
  id: string
  name: string
  code: string
}

export interface ExamYear {
  id: string
  year: number
  isActive: boolean
}

export interface ExamCategory {
  id: string
  name: string
  code: string
  description?: string
}

export type ExamSelectionState = {
  selectedType?: ExamType
  selectedYear?: ExamYear
  selectedCategory?: ExamCategory
} 