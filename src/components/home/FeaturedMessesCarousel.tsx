import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { sampleMesses } from "@/data/messes";

export const FeaturedMessesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <section className="container py-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Featured Messes</h2>
        <Link to="/messes" className="story-link">View all</Link>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {sampleMesses.slice(0, 6).map((m) => (
            <Link key={m.id} to={`/messes/${m.id}`} className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] group">
              <div className="rounded-lg border bg-card hover-scale overflow-hidden">
                <img src={m.image} alt={`${m.name} mess photo`} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold group-hover:underline">{m.name}</h3>
                    <span className="text-sm text-muted-foreground">⭐ {m.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
