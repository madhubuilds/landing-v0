import { Outlet, Link } from "react-router-dom";
import { BRAND_NAME } from "../../constance/constance";
import Navbar from "../../components/Navbar/Navbar";
import { useAppStore } from "../../store/useAppStore";

export default function Layout() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex min-h-screen flex-col overflow-x-clip font-sans transition-colors duration-300 ${
        isDark
          ? "dark bg-[#171717] text-[#F5F5F5]"
          : "bg-[#FFFDF7] text-slate-950"
      }`}
    >
      <Navbar />

      {/* The current route's page content injects here */}
      <main className="flex-grow pt-24 sm:pt-28">
        <Outlet />
      </main>

      <footer
        className={`border-t-2 px-4 pb-24 pt-8 sm:px-6 md:pb-8 lg:px-8 mt-auto ${
          isDark ? "border-white bg-[#171717]" : "border-black bg-[#FFFDF7]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <Link to="/" className="text-sm font-black tracking-tight">
            {BRAND_NAME}
            <span className="text-teal-500">?</span>
          </Link>

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
            <Link
              to="/terms"
              className="transition-colors hover:text-teal-500"
            >
              Terms
            </Link>
            <a
              href="mailto:hello@whatstoday.in"
              className="transition-colors hover:text-teal-500"
            >
              Get in touch ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}