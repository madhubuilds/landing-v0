import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../constance/constance";
import { useAppStore } from "../store/useAppStore";

export default function NotFoundPage() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `404 - Page Not Found | ${BRAND_NAME}?`;
  }, []);

  return (
    <main
      className={`flex min-h-screen items-center justify-center px-4 py-12 font-sans transition-colors duration-300 sm:px-6 lg:px-8 ${
        isDark
          ? "dark bg-[#171717] text-[#F5F5F5]"
          : "bg-[#FFFDF7] text-slate-950"
      }`}
    >
      <div
        className={`w-full max-w-lg border-2 p-8 text-center sm:p-12 ${
          isDark
            ? "border-white bg-[#1F1F1F] shadow-[6px_6px_0px_#ffffff]"
            : "border-black bg-white shadow-[6px_6px_0px_#080808]"
        }`}
      >
        <div
          className={`mx-auto mb-6 inline-block border-2 px-4 py-1 text-xs font-black uppercase tracking-widest ${
            isDark
              ? "border-white bg-teal-500 text-slate-950"
              : "border-black bg-teal-400 text-slate-950"
          }`}
        >
          Error 404
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Off the Map<span className="text-teal-500">?</span>
        </h1>

        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Looks like this spot isn&apos;t on the Hyderabad map yet. The page you are looking for might have been moved, renamed, or never existed.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className={`w-full border-2 px-6 py-3 text-sm font-bold transition-all sm:w-auto ${
              isDark
                ? "border-white bg-teal-500 text-slate-950 shadow-[3px_3px_0px_#ffffff] hover:bg-teal-400"
                : "border-black bg-teal-400 text-slate-950 shadow-[3px_3px_0px_#080808] hover:bg-teal-300"
            }`}
          >
            ← Back to {BRAND_NAME}?
          </Link>
        </div>
      </div>
    </main>
  );
}