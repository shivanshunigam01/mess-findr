import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { highlights } from "@/data/messes";
import { motion } from "framer-motion";

export const DailyHighlights = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 2500 })]);

  return (
    <motion.section className="container py-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Today's Highlights</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {highlights.map((h, idx) => (
            <motion.div key={idx} className="min-w-[200px] rounded-full border px-4 py-2 bg-secondary hover-scale"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-sm">{h.meal.toUpperCase()} • </span>
              <span className="font-medium">{h.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
