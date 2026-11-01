import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../../constance/constance";
import { useAppStore } from "../../store/useAppStore";

function PrivacyPolicyPage() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Privacy Policy | ${BRAND_NAME}?`;
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
            to="/terms"
            className="text-sm font-bold underline transition-colors hover:text-teal-500"
          >
            Terms &amp; Conditions →
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
              Privacy Policy
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
            <h2 className="text-xl font-bold">1. Overview</h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Welcome to <strong>{BRAND_NAME}?</strong> (&quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;). We are building a local
              discovery platform focused on helping people in Hyderabad, India
              discover places, activities, and local happenings. This Privacy
              Policy explains how we collect, use, store, and protect your
              personal data when you visit our website and join our early-access
              waitlist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">2. Information We Collect</h2>
            <ul
              className={`list-disc space-y-1 pl-5 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <li>
                <strong>Waitlist Information:</strong> When you sign up for
                early access, we collect the information you voluntarily
                provide, such as your email address, name, neighbourhood/city
                preference, or local activity interests.
              </li>
              <li>
                <strong>Basic Technical Data:</strong> Our servers and hosting
                providers automatically log standard request metadata (such as
                browser type, device type, timestamp, and IP address) strictly
                for security, rate-limiting, and debugging purposes.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">
              3. How We Use Your Information
            </h2>
            <ul
              className={`list-disc space-y-1 pl-5 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <li>
                To register and manage your spot on the {BRAND_NAME}?
                early-access waitlist.
              </li>
              <li>
                To send product launch updates, beta invites, and local
                discovery announcements relevant to Hyderabad.
              </li>
              <li>
                To prevent spam, duplicate signups, and abuse of our platform.
              </li>
            </ul>
            <p
              className={`pt-1 text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-200" : "text-slate-900"
              }`}
            >
              <strong>
                We do not sell, rent, or trade your personal data to third
                parties.
              </strong>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">
              4. Data Storage &amp; Security
            </h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Your waitlist data is securely stored in encrypted cloud databases
              (MongoDB Atlas), and our web application and APIs are hosted via
              Vercel and Render. We implement strict access controls so only
              authorized team members can access waitlist records.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">
              5. Your Rights (DPDP Act, 2023)
            </h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Under India&apos;s Digital Personal Data Protection Act (DPDP
              Act), 2023, you have the right to:
            </p>
            <ul
              className={`list-disc space-y-1 pl-5 text-sm sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <li>
                Request confirmation and a summary of the personal data we hold
                about you.
              </li>
              <li>
                Request correction or erasure (deletion) of your email and
                waitlist record at any time.
              </li>
              <li>
                Withdraw your consent to receive early-access communications.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold">
              6. Contact &amp; Grievance Redressal
            </h2>
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              To exercise your data rights, opt out of the waitlist, or raise a
              privacy concern, please contact us at:{" "}
              <a
                href="mailto:hello@whatstoday.in"
                className="font-bold text-teal-500 underline"
              >
                hello@whatstoday.in
              </a>
              . Location: Hyderabad, Telangana, India.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
