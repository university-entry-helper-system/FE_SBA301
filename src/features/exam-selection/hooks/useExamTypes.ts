// import { useQuery } from '@tanstack/react-query'
// import { apiClient } from '@/shared/services/api/client'
// import { API_ENDPOINTS } from '@/config/api'
// import type { ExamType } from '../types'

// export const useExamTypes = () => {
//   return useQuery<ExamType[]>({
//     queryKey: ['examTypes'],
//     queryFn: async () => {
//       const { data } = await apiClient.get(API_ENDPOINTS.examTypes)
//       return data
//     }
//   })
// } 