import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../../constance/constance";
import { useAppStore } from "../../store/useAppStore";

export default function TermsPage() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Terms & Conditions | ${BRAND_NAME}?`;
  }, []);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 px-4 py-10 sm:px-6 lg:px-8 ${
        isDark
          ? "dark bg-[#171717] text-[#F5F5F5]"
          : "bg-[#FFFDF7] text-slate-950"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 border-2 px-4 py-2 text-sm font-bold transition-all ${
              isDark
                ? "border-white bg-[#222222] text-[#F5F5F5] shadow-[3px_3px_0px_#ffffff] hover:bg-teal-500 hover:text-slate-950"
                : "border-black bg-teal-400 text-slate-950 shadow-[3px_3px_0px_#080808] hover:bg-teal-300"
            }`}
          >
            ← Back to {BRAND_NAME}?
          </Link>

          <Link
            to="/privacy"
            className="text-sm font-bold underline transition-colors hover:text-teal-500"
          >
            Privacy Policy →
          </Link>
        </div>

        <article
          className={`space-y-6 border-2 p-6 sm:p-10 ${
            isDark
              ? "border-white bg-[#1F1F1F] shadow-[6px_6px_0px_#ffffff]"
              : "border-black bg-white shadow-[6px_6px_0px_#080808]"
          }`}
        >
          <header
            className={`border-b-2 pb-4 ${
              isDark ? "border-white/20" : "border-black"
            }`}
          >
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Terms &amp; Conditions
            </h1>
            <p
              className={`mt-2 text-sm ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Effective Date: November 1, 2026 | Last Updated: November 1, 2026
            </p>
          </header>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              By accessing or using the <strong>{BRAND_NAME}?</strong> website and joining our early-access waitlist, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please discontinue use of the website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">2. Nature of Early-Access Service</h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {BRAND_NAME}? is currently in an early-access and pre-launch phase focused on local discovery in Hyderabad, India. Joining the waitlist does not guarantee immediate access, specific launch timelines, or permanent availability of any previewed features. We reserve the right to modify, pause, or discontinue features as we build and test the platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">3. Acceptable Use</h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              When using our website or submitting forms, you agree not to:
            </p>
            <ul
              className={`list-disc space-y-1 pl-5 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <li>Submit false, misleading, or unauthorized email addresses belonging to others.</li>
              <li>Attempt to spam, flood, scrape, or bypass rate limits on our backend APIs.</li>
              <li>Interfere with or disrupt the security or availability of the website.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">4. Intellectual Property</h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              All branding, logos, illustrations, UI designs, mascots, text, and code on {BRAND_NAME}? are the intellectual property of {BRAND_NAME}? and may not be copied, reproduced, or redistributed without prior written permission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">5. Disclaimer of Warranties &amp; Liability</h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              The website and waitlist are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. Once local discovery listings go live, event timings, venue details, and third-party activities are subject to change by their respective organizers. To the maximum extent permitted under Indian law, {BRAND_NAME}? shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">6. Governing Law &amp; Jurisdiction</h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              These Terms &amp; Conditions are governed by the laws of the Republic of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Hyderabad, Telangana, India</strong>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}