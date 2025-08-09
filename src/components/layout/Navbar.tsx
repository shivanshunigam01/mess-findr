import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NavItems = () => (
  <div className="flex items-center gap-6">
    <NavLink to="/" className="story-link">Home</NavLink>
    <NavLink to="/messes" className="story-link">Messes</NavLink>
    <NavLink to="/about" className="story-link">About</NavLink>
    <NavLink to="/contact" className="story-link">Contact</NavLink>
  </div>
);

export const Navbar = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    navigate(`/messes?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg">The Daily Plate</Link>
          <div className="hidden md:block">
            <NavItems />
          </div>
        </div>

        <form onSubmit={onSearch} className="hidden md:flex items-center gap-2 w-[380px]">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search mess or item..." aria-label="Search" />
          <Button type="submit">Search</Button>
        </form>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/add-mess">Add Mess</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="grid gap-6 mt-8">
                <NavItems />
                <Button asChild>
                  <Link to="/add-mess">Add Mess</Link>
                </Button>
                <form onSubmit={onSearch} className="flex items-center gap-2">
                  <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search mess or item..." />
                  <Button type="submit">Go</Button>
                </form>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
