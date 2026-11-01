import { useEffect } from "react";
import { BRAND_NAME } from "../../constance/constance";
import Vision from "../../components/Vision/Vision";
import PageTransition from "../../components/PageTransition";

export default function VisionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Our Vision | ${BRAND_NAME}?`;
  }, []);

  return (
    <PageTransition>
      <div className="pb-16 pt-8">
         <div className="mb-8 px-4 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Why We Are Building This
          </h1>
        </div>
        <Vision />
      </div>
    </PageTransition>
  );
}