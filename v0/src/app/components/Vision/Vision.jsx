
import {
  ArrowUpRight,
  MapPin,
  Clock3,
  Users,
  Compass,
} from "lucide-react";
import { useAppStore } from "../../store/useAppStore";

export default function Vision() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  const cardSurface = isDark
    ? "border-white/20 bg-[#242424] text-white"
    : "border-black bg-white text-slate-950";

  const mutedText = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <section
      id="vision"
      className={`mx-auto w-full max-w-7xl px-4 py-20 transition-colors duration-300 sm:px-6 sm:py-28 lg:px-8 ${
        isDark ? "text-white" : "text-slate-950"
      }`}
    >
      {/* Section intro */}
      <div className="mb-12 max-w-3xl sm:mb-16">
        <span className="mb-5 inline-flex rounded-md border-2 border-black bg-[#FFE45C] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-black shadow-[3px_3px_0px_0px_#000]">
          WHY WHAT&apos;S TODAY?
        </span>

        <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Stop wondering
          <br />
          <span className="text-teal-500">what to do today.</span>
        </h2>

        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${mutedText}`}>
          Plans shouldn&apos;t take an hour of searching and ten messages in a
          group chat. What&apos;s Today? helps you discover places to go, things
          happening nearby, and experiences worth sharing — all in one place.
        </p>
      </div>

      {/* Main content */}
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Purpose and benefits */}
        <div className="flex flex-col gap-5">
          <div
            className={`rounded-xl border-2 p-5 shadow-[5px_5px_0px_0px_#000] transition-colors sm:p-6 ${cardSurface}`}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-black bg-[#FFE45C]">
              <Clock3 className="h-6 w-6 text-black" />
            </div>

            <h3 className="mb-2 text-xl font-extrabold">
              Know what&apos;s happening.
            </h3>

            <p className={`text-sm leading-relaxed sm:text-base ${mutedText}`}>
              Find events, activities, local discoveries, and fresh posts
              relevant to today — not just things that happened weeks ago.
            </p>
          </div>

          <div className="rounded-xl border-2 border-black bg-[#DCD5FF] p-5 text-slate-950 shadow-[5px_5px_0px_0px_#000] transition-transform hover:-translate-y-0.5 sm:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-black bg-white">
              <MapPin className="h-6 w-6 text-black" />
            </div>

            <h3 className="mb-2 text-xl font-extrabold">
              Find your next favourite spot.
            </h3>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Explore what&apos;s around you, from hidden cafes and street food
              to local meetups and live music.
            </p>
          </div>

          <div className="rounded-xl border-2 border-black bg-[#C8F7DC] p-5 text-slate-950 shadow-[5px_5px_0px_0px_#000] transition-transform hover:-translate-y-0.5 sm:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-black bg-white">
              <Users className="h-6 w-6 text-black" />
            </div>

            <h3 className="mb-2 text-xl font-extrabold">
              Turn discoveries into experiences.
            </h3>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Share what you find, connect over common interests, and give
              other people a reason to step out and explore.
            </p>
          </div>
        </div>

        {/* Product preview */}
        <div className="relative pt-2 lg:sticky lg:top-24">
          <div className="absolute inset-3 rotate-3 rounded-xl border-2 border-black bg-[#FFE45C]" />

          <div
            className={`relative rounded-xl border-2 p-4 shadow-[7px_7px_0px_0px_#000] transition-colors sm:p-6 ${
              isDark
                ? "border-white/20 bg-[#202020]"
                : "border-black bg-white"
            }`}
          >
            {/* Preview header */}
            <div
              className={`mb-6 flex items-center justify-between gap-3 border-b-2 pb-4 ${
                isDark ? "border-white/20" : "border-black"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-extrabold uppercase tracking-widest ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Your local feed
                </p>

                <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">
                  What&apos;s happening?
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-[#FFE45C]">
                <Compass className="h-6 w-6 text-black" />
              </div>
            </div>

            {/* Location */}
            <div
              className={`mb-5 flex items-center gap-2 text-sm font-bold ${mutedText}`}
            >
              <MapPin className="h-4 w-4" />
              Explore Hyderabad
            </div>

            {/* Illustrative feed cards */}
            <div className="flex flex-col gap-4">
              <article className="rounded-lg border-2 border-black bg-[#F8F7F2] p-4 text-slate-950 transition-transform hover:-translate-y-0.5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded border-2 border-black bg-[#C8F7DC] px-2 py-1 text-[10px] font-extrabold uppercase text-black">
                    Local discovery
                  </span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-black" />
                </div>

                <h4 className="font-extrabold">
                  Your next favourite cafe?
                </h4>

                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Find a new corner of the city to explore.
                </p>
              </article>

              <article className="rounded-lg border-2 border-black bg-[#DCD5FF] p-4 text-slate-950 transition-transform hover:-translate-y-0.5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded border-2 border-black bg-white px-2 py-1 text-[10px] font-extrabold uppercase text-black">
                    Community
                  </span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-black" />
                </div>

                <h4 className="font-extrabold">
                  Sunday board game meetup
                </h4>

                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Discover activities and people who share your interests.
                </p>
              </article>

              <article className="rounded-lg border-2 border-black bg-[#FFE45C] p-4 text-slate-950 transition-transform hover:-translate-y-0.5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded border-2 border-black bg-white px-2 py-1 text-[10px] font-extrabold uppercase text-black">
                    What&apos;s on
                  </span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-black" />
                </div>

                <h4 className="font-extrabold">
                  Live music in your city
                </h4>

                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Find something worth making plans for.
                </p>
              </article>
            </div>

            <p
              className={`mt-5 text-center text-xs font-medium ${
                isDark ? "text-slate-400" : "text-slate-400"
              }`}
            >
              Illustrative preview · Not live event listings
            </p>
          </div>
        </div>
      </div>

      {/* Vision statement */}
      <div className="mt-16 rounded-xl border-2 border-black bg-slate-950 px-6 py-8 text-white shadow-[6px_6px_0px_0px_#FFE45C] transition-transform hover:-translate-y-0.5 sm:mt-20 sm:px-10 sm:py-10">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#FFE45C]">
          The bigger picture
        </p>

        <h3 className="max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
          More than a feed. A new way to experience your world.
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Today, discover your city. Tomorrow, connect through shared
          experiences and explore new kinds of social spaces. We&apos;re
          building towards a world where being social feels like doing
          something, not just scrolling past it.
        </p>
      </div>
    </section>
  );
}
