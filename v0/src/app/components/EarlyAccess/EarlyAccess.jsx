import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";

const API_URL = "https://whats-today-api.onrender.com/api/early-access";
const HEALTH_URL = "https://whats-today-api.onrender.com/api/health";

export default function EarlyAccess() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  // WAKE UP RENDER: Fire a silent ping when the component mounts
  useEffect(() => {
    fetch(HEALTH_URL).catch(() => {
      // Silently ignore errors; this is just a wake-up call to defeat the 15-minute sleep
    });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          city: city.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const validationMessage = result.errors
          ?.map((error) => error.message)
          .join(". ");

        // Catch common MongoDB duplicate key errors if the backend hasn't sanitized them yet
        let errorMessage = validationMessage || result.message || "Signup failed. Please try again.";
        if (errorMessage.includes("E11000") || errorMessage.toLowerCase().includes("duplicate")) {
          errorMessage = "You are already on the waitlist! We'll be in touch soon.";
        }

        throw new Error(errorMessage);
      }

      setStatus("success");
      setMessage(result.message || "You're on the list!");
      setEmail("");
      setCity("");
    } catch (error) {
      setStatus("error");

      if (error instanceof TypeError) {
        setMessage(
          "Unable to connect to the server. Please try again shortly.",
        );
      } else {
        setMessage(error.message);
      }
    }
  }

  const messageStyle =
    status === "success"
      ? "border-teal-600 bg-teal-100 text-teal-950"
      : "border-red-600 bg-red-100 text-red-950";

  return (
    <section
      id="early-access"
      className={`border-y-2 border-black px-5 py-16 transition-colors duration-300 sm:px-8 sm:py-24 lg:px-10 ${
        isDark ? "bg-[#202020] text-white" : "bg-[#C8F7DC] text-slate-950"
      }`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000]">
            <Mail className="h-4 w-4" />
            Early access
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your city has
            <br />
            <span className="text-teal-500">more to offer.</span>
          </h2>

          <p
            className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            We're building a new way to discover places, find local happenings,
            and make plans with people. Join the early-access list and help
            shape What's Today?
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm font-bold">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-500" />
            <span>Help us build something for your city.</span>
          </div>
        </div>

        <div
          className={`rounded-xl border-2 border-black p-5 shadow-[7px_7px_0px_0px_#000] sm:p-8 ${
            isDark ? "bg-[#292929]" : "bg-[#FFFDF7]"
          }`}
        >
          <h3 className="text-2xl font-black">Be one of the first.</h3>

          <p
            className={`mt-2 text-sm leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Leave your email to express interest in early access.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <label
              htmlFor="waitlist-email"
              className="block text-sm font-extrabold"
            >
              Email address
            </label>

            <input
              id="waitlist-email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
              disabled={status === "loading"}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status !== "loading") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              placeholder="you@example.com"
              className={`w-full rounded-md border-2 border-black px-4 py-3.5 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                isDark ? "bg-[#171717] text-white" : "bg-white text-slate-950"
              }`}
            />
            <label
              htmlFor="waitlist-city"
              className="block text-sm font-extrabold"
            >
              City
            </label>

            <input
              id="waitlist-city"
              type="text"
              autoComplete="address-level2"
              required
              maxLength={100}
              disabled={status === "loading"}
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
                if (status !== "loading") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              placeholder="e.g. Hyderabad"
              className={`w-full rounded-md border-2 border-black px-4 py-3.5 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                isDark ? "bg-[#171717] text-white" : "bg-white text-slate-950"
              }`}
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-5 py-3.5 font-black text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? "Joining..."
                : status === "success"
                  ? "You're on the list!"
                  : "I'm Interested"}

              {status !== "loading" && <ArrowRight className="h-4 w-4" />}
            </button>

            {message && (
              <p
                role="status"
                aria-live="polite"
                className={`rounded-md border-2 px-3 py-3 text-sm font-bold ${messageStyle}`}
              >
                {message}
              </p>
            )}
          </form>

          <p
            className={`mt-4 text-xs leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {status === "success" ? (
              "Thanks for helping shape What's Today?!"
            ) : (
              <>
                By joining, you agree to our{" "}
                <Link to="/privacy" className="underline hover:text-teal-500">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="underline hover:text-teal-500">
                  Terms
                </Link>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}