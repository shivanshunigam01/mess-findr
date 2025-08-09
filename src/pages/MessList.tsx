import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { sampleMesses } from "@/data/messes";
import { MessCard } from "@/components/shared/MessCard";
import { FiltersBar, Filters } from "@/components/shared/FiltersBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const MessList = () => {
  const navigate = useNavigate();
  const q = useQuery();
  const [filters, setFilters] = useState<Filters>({
    query: q.get("q") || "",
    location: "",
    meal: "",
    vegOnly: false,
    sort: "",
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.query) params.set("q", filters.query);
    navigate({ search: params.toString() }, { replace: true });
  }, [filters.query, navigate]);

  const locations = Array.from(new Set(sampleMesses.map((m) => m.location)));

  const filtered = useMemo(() => {
    let m = sampleMesses.filter((item) => {
      const matchSearch = filters.query
        ? item.name.toLowerCase().includes(filters.query.toLowerCase()) ||
          Object.values(item.menu).some((arr) => arr.some((it) => it.name.toLowerCase().includes(filters.query.toLowerCase())))
        : true;
      const matchLoc = filters.location ? item.location === filters.location : true;
      const matchVeg = filters.vegOnly ? item.vegOnly : true;
      const matchMeal = filters.meal ? item.menu[filters.meal as keyof typeof item.menu]?.length > 0 : true;
      return matchSearch && matchLoc && matchVeg && matchMeal;
    });
    if (filters.sort === "rating") m = m.sort((a, b) => b.rating - a.rating);
    if (filters.sort === "name") m = m.sort((a, b) => a.name.localeCompare(b.name));
    return m;
  }, [filters]);

  return (
    <div>
      <Helmet>
        <title>Messes Near You — The Daily Plate</title>
        <meta name="description" content="Browse and filter college messes by location, meal type, veg, and rating. Call or get directions instantly." />
        <link rel="canonical" href="/messes" />
      </Helmet>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-3xl font-semibold mb-4">All Messes</h1>
        <FiltersBar
          filters={filters}
          locations={locations}
          onChange={(next) => setFilters((f) => ({ ...f, ...next }))}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((m) => (
            <MessCard key={m.id} mess={m} />
          ))}
          {filtered.length === 0 && (
            <div className="text-muted-foreground">No messes match your filters.</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MessList;
