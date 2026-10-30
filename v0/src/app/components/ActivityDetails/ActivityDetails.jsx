
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Share2,
  Check,
} from "lucide-react";
import { useAppStore } from "../../store/useAppStore";

export default function ActivityDetails({ activity, onBack }) {
  const [joinStatus, setJoinStatus] = useState("none");
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  const currentActivity = activity ?? {
    title: "Indie music evening",
    type: "HANGOUT",
    description:
      "Discover new sounds, meet music lovers, and enjoy an evening together. Come for the music, stay for the conversations.",
    location: "Gachibowli, Hyderabad",
    date: "Saturday",
    time: "7:00 PM",
    attendees: 12,
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1400&q=85",
    host: "Community host",
    joinPolicy: "approval",
  };

  const requiresApproval = currentActivity.joinPolicy === "approval";
  const isPlace = currentActivity.kind === "PLACE" ||
    currentActivity.activityType === "place";

  const cardClass = isDark
    ? "border-white/20 bg-[#242424] text-white"
    : "border-black bg-white text-slate-950";

  const mutedClass = isDark ? "text-slate-300" : "text-slate-600";
  const subtleClass = isDark ? "text-slate-400" : "text-slate-500";

  function handleJoin() {
    if (joinStatus !== "none") {
      setJoinStatus("none");
      return;
    }

    setJoinStatus(requiresApproval ? "requested" : "joined");
  }

  async function handleShare() {
    const shareData = {
      title: currentActivity.title,
      text: currentActivity.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          `${shareData.title}\n${shareData.text}\n${shareData.url}`,
        );
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Unable to share this activity.", error);
      }
    }
  }

  return (
    <main
      className={`mx-auto min-h-screen w-full max-w-5xl px-5 pb-20 pt-8 transition-colors duration-300 sm:px-8 lg:px-10 ${
        isDark ? "text-white" : "text-slate-950"
      }`}
    >
      {/* Top actions */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex items-center gap-2 rounded-md border-2 px-4 py-2.5 text-sm font-extrabold shadow-[3px_3px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] ${
            isDark
              ? "border-white/30 bg-[#242424] text-white"
              : "border-black bg-white text-black"
          }`}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-4 py-2.5 text-sm font-extrabold text-black shadow-[3px_3px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
        >
          <Share2 size={17} />
          Share
        </button>
      </div>

      {/* Cover image */}
      <div className="relative overflow-hidden rounded-xl border-2 border-black bg-[#303B36] shadow-[6px_6px_0_#000]">
        {currentActivity.image ? (
          <img
            src={currentActivity.image}
            alt=""
            className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
          />
        ) : (
          <div className="flex h-64 items-center justify-center bg-[#C8F7DC] text-black sm:h-80 lg:h-[420px]">
            <MapPin size={56} />
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-md border-2 border-black bg-[#C8F7DC] px-3 py-2 text-xs font-black tracking-wide text-black">
          {currentActivity.kind || currentActivity.type || "DISCOVERY"}
        </span>
      </div>

      {/* Main content */}
      <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_320px]">
        <section>
          <span className={`text-xs font-extrabold uppercase tracking-widest ${subtleClass}`}>
            {isPlace ? "THE PLACE" : "THE PLAN"}
          </span>

          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {currentActivity.title}
          </h1>

          <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${mutedClass}`}>
            {currentActivity.description || "Discover this place or plan with your community."}
          </p>

          <div className="mt-8 space-y-4">
            {/* Date and time: only show when available */}
            {(currentActivity.date || currentActivity.time) && (
              <div className={`flex items-start gap-4 rounded-lg border-2 p-4 shadow-[3px_3px_0_#000] ${cardClass}`}>
                <div className="rounded-md border-2 border-black bg-[#FFE45C] p-2 text-black">
                  <CalendarDays size={21} />
                </div>
                <div>
                  <p className="font-extrabold">When</p>
                  {currentActivity.date && (
                    <p className={`mt-1 text-sm ${mutedClass}`}>
                      {currentActivity.date}
                    </p>
                  )}
                  {currentActivity.time && (
                    <p className={`mt-1 flex items-center gap-2 text-sm ${mutedClass}`}>
                      <Clock3 size={15} />
                      {currentActivity.time}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Location */}
            <div className={`flex items-start gap-4 rounded-lg border-2 p-4 shadow-[3px_3px_0_#000] ${cardClass}`}>
              <div className="rounded-md border-2 border-black bg-[#C8F7DC] p-2 text-black">
                <MapPin size={21} />
              </div>
              <div>
                <p className="font-extrabold">Where</p>
                <p className={`mt-1 text-sm ${mutedClass}`}>
                  {currentActivity.location || "Location not provided"}
                </p>
                <p className={`mt-1 text-xs ${subtleClass}`}>
                  Location details are provided by the activity creator.
                </p>
              </div>
            </div>

            {/* Attendees */}
            {!isPlace && (
              <div className={`flex items-start gap-4 rounded-lg border-2 p-4 shadow-[3px_3px_0_#000] ${cardClass}`}>
                <div className="rounded-md border-2 border-black bg-[#F9C6E5] p-2 text-black">
                  <Users size={21} />
                </div>
                <div>
                  <p className="font-extrabold">People interested</p>
                  <p className={`mt-1 text-sm ${mutedClass}`}>
                    {currentActivity.attendees ?? 0} people
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Join card */}
        <aside className={`rounded-xl border-2 p-5 shadow-[6px_6px_0_#000] lg:sticky lg:top-28 ${cardClass}`}>
          <p className={`text-xs font-extrabold uppercase tracking-widest ${subtleClass}`}>
            {isPlace ? "SAVE THIS DISCOVERY" : "YOUR NEXT PLAN"}
          </p>

          <h2 className="mt-3 text-2xl font-black">
            {isPlace ? "Worth a visit?" : "Sounds good?"}
          </h2>

          <p className={`mt-3 text-sm leading-relaxed ${mutedClass}`}>
            {isPlace
              ? "Keep this spot in mind for your next outing."
              : requiresApproval
                ? "Send a request to the host. You'll need their approval to join."
                : "Join this activity and make a plan to be there."}
          </p>

          {!isPlace && (
            <button
              type="button"
              onClick={handleJoin}
              className={`mt-6 flex w-full items-center justify-center gap-2 rounded-md border-2 border-black px-4 py-3.5 font-extrabold text-black shadow-[4px_4px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#000] ${
                joinStatus !== "none"
                  ? "bg-[#C8F7DC]"
                  : "bg-[#FFE45C]"
              }`}
            >
              {joinStatus !== "none" ? (
                <Check size={19} />
              ) : (
                <ArrowUpRight size={19} />
              )}

              {joinStatus === "requested"
                ? "Request sent · Cancel"
                : joinStatus === "joined"
                  ? "Joined · Leave"
                  : requiresApproval
                    ? "Request to join"
                    : "Join activity"}
            </button>
          )}

          {isPlace && (
            <p className="mt-6 rounded-md border-2 border-black bg-[#C8F7DC] p-3 text-sm font-bold text-black">
              Explore it, then share your experience with the community.
            </p>
          )}

          {!isPlace && joinStatus !== "none" && (
            <p className={`mt-3 text-center text-xs ${subtleClass}`}>
              Demo interaction only. Your response isn't saved.
            </p>
          )}

          <div className={`mt-6 border-t-2 border-dashed pt-5 ${isDark ? "border-white/20" : "border-slate-200"}`}>
            <p className={`text-xs font-extrabold uppercase tracking-widest ${subtleClass}`}>
              HOSTED BY
            </p>
            <p className="mt-2 font-extrabold">
              {currentActivity.host || "Community member"}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
