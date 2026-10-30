
import { useState } from "react";
import {
  Coffee,
  PartyPopper,
  CalendarDays,
  MapPin,
  ArrowRight,
  Users,
  LockKeyhole,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { useAppStore } from "../../store/useAppStore";

const activityTypes = [
  {
    id: "hangout",
    label: "Hangout",
    description: "Coffee, food or casual plans",
    icon: Coffee,
    category: "Hangouts",
  },
  {
    id: "party",
    label: "Party",
    description: "Celebrate with your people",
    icon: PartyPopper,
    category: "Hangouts",
  },
  {
    id: "event",
    label: "Event",
    description: "Music, games or meetups",
    icon: CalendarDays,
    category: "Events",
  },
  {
    id: "place",
    label: "Place discovery",
    description: "Share a spot worth visiting",
    icon: MapPin,
    category: "Food",
  },
];

const initialForm = {
  title: "",
  description: "",
  location: "",
  date: "",
  time: "",
};

export default function CreateActivity() {
  const [activityType, setActivityType] = useState("hangout");
  const [audience, setAudience] = useState("public");
  const [joinPolicy, setJoinPolicy] = useState("instant");
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  const theme = useAppStore((state) => state.theme);
  const addActivity = useAppStore((state) => state.addActivity);

  const isDark = theme === "dark";
  const isPlaceDiscovery = activityType === "place";

  const surface = isDark ? "bg-[#242424] text-white" : "bg-white text-slate-950";
  const muted = isDark ? "text-slate-300" : "text-slate-600";
  const fieldStyle = `w-full rounded-md border-2 border-black px-4 py-3 text-sm outline-none transition-colors focus:shadow-[3px_3px_0_#000] ${
    isDark
      ? "bg-[#303030] text-white placeholder:text-slate-400"
      : "bg-[#FFFDF7] text-slate-950 placeholder:text-slate-400"
  }`;

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSuccessMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const selectedType = activityTypes.find(
      (type) => type.id === activityType,
    );

    const newActivity = {
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
      location: form.location.trim(),
      type: selectedType.category,
      activityType,
      kind: isPlaceDiscovery
        ? "PLACE"
        : activityType === "event"
          ? "EVENT"
          : activityType === "party"
            ? "PARTY"
            : "HANGOUT",
      host: "You",
      audience,
      joinPolicy: isPlaceDiscovery ? "instant" : joinPolicy,
      attendees: 0,
      date: isPlaceDiscovery ? "" : form.date,
      time: isPlaceDiscovery ? "" : form.time,
      color:
        activityType === "party"
          ? "bg-[#F9C6E5]"
          : activityType === "event"
            ? "bg-[#DDE5FF]"
            : activityType === "place"
              ? "bg-[#C8F7DC]"
              : "bg-[#FFE45C]",
      image: "",
    };

    addActivity(newActivity);

    setForm(initialForm);
    setActivityType("hangout");
    setAudience("public");
    setJoinPolicy("instant");
    setSuccessMessage(
      isPlaceDiscovery
        ? "Your place has been shared!"
        : "Your activity has been created!",
    );

    document
      .getElementById("discover")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="create-activity"
      className={`mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 transition-colors duration-300 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24 ${
        isDark ? "text-white" : "text-slate-950"
      }`}
    >
      {/* Heading */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <span className="inline-block rounded-md border-2 border-black bg-[#FFE45C] px-3 py-2 text-xs font-extrabold tracking-widest text-black shadow-[3px_3px_0_#000]">
          MAKE SOMETHING HAPPEN
        </span>

        <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Got a plan?
          <br />
          <span className="text-fuchsia-500">Make it happen.</span>
        </h2>

        <p className={`mt-5 max-w-lg text-base leading-relaxed sm:text-lg ${muted}`}>
          Create a plan, share a place, or bring people together. Your next
          great moment starts here.
        </p>

        <div
          className={`mt-8 hidden max-w-md rounded-xl border-2 border-black p-5 shadow-[5px_5px_0_#000] sm:block ${
            isDark ? "bg-[#303030]" : "bg-[#C8F7DC]"
          }`}
        >
          <p className="text-sm font-black uppercase tracking-wide">
            Your city. Your community.
          </p>
          <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
            Share ideas with people nearby and give someone a reason to step
            outside today.
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        className={`rounded-xl border-2 border-black p-5 shadow-[6px_6px_0_#000] transition-colors sm:p-7 lg:p-8 ${
          isDark ? "bg-[#202020]" : "bg-[#FFFDF7]"
        }`}
        onSubmit={handleSubmit}
      >
        <div className="mb-8 flex items-start justify-between gap-4 border-b-2 border-dashed border-slate-400/40 pb-5">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-teal-500">
              YOUR IDEA, YOUR RULES
            </span>
            <h3 className="mt-2 text-2xl font-black">Create something</h3>
          </div>

          <span
            className={`shrink-0 rounded-md border-2 border-black px-3 py-2 text-xs font-black ${
              isDark ? "bg-[#FFE45C] text-black" : "bg-white text-black"
            }`}
          >
            01 / TODAY
          </span>
        </div>

        {/* Activity type */}
        <div className="mb-7">
          <label className="mb-3 block text-sm font-extrabold">
            What are you creating?
          </label>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {activityTypes.map((type) => {
              const Icon = type.icon;
              const selected = activityType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    setActivityType(type.id);
                    setSuccessMessage("");
                  }}
                  aria-pressed={selected}
                  className={`flex min-h-28 flex-col items-start rounded-lg border-2 border-black p-4 text-left transition-all ${
                    selected
                      ? "bg-[#FFE45C] text-black shadow-[4px_4px_0_#000] -translate-x-0.5 -translate-y-0.5"
                      : `${surface} hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#000]`
                  }`}
                >
                  <Icon size={23} strokeWidth={2.5} />
                  <span className="mt-3 text-sm font-black">{type.label}</span>
                  <span
                    className={`mt-1 text-xs ${
                      selected ? "text-black/70" : muted
                    }`}
                  >
                    {type.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <label
            htmlFor="activity-title"
            className="mb-2 block text-sm font-extrabold"
          >
            {isPlaceDiscovery ? "Place name" : "Give your plan a name"}
          </label>

          <input
            id="activity-title"
            name="title"
            type="text"
            value={form.title}
            onChange={updateField}
            placeholder={
              isPlaceDiscovery
                ? "e.g. The coffee spot you need to try"
                : "e.g. Saturday evening chai?"
            }
            required
            maxLength={100}
            className={fieldStyle}
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label
            htmlFor="activity-description"
            className="mb-2 block text-sm font-extrabold"
          >
            A little more detail
          </label>

          <textarea
            id="activity-description"
            name="description"
            value={form.description}
            onChange={updateField}
            rows={3}
            maxLength={500}
            placeholder="What's the idea? Who would enjoy it?"
            className={`${fieldStyle} resize-y`}
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label
            htmlFor="activity-location"
            className="mb-2 block text-sm font-extrabold"
          >
            {isPlaceDiscovery ? "Where is this place?" : "Where's it happening?"}
          </label>

          <div
            className={`flex items-center gap-3 rounded-md border-2 border-black px-3 ${
              isDark ? "bg-[#303030]" : "bg-[#FFFDF7]"
            }`}
          >
            <MapPin size={20} className="shrink-0" />
            <input
              id="activity-location"
              name="location"
              type="text"
              value={form.location}
              onChange={updateField}
              placeholder="Enter a place or area"
              required
              maxLength={160}
              className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <p className={`mt-2 text-xs ${muted}`}>
            You can enter a location manually for now.
          </p>
        </div>

        {/* Date and time */}
        {!isPlaceDiscovery && (
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="activity-date"
                className="mb-2 block text-sm font-extrabold"
              >
                Date
              </label>
              <input
                id="activity-date"
                name="date"
                type="date"
                value={form.date}
                onChange={updateField}
                required
                min={new Date().toLocaleDateString("en-CA")}
                className={fieldStyle}
              />
            </div>

            <div>
              <label
                htmlFor="activity-time"
                className="mb-2 block text-sm font-extrabold"
              >
                Start time
              </label>
              <input
                id="activity-time"
                name="time"
                type="time"
                value={form.time}
                onChange={updateField}
                required
                className={fieldStyle}
              />
            </div>
          </div>
        )}

        {/* Audience */}
        <fieldset className="mb-7">
          <legend className="mb-3 text-sm font-extrabold">
            Who can see this?
          </legend>

          <div className="space-y-3">
            {[
              {
                id: "public",
                label: "Everyone",
                description: "Help new people discover your plan",
                Icon: Globe,
              },
              {
                id: "friends",
                label: "Friends & followers",
                description: "Share it with people connected to you",
                Icon: Users,
              },
              {
                id: "invite",
                label: "Invite-only",
                description: "Keep it limited to invited people",
                Icon: LockKeyhole,
              },
            ].map(({ id, label, description, Icon }) => {
              const selected = audience === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setAudience(id)}
                  aria-pressed={selected}
                  className={`flex w-full items-center gap-3 rounded-lg border-2 border-black p-4 text-left transition ${
                    selected
                      ? "bg-[#C8F7DC] text-black shadow-[3px_3px_0_#000]"
                      : `${surface} hover:shadow-[2px_2px_0_#000]`
                  }`}
                >
                  <Icon className="shrink-0" size={21} />
                  <span>
                    <strong className="block text-sm font-black">{label}</strong>
                    <small
                      className={`mt-1 block text-xs ${
                        selected ? "text-slate-700" : muted
                      }`}
                    >
                      {description}
                    </small>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Join policy */}
        {!isPlaceDiscovery && (
          <fieldset className="mb-7">
            <legend className="mb-3 text-sm font-extrabold">
              How can people join?
            </legend>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  id: "instant",
                  label: "Just join",
                  description: "People can join instantly",
                },
                {
                  id: "approval",
                  label: "Request to join",
                  description: "You approve each request",
                },
              ].map((policy) => {
                const selected = joinPolicy === policy.id;

                return (
                  <button
                    key={policy.id}
                    type="button"
                    onClick={() => setJoinPolicy(policy.id)}
                    aria-pressed={selected}
                    className={`rounded-lg border-2 border-black p-4 text-left transition ${
                      selected
                        ? "bg-[#F9C6E5] text-black shadow-[3px_3px_0_#000]"
                        : `${surface} hover:shadow-[2px_2px_0_#000]`
                    }`}
                  >
                    <strong className="block text-sm font-black">
                      {policy.label}
                    </strong>
                    <span className="mt-1 block text-xs text-slate-600">
                      {policy.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {/* Success feedback */}
        {successMessage && (
          <div
            role="status"
            className="mb-5 flex items-start gap-2 rounded-md border-2 border-black bg-[#C8F7DC] p-3 text-sm font-bold text-black"
          >
            <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
            {successMessage}
          </div>
        )}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-5 py-4 font-black text-black shadow-[4px_4px_0_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          {isPlaceDiscovery ? "Share this place" : "Create activity"}
          <ArrowRight size={19} />
        </button>

        <p className={`mt-4 text-center text-xs leading-relaxed ${muted}`}>
          You control who sees your plan and how people join.
        </p>
      </form>
    </section>
  );
}
