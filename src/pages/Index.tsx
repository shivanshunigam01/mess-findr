import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedMessesCarousel } from "@/components/home/FeaturedMessesCarousel";
import { DailyHighlights } from "@/components/home/DailyHighlights";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturedMessesCarousel />
        <DailyHighlights />
        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-enter">
              <h2 className="text-3xl font-semibold mb-3">About The Daily Plate</h2>
              <p className="text-muted-foreground mb-4">Our mission is to make campus dining stress-free. Discover mess menus, compare options, and plan meals with confidence.</p>
              <p className="text-muted-foreground">We partner with local mess operators to keep menus up to date and highlight daily specials, so students always know what’s cooking.</p>
            </div>
            <div className="rounded-lg border p-8 gradient-primary text-primary-foreground animate-scale-in">
              <h3 className="text-xl font-semibold mb-2">Why students love us</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Instant search across nearby messes</li>
                <li>Daily highlights and specials</li>
                <li>Mobile-friendly with quick actions</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
