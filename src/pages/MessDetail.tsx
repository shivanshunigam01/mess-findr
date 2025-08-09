import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sampleMesses, MenuItem, MealType } from "@/data/messes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Phone, Utensils } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useRef } from "react";

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className={`rounded-lg border p-4 bg-card ${item.special ? 'glow-ring' : ''} animate-enter`}>
    <div className="flex items-center justify-between">
      <span className="font-medium">{item.name}</span>
      {!item.veg && <span className="text-sm">Non-veg</span>}
    </div>
  </div>
);

const MessDetail = () => {
  const { id } = useParams();
  const mess = sampleMesses.find((m) => m.id === id);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!mess) return <div className="container py-20">Mess not found.</div>;

  const meals: MealType[] = ["breakfast", "lunch", "snacks", "dinner"];

  return (
    <div>
      <Helmet>
        <title>{mess.name} Menu — The Daily Plate</title>
        <meta name="description" content={`View ${mess.name} menu for breakfast, lunch, snacks, and dinner. Call or get directions.`} />
        <link rel="canonical" href={`/messes/${mess.id}`} />
      </Helmet>
      <Navbar />
      <main className="container py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={mess.image} alt={`${mess.name} photo`} className="w-full h-auto rounded-lg border" loading="eager" />
          <div>
            <h1 className="text-3xl font-semibold">{mess.name}</h1>
            <p className="text-muted-foreground">{mess.location} • ⭐ {mess.rating.toFixed(1)} • {mess.vegOnly ? 'Veg only' : 'Veg & Non-veg'}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button asChild>
                <a href={`tel:${mess.phone}`}><Phone className="h-4 w-4 mr-2" /> Call Mess</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={mess.mapsUrl} target="_blank" rel="noreferrer"><Utensils className="h-4 w-4 mr-2" /> Get Directions</a>
              </Button>
            </div>
          </div>
        </div>

        <div ref={menuRef} id="menu" className="mt-10">
          <Tabs defaultValue="lunch" className="w-full">
            <TabsList className="grid grid-cols-4">
              {meals.map((meal) => (
                <TabsTrigger key={meal} value={meal}>{meal.charAt(0).toUpperCase() + meal.slice(1)}</TabsTrigger>
              ))}
            </TabsList>
            {meals.map((meal) => (
              <TabsContent key={meal} value={meal}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {mess.menu[meal].map((item, i) => (
                    <MenuItemCard key={i} item={item} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      {/* Sticky mobile quick actions */}
      <div className="fixed bottom-0 inset-x-0 md:hidden border-t bg-background/95 backdrop-blur p-3 flex gap-3">
        <Button asChild className="flex-1">
          <a href={`tel:${mess.phone}`}><Phone className="h-4 w-4 mr-2" /> Call</a>
        </Button>
        <Button className="flex-1" variant="secondary" onClick={() => menuRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          <Utensils className="h-4 w-4 mr-2" /> View Menu
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default MessDetail;
