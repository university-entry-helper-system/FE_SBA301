export const formatScore = (score: number): string => {
  return score.toFixed(2)
}

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// export const formatStudentId = (id: string): string => {
//   // Assuming student IDs are in format YYYYNNNNN
//   if (id.length !== 9) return id
//   const year = id.slice(0, 4)
//   const number = id.slice(4)
//   return `${year}-${number}`
// } 