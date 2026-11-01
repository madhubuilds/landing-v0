import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
// Layout & Pages
import Layout from "./app/pages/Layout/Layout";
import HomePage from "./app/pages/HomePage";
import DiscoverPage from "./app/pages/Discover/DiscoverPage";
import HostPage from "./app/pages/Host/HostPage";
import VisionPage from "./app/pages/Vision/VisionPage";
import PrivacyPolicyPage from "./app/pages/privacy/PrivacyPolicy";
import TermsPage from "./app/pages/Terms/Terms";
import NotFoundPage from "./app/pages/NotFoundPage";

function App() {
  const location = useLocation();
  return (
   <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* All routes inside Layout will share the Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="host" element={<HostPage />} />
          <Route path="vision" element={<VisionPage />} />
        </Route>

        {/* Legal and Error pages are outside Layout if you don't want the main nav/footer on them. 
            (Based on your previous setup, they are self-contained cards). */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
