export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: "sports" | "luxury" | "suv";
  price: number;
  year: number;
  mileage: number;
  engine: string;
  horsepower: number;
  transmission: string;
  acceleration: string;
  topSpeed: string;
  image: string;
  badge?: string;
  tagline: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    category: "sports",
    price: 285000,
    year: 2024,
    mileage: 1200,
    engine: "4.0L Naturally Aspirated Flat-6",
    horsepower: 518,
    transmission: "7-Speed PDK",
    acceleration: "3.0 sec",
    topSpeed: "184 mph",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    badge: "Just Arrived",
    tagline: "Track-bred performance engineered for pure driving pleasure.",
  },
  {
    id: "2",
    name: "Mercedes-AMG GT Coupe",
    brand: "Mercedes-Benz",
    category: "sports",
    price: 178000,
    year: 2024,
    mileage: 2400,
    engine: "4.0L Handcrafted V8 Biturbo",
    horsepower: 577,
    transmission: "9-Speed AMG Speedshift",
    acceleration: "3.1 sec",
    topSpeed: "196 mph",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    tagline: "Uncompromising luxury with breathtaking twin-turbo V8 power.",
  },
  {
    id: "3",
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    category: "sports",
    price: 330000,
    year: 2023,
    mileage: 3100,
    engine: "3.9L Twin-Turbo V8",
    horsepower: 710,
    transmission: "7-Speed Dual Clutch",
    acceleration: "2.9 sec",
    topSpeed: "211 mph",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    badge: "Rare Spec",
    tagline: "Italian design mastery meets an award-winning twin-turbo engine.",
  },
  {
    id: "4",
    name: "Audi R8 V10 Performance",
    brand: "Audi",
    category: "sports",
    price: 215000,
    year: 2023,
    mileage: 4800,
    engine: "5.2L Naturally Aspirated V10",
    horsepower: 602,
    transmission: "7-Speed S tronic",
    acceleration: "3.1 sec",
    topSpeed: "205 mph",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    badge: "Certified",
    tagline: "The iconic naturally aspirated V10 with quattro all-wheel drive.",
  },
  {
    id: "5",
    name: "BMW M8 Competition Gran Coupe",
    brand: "BMW",
    category: "luxury",
    price: 139000,
    year: 2024,
    mileage: 850,
    engine: "4.4L M TwinPower Turbo V8",
    horsepower: 617,
    transmission: "8-Speed M Steptronic",
    acceleration: "3.0 sec",
    topSpeed: "190 mph",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    badge: "Low Mileage",
    tagline: "Four-door grand touring luxury paired with explosive M performance.",
  },
  {
    id: "6",
    name: "Range Rover SV Autobiography",
    brand: "Land Rover",
    category: "suv",
    price: 220000,
    year: 2024,
    mileage: 1500,
    engine: "4.4L Twin-Turbo V8",
    horsepower: 523,
    transmission: "8-Speed Automatic",
    acceleration: "4.4 sec",
    topSpeed: "162 mph",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    badge: "Luxury SUV",
    tagline: "The absolute pinnacle of refined SUV comfort and all-terrain capability.",
  },
];