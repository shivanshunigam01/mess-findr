import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">The Daily Plate</h3>
          <p className="text-muted-foreground">Find mess menus near your college in seconds.</p>
        </div>
        <nav className="grid gap-2">
          <Link to="/messes" className="story-link">Messes</Link>
          <Link to="/about" className="story-link">About</Link>
          <Link to="/contact" className="story-link">Contact</Link>
          <Link to="/add-mess" className="story-link">Add Mess</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
          <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} The Daily Plate</div>
    </footer>
  );
};
