import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import ExamLookupPage from "./pages/ExamLookupPage";
import ResultsPage from "./pages/ResultsPage";
import { Header } from "./features/navigation/components/Header";
import { Footer } from "./features/navigation/components/Footer";
import { ErrorBoundary } from "./features/error-handling/components/ErrorBoundary";
import { AuthProvider } from "./features/auth/context/AuthContext";
import { LoginForm } from "./features/auth/components/LoginForm";
import { RegisterForm } from "./features/auth/components/RegisterForm";
import { ForgotPasswordForm } from "./features/auth/components/ForgotPasswordForm";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordForm />}
                />
                <Route
                  path="/exam-lookup"
                  element={
                    <ProtectedRoute>
                      <ExamLookupPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/results"
                  element={
                    <ProtectedRoute>
                      <ResultsPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
