import { Routes, Route, Outlet } from "react-router-dom";
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
import { AdminLayout } from "./layouts/AdminLayout";
import { DashboardPage } from "./pages/admin/DashboardPage";
import { UsersPage } from "./pages/admin/UsersPage";

// Main layout with header and footer
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>

          {/* Main Routes with Header and Footer */}
          <Route element={<MainLayout><Outlet /></MainLayout>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tra-cuu-diem-thi" element={<ExamLookupPage />} />
            <Route path="/ket-qua" element={<ResultsPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/de-an-tuyen-sinh" element={<SchoolConsultationPage />} />
            <Route path="/cac-nganh-dao-tao" element={<SchoolMajorCodesPage />} />
            <Route path="/tinh-diem-hoc-ba" element={<UniversityAdmissionCalculatorPage />} />
            <Route path="/diem-chuan" element={<AdmissionResultsPage />} />
            <Route path="/school-consultation" element={<SchoolConsultationPage />} />
            <Route path="/ielts-score-conversion" element={<IeltsScoreConversionPage />} />
            <Route path="/university-admission-calculator" element={<UniversityAdmissionCalculatorPage />} />
            <Route path="/competency-score-conversion" element={<CompetencyScoreConversionPage />} />
            <Route path="/bonus-points" element={<BonusPointsPage />} />
            <Route path="/school-major-codes" element={<SchoolMajorCodesPage />} />
            <Route path="/admission-results" element={<AdmissionResultsPage />} />
            <Route path="/graduation-score-calculator" element={<GraduationScoreCalculatorPage />} />
            <Route path="/exam-rankings" element={<ExamRankingsPage />} />
            <Route path="/graduation-exam-scores" element={<GraduationExamScoresPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/reset-password" element={<ResetPasswordForm />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
