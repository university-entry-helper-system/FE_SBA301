// import { useExamTypes } from '../hooks/useExamTypes'
// import type { ExamType } from '../types'

// interface ExamTypeSelectorProps {
//   selectedType?: ExamType
//   onSelect: (type: ExamType) => void
// }

// export const ExamTypeSelector = ({ selectedType, onSelect }: ExamTypeSelectorProps) => {
//   const { data: examTypes, isLoading, error } = useExamTypes()

//   if (isLoading) {
//     return <div className="animate-pulse h-10 bg-gray-200 rounded"></div>
//   }

//   if (error) {
//     return <div className="text-red-500">Failed to load exam types</div>
//   }

//   return (
//     <div className="space-y-2">
//       <label htmlFor="examType" className="block text-sm font-medium text-gray-700">
//         Select Exam Type
//       </label>
//       <select
//         id="examType"
//         className="select"
//         value={selectedType?.id || ''}
//         onChange={(e) => {
//           const selected = examTypes?.find(type => type.id === e.target.value)
//           if (selected) onSelect(selected)
//         }}
//       >
//         <option value="">Select an exam type</option>
//         {examTypes?.map((type) => (
//           <option key={type.id} value={type.id}>
//             {type.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   )
// } 