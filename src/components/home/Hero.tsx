import hero from "@/assets/hero-daily-plate.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export const Hero = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const onSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    navigate(`/messes?q=${encodeURIComponent(q)}`);
  };

  return (
    <section className="relative overflow-hidden">
      <Helmet>
        <title>The Daily Plate — Find Mess Menu in Seconds</title>
        <meta name="description" content="Search mess menus near your college instantly. Discover daily specials and plan your meals." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="container grid md:grid-cols-2 gap-10 items-center py-16">
        <div className="animate-enter">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Find Your Mess Menu in Seconds</h1>
          <p className="text-lg text-muted-foreground mb-6">Compare menus, discover today's specials, and never miss your favorite meal again.</p>
          <form onSubmit={onSearch} className="flex gap-2">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search mess or item (e.g., dosa, paneer)…" aria-label="Search mess menus" />
            <Button type="submit" className="hover-scale">Search</Button>
          </form>
          <div className="mt-6">
            <Button variant="secondary" onClick={() => navigate('/messes')} className="hover-scale">Explore Messes</Button>
          </div>
        </div>
        <div className="relative animate-scale-in">
          <img src={hero} alt="Modern student cafeteria showcasing food trays and seating — The Daily Plate" className="w-full h-auto rounded-lg shadow-xl glow-ring" loading="eager" />
          <div className="absolute inset-0 pointer-events-none rounded-lg" />
        </div>
      </div>
    </section>
  );
};
