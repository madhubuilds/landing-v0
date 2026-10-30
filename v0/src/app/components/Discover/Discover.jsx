
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  Users,
  Plus,
} from "lucide-react";
import { useAppStore } from "../../store/useAppStore";

const categories = ["For you", "Food", "Music", "Outdoors", "Hangouts", "Events"];

const sampleDiscoveries = [
  {
    id: "sample-1",
    type: "Food",
    kind: "PLACE",
    title: "Find your next coffee spot",
    location: "Jubilee Hills, Hyderabad",
    description: "A cosy corner for coffee and conversations.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#C8F7DC]",
    date: "",
    time: "",
    attendees: null,
    host: "Community host",
    joinPolicy: "approval",
    isSample: true,
  },
  {
    id: "sample-2",
    type: "Music",
    kind: "HANGOUT",
    title: "Indie music evening",
    location: "Gachibowli, Hyderabad",
    description: "Discover new sounds and meet music lovers.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#F9C6E5]",
    date: "Saturday",
    time: "7:00 PM",
    attendees: 12,
    host: "Music community",
    joinPolicy: "approval",
    isSample: true,
  },
  {
    id: "sample-3",
    type: "Outdoors",
    kind: "HANGOUT",
    title: "Sunset and a long walk",
    location: "Durgam Cheruvu, Hyderabad",
    description: "Get outside, slow down, and enjoy the evening.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#FFE45C]",
    date: "Sunday",
    time: "5:30 PM",
    attendees: 6,
    host: "Community host",
    joinPolicy: "instant",
    isSample: true,
  },
  {
    id: "sample-4",
    type: "Food",
    kind: "PLACE",
    title: "A new place to try",
    location: "Hitech City, Hyderabad",
    description: "Save this idea for your next food adventure.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#DDE5FF]",
    date: "",
    time: "",
    attendees: null,
    host: "Community host",
    joinPolicy: "instant",
    isSample: true,
  },
  {
    id: "sample-5",
    type: "Hangouts",
    kind: "HANGOUT",
    title: "Board games and new friends",
    location: "Madhapur, Hyderabad",
    description: "Bring your competitive side and meet new people.",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#F9C6E5]",
    date: "Friday",
    time: "6:30 PM",
    attendees: 8,
    host: "Community host",
    joinPolicy: "approval",
    isSample: true,
  },
  {
    id: "sample-6",
    type: "Events",
    kind: "EVENT",
    title: "A creative community meetup",
    location: "Hyderabad",
    description: "Share ideas, meet makers, and find your people.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    color: "bg-[#C8F7DC]",
    date: "Next weekend",
    time: "4:00 PM",
    attendees: 15,
    host: "Creative community",
    joinPolicy: "instant",
    isSample: true,
  },
];

function getCategory(activity) {
  if (activity.activityType === "place" || activity.kind === "PLACE") {
    return "Food";
  }

  const category = activity.type || activity.category;

  if (categories.includes(category)) {
    return category;
  }

  if (activity.kind === "EVENT") return "Events";
  if (activity.kind === "PARTY") return "Events";

  return "Hangouts";
}

export default function Discover() {
  const [activeCategory, setActiveCategory] = useState("For you");
  const [searchQuery, setSearchQuery] = useState("");

  const theme = useAppStore((state) => state.theme);
  const createdActivities = useAppStore((state) => state.activities);
  const selectActivity = useAppStore((state) => state.selectActivity);

  const isDark = theme === "dark";

  const allDiscoveries = useMemo(() => {
    const userActivities = createdActivities.map((activity) => ({
      ...activity,
      type: getCategory(activity),
      kind: activity.kind || "HANGOUT",
      date: activity.date || "",
      time: activity.time || "",
      attendees: activity.attendees ?? 0,
      host: activity.host || "Community member",
      joinPolicy: activity.joinPolicy || "approval",
      image:
        activity.image ||
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
      color: activity.color || "bg-[#C8F7DC]",
      isSample: false,
    }));

    return [...userActivities, ...sampleDiscoveries];
  }, [createdActivities]);

  const filteredDiscoveries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allDiscoveries.filter((item) => {
      const matchesCategory =
        activeCategory === "For you" || item.type === activeCategory;

      const searchableText = [
        item.title,
        item.location,
        item.description,
        item.type,
        item.kind,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, allDiscoveries, searchQuery]);

  function openActivity(item) {
    selectActivity(item);
  }

  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const subtleText = isDark ? "text-slate-400" : "text-slate-500";
  const cardBackground = isDark ? "bg-[#242424]" : "bg-white";
  const iconColor = isDark ? "text-white" : "text-black";

  return (
    <section
      id="discover"
      className={`mx-auto w-full max-w-7xl px-5 py-16 transition-colors duration-300 sm:px-8 lg:px-10 lg:py-24 ${
        isDark ? "text-white" : "text-slate-950"
      }`}
    >
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl text-left">
          <span className="inline-block rounded-md border-2 border-black bg-[#C8F7DC] px-3 py-2 text-xs font-extrabold tracking-widest text-black shadow-[3px_3px_0_#000]">
            OUT THERE, RIGHT NOW
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your city is
            <br />
            <span className="text-fuchsia-500">doing something.</span>
          </h2>

          <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${mutedText}`}>
            Find interesting places, discover local happenings, and make plans
            worth leaving home for.
          </p>
        </div>

        <a
          href="#create-activity"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-5 py-3.5 font-extrabold text-black shadow-[4px_4px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          <Plus size={19} />
          Create a plan
        </a>
      </div>

      <div className="mb-8">
        <label className={`flex w-full items-center gap-3 rounded-md border-2 border-black px-4 py-3.5 shadow-[3px_3px_0_#000] focus-within:shadow-[5px_5px_0_#000] sm:max-w-2xl ${cardBackground}`}>
          <Search size={20} className="shrink-0" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search places, activities, areas..."
            aria-label="Search discoveries"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
          />
        </label>
      </div>

      <div className="mb-12 flex gap-3 overflow-x-auto pb-3" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`shrink-0 rounded-md border-2 border-black px-4 py-2.5 text-sm font-extrabold transition ${
              activeCategory === category
                ? "relative -translate-x-0.5 -translate-y-0.5 bg-[#FFE45C] text-black shadow-[4px_4px_0_#000]"
                : `${cardBackground} ${isDark ? "text-white" : "text-black"} hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#000]`
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
            {activeCategory === "For you" ? "Explore Hyderabad" : activeCategory}
          </h3>
          <p className={`mt-2 text-sm sm:text-base ${mutedText}`}>
            Little ideas for your next big moment.
          </p>
        </div>

        <span className={`shrink-0 rounded-md border-2 border-black px-3 py-2 text-xs font-extrabold sm:text-sm ${cardBackground}`}>
          {filteredDiscoveries.length} ideas
        </span>
      </div>

      {filteredDiscoveries.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDiscoveries.map((item) => (
            <article
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${item.title}`}
              onClick={() => openActivity(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openActivity(item);
                }
              }}
              className={`group cursor-pointer overflow-hidden rounded-xl border-2 border-black shadow-[5px_5px_0_#000] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-500 ${cardBackground}`}
            >
              <div className="relative aspect-[5/3] overflow-hidden border-b-2 border-black bg-[#E8EDE5]">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <span className={`absolute left-3 top-3 rounded-md border-2 border-black ${item.color} px-3 py-1.5 text-[10px] font-black tracking-wide text-black`}>
                  {item.isSample ? "SAMPLE" : "YOUR PLAN"}
                </span>

                <button
                  type="button"
                  aria-label={`View ${item.title}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    openActivity(item);
                  }}
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white text-black shadow-[3px_3px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]"
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-black leading-snug">{item.title}</h4>
                <p className={`mt-2 text-sm leading-relaxed ${mutedText}`}>
                  {item.description}
                </p>

                <div className={`mt-5 space-y-2.5 border-t-2 border-dashed pt-4 text-xs sm:text-sm ${isDark ? "border-white/20 text-slate-300" : "border-slate-200 text-slate-600"}`}>
                  <p className="flex items-start gap-2">
                    <MapPin size={16} className={`mt-0.5 shrink-0 ${iconColor}`} />
                    <span>{item.location || "Location not specified"}</span>
                  </p>

                  {item.date && (
                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} className={`shrink-0 ${iconColor}`} />
                      {item.date}
                    </p>
                  )}

                  {item.time && (
                    <p className="flex items-center gap-2">
                      <Clock3 size={16} className={`shrink-0 ${iconColor}`} />
                      {item.time}
                    </p>
                  )}

                  {item.attendees !== null && item.attendees !== undefined && (
                    <p className="flex items-center gap-2">
                      <Users size={16} className={`shrink-0 ${iconColor}`} />
                      {item.attendees} interested
                    </p>
                  )}
                </div>

                <p className={`mt-5 flex items-center gap-2 border-t-2 pt-4 text-sm font-extrabold ${isDark ? "border-white/20" : "border-black"}`}>
                  View activity details
                  <ArrowUpRight size={16} />
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={`rounded-xl border-2 border-black px-5 py-14 text-center shadow-[5px_5px_0_#000] ${cardBackground}`}>
          <Search size={30} className="mx-auto" />
          <h4 className="mt-4 text-xl font-black">No matches yet</h4>
          <p className={`mt-2 text-sm ${mutedText}`}>
            Try another search or choose a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("For you");
            }}
            className="mt-5 rounded-md border-2 border-black bg-[#FFE45C] px-4 py-2.5 font-extrabold text-black shadow-[3px_3px_0_#000]"
          >
            Clear filters
          </button>
        </div>
      )}

      <p className={`mt-6 text-xs leading-relaxed ${subtleText}`}>
        Preview content only — sample ideas are not verified live events. Your plans are saved in this browser.
      </p>
    </section>
  );
}
