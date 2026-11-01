import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./app/pages/HomePage";
import PrivacyPolicyPage from "./app/pages/privacy/PrivacyPolicy";
import TermsPage from "./app/pages/Terms/Terms";
import NotFoundPage from './app/pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      {/* Redirect any unknown URL back to the landing page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
