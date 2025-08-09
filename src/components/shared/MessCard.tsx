import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mess } from "@/data/messes";
import { motion } from "framer-motion";

export const MessCard = ({ mess }: { mess: Mess }) => {
  return (
    <motion.div
      className="rounded-lg border bg-card hover-scale overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link to={`/messes/${mess.id}`}>
        <img src={mess.image} alt={`${mess.name} mess photo`} loading="lazy" className="h-44 w-full object-cover" />
      </Link>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <Link to={`/messes/${mess.id}`} className="font-semibold story-link">{mess.name}</Link>
          <span className="text-sm text-muted-foreground">⭐ {mess.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /> {mess.location}
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Button asChild variant="secondary" size="sm">
            <a href={`tel:${mess.phone}`} aria-label={`Call ${mess.name}`}><Phone className="h-4 w-4 mr-1" /> Call</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={mess.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
