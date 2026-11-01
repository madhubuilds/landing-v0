import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../../constance/constance";
import PageTransition from "../../components/PageTransition";
import {
  AvatarScene,
  OpenSpaceScene,
  PersonalSpaceScene,
} from "../../components/3D/SpaceScenes";

import SpaceTeaser from "../../components/3D/SpaceTeaser";
import { useAppStore } from "../../store/useAppStore";
import { ArrowUpRight } from "lucide-react";

export default function SpacesPage() {
  const theme = useAppStore((state) => state.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Virtual Spaces | ${BRAND_NAME}?`;
  }, []);
  const borderClass = isDark ? "border-white" : "border-black";
 const bgClass = isDark ? "bg-[#1E293B]" : "bg-[#E5E7EB]";
  const shadowClass = isDark
    ? "shadow-[8px_8px_0px_#ffffff]"
    : "shadow-[8px_8px_0px_#080808]";
  const textMuted = isDark ? "text-slate-300" : "text-slate-700";
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={`inline-block border-2 px-4 py-1 text-xs font-black uppercase tracking-widest ${isDark ? "border-white bg-teal-500 text-slate-950" : "border-black bg-teal-400 text-slate-950"}`}
          >
            Future Feature
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Beyond 2D Profiles.
          </h1>
          <p className={`text-lg font-medium ${textMuted}`}>
            We are building a lightweight, browser-based 3D layer for your city.
            No downloads, no VR headsets—just seamless spatial discovery.
          </p>
        </div>

        {/* Section 1: The Avatar (Text Left, 3D Right) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-4 order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              1. Your Digital Persona
            </h2>
            <p className={`text-lg leading-relaxed ${textMuted}`}>
              Step away from boring profile pictures. Customize your own blocky,
              neubrutalist avatar. Express your style, equip digital merch from
              local brands, and stand out in the crowd.
            </p>
          </div>
          <div
            className={`relative aspect-square w-full overflow-hidden border-2 ${borderClass} ${bgClass} ${shadowClass} order-1 lg:order-2 cursor-grab active:cursor-grabbing`}
          >
            <AvatarScene />
          </div>
        </div>

        {/* Section 2: Open Spaces (3D Left, Text Right) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* order-1 on mobile puts 3D on top. order-1 on lg keeps it on the left! */}
          <div
            className={`relative aspect-square w-full overflow-hidden border-2 ${borderClass} ${bgClass} ${shadowClass} order-1 lg:order-1 cursor-grab active:cursor-grabbing`}
          >
            <OpenSpaceScene />
          </div>
          <div className="space-y-4 order-2 lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              2. Open Social Plazas
            </h2>
            <p className={`text-lg leading-relaxed ${textMuted}`}>
             Drop into live hubs tied to real locations in your city. Walk around, see who is hanging out at the local gig, and use proximity-based chat to strike up a conversation just by walking near someone.
            </p>
          </div>
        </div>

        {/* Section 3: Personal Spaces (Text Left, 3D Right) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-4 order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              3. Claim Your Plot
            </h2>
            <p className={`text-lg leading-relaxed ${textMuted}`}>
              Instead of a standard bio, your profile is a customizable 3D room.
              Arrange furniture, display your collected event tickets like
              trophies, and invite friends over to your personal slice of the
              web.
            </p>
          </div>
          <div
            className={`relative aspect-square w-full overflow-hidden border-2 ${borderClass} ${bgClass} ${shadowClass} order-1 lg:order-2 cursor-grab active:cursor-grabbing`}
          >
            <PersonalSpaceScene />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#FFE45C] px-8 py-4 text-sm font-extrabold text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none sm:text-base"
          >
            Join Waitlist to Secure Your Username
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
