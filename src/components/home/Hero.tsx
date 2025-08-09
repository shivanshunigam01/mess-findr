import hero from "@/assets/hero-daily-plate.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

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
      <div className="pointer-events-none absolute -top-16 -right-20 h-72 w-72 rounded-full gradient-primary blur-3xl opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full gradient-primary blur-3xl opacity-20" aria-hidden="true" />
      <motion.div className="container grid md:grid-cols-2 gap-10 items-center py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div className="animate-enter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            Find Your Mess Menu in Seconds
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Compare menus, discover today's specials, and never miss your favorite meal again.
          </motion.p>
          <motion.form onSubmit={onSearch} className="flex gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search mess or item (e.g., dosa, paneer)…" aria-label="Search mess menus" />
            <Button type="submit" className="hover-scale">Search</Button>
          </motion.form>
          <motion.div className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Button variant="secondary" onClick={() => navigate('/messes')} className="hover-scale">Explore Messes</Button>
          </motion.div>
        </motion.div>
        <motion.div className="relative animate-scale-in"
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <img src={hero} alt="Modern student cafeteria showcasing food trays and seating — The Daily Plate" className="w-full h-auto rounded-lg shadow-xl glow-ring" loading="eager" />
          <div className="absolute inset-0 pointer-events-none rounded-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};
