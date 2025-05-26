// import { z } from 'zod'

// export const studentSearchSchema = z.object({
//   studentId: z.string()
//     .min(1, 'Student ID is required')
//     .max(20, 'Student ID must be less than 20 characters'),
//   examYear: z.number()
//     .int('Year must be a whole number')
//     .min(2000, 'Year must be after 2000')
//     .max(new Date().getFullYear(), 'Year cannot be in the future'),
//   examType: z.string()
//     .min(1, 'Exam type is required'),
// })

// export type StudentSearchInput = z.infer<typeof studentSearchSchema>

// export const validateStudentSearch = (data: unknown): StudentSearchInput => {
//   return studentSearchSchema.parse(data)
// } 