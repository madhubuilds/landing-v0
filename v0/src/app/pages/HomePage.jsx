import { useEffect } from "react";
import { BRAND_NAME } from "../constance/constance";
import Hero from "../components/Hero/Hero";
import EarlyAccess from "../components/EarlyAccess/EarlyAccess";
import PageTransition from "../components/PageTransition";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${BRAND_NAME}? | Discover Hyderabad`;
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col gap-16 pb-16">
        <Hero />
        {/* We keep the waitlist form right after the hero on the home page */}
        <EarlyAccess />
      </div>
    </PageTransition>
  );
}