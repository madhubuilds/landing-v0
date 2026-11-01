import { useEffect } from "react";
import { BRAND_NAME } from "../../constance/constance";
import CreateActivity from "../../components/Activity/CreateActivity";
import PageTransition from "../../components/PageTransition";

export default function HostPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Host an Event | ${BRAND_NAME}?`;
  }, []);

  return (
    <PageTransition>
      <div className="pb-16 pt-8">
        <div className="mb-12 px-4 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Put Your Event on the Map
          </h1>
          <p className="mt-4 text-lg font-medium opacity-80">
            Hosting a workshop, gig, or popup? Reach people in Hyderabad looking for exactly what you offer.
          </p>
        </div>

        <CreateActivity />
      </div>
    </PageTransition>
  );
}