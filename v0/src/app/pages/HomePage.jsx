import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../constance/constance";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Vision from "../components/Vision/Vision";
import CreateActivity from "../components/Activity/CreateActivity";
import Discover from "../components/Discover/Discover";
import ActivityDetails from "../components/ActivityDetails/ActivityDetails";
import { useAppStore } from "../store/useAppStore";
import EarlyAccess from "../components/EarlyAccess/EarlyAccess";

export default function HomePage() {
  const theme = useAppStore((state) => state.theme);
  const selectedActivity = useAppStore((state) => state.selectedActivity);
  const clearSelectedActivity = useAppStore(
    (state) => state.clearSelectedActivity,
  );

  const isDark = theme === "dark";
  useEffect(() => {
    document.title = `${BRAND_NAME}? | Discover Hyderabad`;
  }, []);
  return (
    <div
      className={`min-h-screen overflow-x-clip font-sans transition-colors duration-300 ${
        isDark
          ? "dark bg-[#171717] text-[#F5F5F5]"
          : "bg-[#FFFDF7] text-slate-950"
      }`}
    >
      <Navbar />

      <main className="w-full pt-24 sm:pt-28">
        {selectedActivity ? (
          <ActivityDetails
            activity={selectedActivity}
            onBack={clearSelectedActivity}
          />
        ) : (
          <>
            <Hero />

            <Discover />

            <CreateActivity />

            <section
              className={`mt-16 border-t-2 sm:mt-24 ${
                isDark ? "border-white/10" : "border-black/10"
              }`}
            >
              <Vision />
            </section>
          </>
        )}
        <EarlyAccess />
      </main>

      <footer
        id="contact"
        className={`border-t-2 px-4 pb-24 pt-8 sm:px-6 md:pb-8 lg:px-8 ${
          isDark ? "border-white bg-[#171717]" : "border-black bg-[#FFFDF7]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <a href="#home" className="text-sm font-black tracking-tight">
            {BRAND_NAME}
            <span className="text-teal-500">?</span>
          </a>

          <p
            className={`text-xs sm:text-sm ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            © {new Date().getFullYear()} {BRAND_NAME}. Built in Hyderabad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-bold">
            <Link
              to="/privacy"
              className="transition-colors hover:text-teal-500"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-teal-500">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
