import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export interface Filters {
  query: string;
  location: string;
  meal: string;
  vegOnly: boolean;
  sort: string;
}

export const FiltersBar = ({
  filters,
  locations,
  onChange,
}: {
  filters: Filters;
  locations: string[];
  onChange: (next: Partial<Filters>) => void;
}) => {
  return (
    <div className="rounded-lg border p-4 grid gap-4 md:grid-cols-5">
      <Input
        value={filters.query}
        onChange={(e) => onChange({ query: e.target.value })}
        placeholder="Search mess or item…"
        className="md:col-span-2"
        aria-label="Search"
      />
      <Select value={filters.location} onValueChange={(v) => onChange({ location: v })}>
        <SelectTrigger><SelectValue placeholder="All locations" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="">All locations</SelectItem>
          {locations.map((l) => (
            <SelectItem key={l} value={l}>{l}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={filters.meal} onValueChange={(v) => onChange({ meal: v })}>
        <SelectTrigger><SelectValue placeholder="Any meal" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="">Any meal</SelectItem>
          <SelectItem value="breakfast">Breakfast</SelectItem>
          <SelectItem value="lunch">Lunch</SelectItem>
          <SelectItem value="snacks">Evening Snacks</SelectItem>
          <SelectItem value="dinner">Dinner</SelectItem>
        </SelectContent>
      </Select>
      <Select value={filters.sort} onValueChange={(v) => onChange({ sort: v })}>
        <SelectTrigger><SelectValue placeholder="Sort" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="">Default</SelectItem>
          <SelectItem value="rating">Highest Rated</SelectItem>
          <SelectItem value="name">Name A–Z</SelectItem>
        </SelectContent>
      </Select>
      <label className="flex items-center gap-2">
        <Switch checked={filters.vegOnly} onCheckedChange={(v) => onChange({ vegOnly: v })} />
        <span className="text-sm">Veg only</span>
      </label>
    </div>
  );
};
