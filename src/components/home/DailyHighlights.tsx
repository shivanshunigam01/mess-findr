import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { highlights } from "@/data/messes";

export const DailyHighlights = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 2500 })]);

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-semibold mb-4">Today's Highlights</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {highlights.map((h, idx) => (
            <div key={idx} className="min-w-[200px] rounded-full border px-4 py-2 bg-secondary hover-scale">
              <span className="text-sm">{h.meal.toUpperCase()} • </span>
              <span className="font-medium">{h.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
