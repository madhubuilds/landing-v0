import { useEffect } from "react";
import { BRAND_NAME } from "../../constance/constance";
import Discover from "../../components/Discover/Discover";
import ActivityDetails from "../../components/ActivityDetails/ActivityDetails";
import { useAppStore } from "../../store/useAppStore";
import PageTransition from "../../components/PageTransition";

export default function DiscoverPage() {
  const selectedActivity = useAppStore((state) => state.selectedActivity);
  const clearSelectedActivity = useAppStore(
    (state) => state.clearSelectedActivity,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Discover | ${BRAND_NAME}?`;
  }, []);

  return (
    <PageTransition>
      <div className="pb-16 pt-8">
        <div className="mb-12 px-4 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Uncover the Hidden Gems of Hyderabad
          </h1>
          <p className="mt-4 text-lg font-medium opacity-80">
            From secret supper clubs to underground gigs, find out what's happening around you right now.
          </p>
        </div>

        {selectedActivity ? (
          <ActivityDetails
            activity={selectedActivity}
            onBack={clearSelectedActivity}
          />
        ) : (
          <Discover />
        )}
      </div>
    </PageTransition>
  );
}