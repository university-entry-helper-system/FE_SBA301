import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/HomePage'
import ExamLookupPage from './pages/ExamLookupPage'
import ResultsPage from './pages/ResultsPage'
import { Header } from './features/navigation/components/Header'
import { Footer } from './features/navigation/components/Footer'
import { ErrorBoundary } from './features/error-handling/components/ErrorBoundary'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exam-lookup" element={<ExamLookupPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default App 