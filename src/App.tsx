import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./features/auth/context/AuthContext";
import { ErrorBoundary } from "./features/error-handling/components/ErrorBoundary";
import { Header } from "./features/navigation/components/Header";
import HomePage from "./pages/HomePage";
import ExamLookupPage from "./pages/ExamLookupPage";
import ResultsPage from "./pages/ResultsPage";
import { SchoolConsultationPage } from "./pages/SchoolConsultationPage";
import { IeltsScoreConversionPage } from "./pages/IeltsScoreConversionPage";
import { UniversityAdmissionCalculatorPage } from "./pages/UniversityAdmissionCalculatorPage";
import { CompetencyScoreConversionPage } from "./pages/CompetencyScoreConversionPage";
import { BonusPointsPage } from "./pages/BonusPointsPage";
import { SchoolMajorCodesPage } from "./pages/SchoolMajorCodesPage";
import { AdmissionResultsPage } from "./pages/AdmissionResultsPage";
import { GraduationScoreCalculatorPage } from "./pages/GraduationScoreCalculatorPage";
import { ExamRankingsPage } from "./pages/ExamRankingsPage";
import { GraduationExamScoresPage } from "./pages/GraduationExamScoresPage";
import { LoginForm } from "./features/auth/components/LoginForm";
import { RegisterForm } from "./features/auth/components/RegisterForm";
import { ForgotPasswordForm } from "./features/auth/components/ForgotPasswordForm";
import { ResetPasswordForm } from "./features/auth/components/ResetPasswordForm";
import { Footer } from "./features/navigation/components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tra-cuu-diem-thi" element={<ExamLookupPage />} />
              <Route path="/ket-qua" element={<ResultsPage />} />

              {/* Auth Routes */}
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />

              {/* Main Navigation Routes */}
              <Route
                path="/de-an-tuyen-sinh"
                element={<SchoolConsultationPage />}
              />
              <Route
                path="/cac-nganh-dao-tao"
                element={<SchoolMajorCodesPage />}
              />
              <Route
                path="/tinh-diem-hoc-ba"
                element={<UniversityAdmissionCalculatorPage />}
              />
              <Route path="/diem-chuan" element={<AdmissionResultsPage />} />

              {/* More Menu Routes */}
              <Route
                path="/school-consultation"
                element={<SchoolConsultationPage />}
              />
              <Route
                path="/ielts-score-conversion"
                element={<IeltsScoreConversionPage />}
              />
              <Route
                path="/university-admission-calculator"
                element={<UniversityAdmissionCalculatorPage />}
              />
              <Route
                path="/competency-score-conversion"
                element={<CompetencyScoreConversionPage />}
              />
              <Route path="/bonus-points" element={<BonusPointsPage />} />
              <Route
                path="/school-major-codes"
                element={<SchoolMajorCodesPage />}
              />
              <Route
                path="/admission-results"
                element={<AdmissionResultsPage />}
              />
              <Route
                path="/graduation-score-calculator"
                element={<GraduationScoreCalculatorPage />}
              />
              <Route path="/exam-rankings" element={<ExamRankingsPage />} />
              <Route
                path="/graduation-exam-scores"
                element={<GraduationExamScoresPage />}
              />
              <Route path="/forgot-password" element={<ForgotPasswordForm />} />
              <Route path="/reset-password" element={<ResetPasswordForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
