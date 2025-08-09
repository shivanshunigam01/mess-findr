import mess1 from "@/assets/mess-1.jpg";
import mess2 from "@/assets/mess-2.jpg";
import mess3 from "@/assets/mess-3.jpg";

export type MealType = "breakfast" | "lunch" | "snacks" | "dinner";

export interface MenuItem { name: string; price?: number; veg: boolean; special?: boolean }
export interface Mess {
  id: string;
  name: string;
  location: string;
  phone: string;
  rating: number;
  vegOnly: boolean;
  image: string;
  mapsUrl: string;
  menu: Record<MealType, MenuItem[]>;
}

export const sampleMesses: Mess[] = [
  {
    id: "green-bowl",
    name: "Green Bowl Mess",
    location: "North Campus",
    phone: "+918888889999",
    rating: 4.5,
    vegOnly: true,
    image: mess1,
    mapsUrl: "https://maps.google.com/?q=North+Campus",
    menu: {
      breakfast: [
        { name: "Idli & Sambar", veg: true, special: true },
        { name: "Masala Dosa", veg: true },
        { name: "Omelette", veg: false }
      ],
      lunch: [
        { name: "Paneer Butter Masala", veg: true, special: true },
        { name: "Dal Tadka", veg: true },
        { name: "Veg Pulao", veg: true }
      ],
      snacks: [
        { name: "Samosa", veg: true },
        { name: "Grilled Sandwich", veg: true }
      ],
      dinner: [
        { name: "Veg Thali", veg: true },
        { name: "Jeera Rice + Dal Fry", veg: true }
      ]
    }
  },
  {
    id: "corner-plate",
    name: "Corner Plate",
    location: "South Campus",
    phone: "+919999998888",
    rating: 4.1,
    vegOnly: false,
    image: mess2,
    mapsUrl: "https://maps.google.com/?q=South+Campus",
    menu: {
      breakfast: [
        { name: "Poha", veg: true },
        { name: "Paratha + Curd", veg: true, special: true }
      ],
      lunch: [
        { name: "Chicken Curry", veg: false, special: true },
        { name: "Rajma Chawal", veg: true }
      ],
      snacks: [
        { name: "Cutlet", veg: true },
        { name: "Veg Momos", veg: true }
      ],
      dinner: [
        { name: "Egg Curry", veg: false },
        { name: "Chole Bhature", veg: true }
      ]
    }
  },
  {
    id: "city-canteen",
    name: "City Canteen",
    location: "City Center",
    phone: "+917777778888",
    rating: 4.3,
    vegOnly: false,
    image: mess3,
    mapsUrl: "https://maps.google.com/?q=City+Center",
    menu: {
      breakfast: [
        { name: "Upma", veg: true },
        { name: "Cornflakes + Milk", veg: true }
      ],
      lunch: [
        { name: "Veg Biryani", veg: true, special: true },
        { name: "Dal Makhani", veg: true }
      ],
      snacks: [
        { name: "Pav Bhaji", veg: true, special: true },
        { name: "Tea & Biscuit", veg: true }
      ],
      dinner: [
        { name: "Roti + Mix Veg", veg: true },
        { name: "Grilled Chicken", veg: false }
      ]
    }
  }
];

export const highlights = [
  { meal: "breakfast", name: "Masala Dosa" },
  { meal: "lunch", name: "Paneer Butter Masala" },
  { meal: "snacks", name: "Samosa" },
  { meal: "dinner", name: "Veg Thali" },
  { meal: "lunch", name: "Chicken Curry" },
];
