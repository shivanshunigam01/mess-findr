import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About — The Daily Plate</title>
        <meta name="description" content="Our mission and vision: helping college students discover mess menus quickly with a clean, modern experience." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl font-semibold mb-6">About Us</h1>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <article className="space-y-4 animate-enter">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">To make campus dining transparent and effortless so students can focus on what matters. We bring menus from multiple messes into one place with instant search and friendly design.</p>
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground">A connected food community where messes and students collaborate, menus are always up to date, and great meals are easy to find.</p>
          </article>
          <aside className="rounded-lg border p-8 gradient-primary text-primary-foreground animate-scale-in">
            <h3 className="text-lg font-semibold mb-2">How The Daily Plate Helps</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Unified menus across campus</li>
              <li>Daily highlights and specials</li>
              <li>Mobile-first with quick actions</li>
            </ul>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
