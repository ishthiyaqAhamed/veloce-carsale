"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Car,
  Image as ImageIcon,
  Calendar,
  RefreshCw,
  Settings,
  LogOut,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  ExternalLink,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  Lock,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Phone,
  MapPin,
  Save,
  Check
} from "lucide-react";
import { vehicles as initialVehicles, Vehicle } from "../lib/dummyData";

interface ExtendedVehicle extends Vehicle {
  status?: "In Stock" | "Reserved" | "Sold";
}

interface TestDriveInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  date: string;
  preferredTime: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  notes?: string;
  createdAt: string;
}

interface TradeInSubmission {
  id: string;
  name: string;
  phone: string;
  currentCar: string;
  year: number;
  mileage: number;
  condition: string;
  targetCar: string;
  estimatedValue: string;
  status: "Reviewing" | "Offer Sent" | "Accepted" | "Declined";
  createdAt: string;
}

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: "opening" | "handover" | "showroom";
}

const INITIAL_INQUIRIES: TestDriveInquiry[] = [
  {
    id: "inq-101",
    name: "Dilantha Malagamuwa",
    phone: "077 123 4567",
    email: "dilantha@motorsport.lk",
    vehicle: "Nissan GT-R R35 Premium Edition",
    date: "2026-09-28",
    preferredTime: "10:30 AM",
    status: "Confirmed",
    notes: "VIP test drive scheduled with track specialist.",
    createdAt: "2026-09-24",
  },
  {
    id: "inq-102",
    name: "Kasun Jayasuriya",
    phone: "071 987 6543",
    email: "kasun.j@gmail.com",
    vehicle: "Lexus RX 500h F SPORT",
    date: "2026-09-29",
    preferredTime: "03:00 PM",
    status: "Pending",
    notes: "Interested in trade-in option with existing Prado.",
    createdAt: "2026-09-24",
  },
  {
    id: "inq-103",
    name: "Ruwan Wijesinghe",
    phone: "076 555 4321",
    email: "ruwan.w@outlook.com",
    vehicle: "Toyota Raize Z Modellista",
    date: "2026-09-26",
    preferredTime: "11:00 AM",
    status: "Completed",
    notes: "Customer purchased vehicle. Key handover completed.",
    createdAt: "2026-09-22",
  },
];

const INITIAL_TRADE_INS: TradeInSubmission[] = [
  {
    id: "tr-201",
    name: "Nadeeka Samarasekera",
    phone: "077 888 1234",
    currentCar: "Toyota Premio 2018 NZT260",
    year: 2018,
    mileage: 48000,
    condition: "Excellent (Single Owner)",
    targetCar: "Honda Vezel e:HEV RS Sport",
    estimatedValue: "LKR 14,500,000",
    status: "Offer Sent",
    createdAt: "2026-09-23",
  },
  {
    id: "tr-202",
    name: "Gayantha Wickramaratne",
    phone: "072 444 9900",
    currentCar: "Suzuki Wagon R Stingray 2019",
    year: 2019,
    mileage: 36000,
    condition: "Very Good",
    targetCar: "Suzuki Every Turbo 4WD",
    estimatedValue: "LKR 6,800,000",
    status: "Reviewing",
    createdAt: "2026-09-24",
  },
];

const INITIAL_GALLERY: GalleryItem[] = [
  { id: "g-1", image: "/gallery/aerial-showroom-grand-opening.jpg", title: "Aerial Sunset Drone View", category: "opening" },
  { id: "g-2", image: "/gallery/official-ribbon-cutting.jpg", title: "Official Ribbon Cutting Ceremony", category: "opening" },
  { id: "g-3", image: "/gallery/twin-nissan-gtr-showcase.jpg", title: "Twin Nissan GT-R Showcase", category: "showroom" },
  { id: "g-4", image: "/gallery/suzuki-every-family-handover.jpg", title: "Suzuki Every Family Handover", category: "handover" },
  { id: "g-5", image: "/gallery/honda-vezel-rs-handover.jpg", title: "Honda Vezel RS Delivery", category: "handover" },
  { id: "g-6", image: "/gallery/directors-defender-gtr.jpg", title: "Directors Land Rover Defender & GT-R", category: "showroom" },
];

export default function AdminPortal() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState("admin@hansagiri.com");
  const [adminPass, setAdminPass] = useState("");
  const [authError, setAuthError] = useState("");

  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<"dashboard" | "inventory" | "inquiries" | "tradeins" | "gallery" | "settings">("dashboard");

  // Data States (Stored in localStorage)
  const [vehiclesList, setVehiclesList] = useState<ExtendedVehicle[]>([]);
  const [inquiriesList, setInquiriesList] = useState<TestDriveInquiry[]>([]);
  const [tradeInsList, setTradeInsList] = useState<TradeInSubmission[]>([]);
  const [galleryList, setGalleryList] = useState<GalleryItem[]>([]);

  // Showroom Settings State
  const [showroomPhone, setShowroomPhone] = useState("077 777 8298");
  const [showroomAddress, setShowroomAddress] = useState("586 Galle Rd, Beruwala 61010");
  const [showroomHours, setShowroomHours] = useState("Daily 8:00 AM – 8:00 PM");
  const [announcementText, setAnnouncementText] = useState("Grand Opening Season: Experience Luxury Fleet at 586 Galle Rd, Beruwala");
  const [announcementActive, setAnnouncementActive] = useState(true);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Modal States
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [editingVehicleId, setEditingVehicleId] = useState<string | null>(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State for Vehicle Add/Edit
  const [formName, setFormName] = useState("");
  const [formBrand, setFormBrand] = useState("Toyota");
  const [formCategory, setFormCategory] = useState<"suv" | "sedan" | "truck" | "hybrid" | "sports">("suv");
  const [formPrice, setFormPrice] = useState<number>(15000000);
  const [formYear, setFormYear] = useState<number>(2024);
  const [formMileage, setFormMileage] = useState<number>(0);
  const [formEngine, setFormEngine] = useState("");
  const [formHp, setFormHp] = useState<number>(150);
  const [formTransmission, setFormTransmission] = useState("Automatic");
  const [formFuelType, setFormFuelType] = useState("Gasoline");
  const [formImage, setFormImage] = useState("/inventory/toyota-raize-z.jpg");
  const [formBadge, setFormBadge] = useState("");
  const [formTagline, setFormTagline] = useState("");
  const [formStatus, setFormStatus] = useState<"In Stock" | "Reserved" | "Sold">("In Stock");

  // Form State for Gallery
  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryCategory, setGalleryCategory] = useState<"opening" | "handover" | "showroom">("showroom");
  const [galleryImage, setGalleryImage] = useState("/gallery/twin-nissan-gtr-showcase.jpg");

  // Initial Data Load
  useEffect(() => {
    // Check local session
    const session = localStorage.getItem("hansagiri_admin_auth");
    if (session === "true") {
      setIsAuthenticated(true);
    }

    // Load Vehicles
    const storedVehicles = localStorage.getItem("hansagiri_admin_vehicles");
    if (storedVehicles) {
      try {
        setVehiclesList(JSON.parse(storedVehicles));
      } catch {
        setVehiclesList(initialVehicles.map(v => ({ ...v, status: "In Stock" })));
      }
    } else {
      setVehiclesList(initialVehicles.map(v => ({ ...v, status: "In Stock" })));
    }

    // Load Inquiries
    const storedInquiries = localStorage.getItem("hansagiri_admin_inquiries");
    if (storedInquiries) {
      try {
        setInquiriesList(JSON.parse(storedInquiries));
      } catch {
        setInquiriesList(INITIAL_INQUIRIES);
      }
    } else {
      setInquiriesList(INITIAL_INQUIRIES);
    }

    // Load Trade-ins
    const storedTradeIns = localStorage.getItem("hansagiri_admin_tradeins");
    if (storedTradeIns) {
      try {
        setTradeInsList(JSON.parse(storedTradeIns));
      } catch {
        setTradeInsList(INITIAL_TRADE_INS);
      }
    } else {
      setTradeInsList(INITIAL_TRADE_INS);
    }

    // Load Gallery
    const storedGallery = localStorage.getItem("hansagiri_admin_gallery");
    if (storedGallery) {
      try {
        setGalleryList(JSON.parse(storedGallery));
      } catch {
        setGalleryList(INITIAL_GALLERY);
      }
    } else {
      setGalleryList(INITIAL_GALLERY);
    }
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === "admin123" || adminPass === "2026" || adminPass === "hansagiri") {
      setIsAuthenticated(true);
      localStorage.setItem("hansagiri_admin_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Invalid passcode. Enter 'admin123' or '2026' to sign in.");
    }
  };

  const handleDemoQuickLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("hansagiri_admin_auth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("hansagiri_admin_auth");
  };

  // Save changes to localStorage helper
  const saveVehicles = (updated: ExtendedVehicle[]) => {
    setVehiclesList(updated);
    localStorage.setItem("hansagiri_admin_vehicles", JSON.stringify(updated));
  };

  const saveInquiries = (updated: TestDriveInquiry[]) => {
    setInquiriesList(updated);
    localStorage.setItem("hansagiri_admin_inquiries", JSON.stringify(updated));
  };

  const saveTradeIns = (updated: TradeInSubmission[]) => {
    setTradeInsList(updated);
    localStorage.setItem("hansagiri_admin_tradeins", JSON.stringify(updated));
  };

  const saveGallery = (updated: GalleryItem[]) => {
    setGalleryList(updated);
    localStorage.setItem("hansagiri_admin_gallery", JSON.stringify(updated));
  };

  // Open Modal for Add
  const handleOpenAddModal = () => {
    setEditingVehicleId(null);
    setFormName("");
    setFormBrand("Toyota");
    setFormCategory("suv");
    setFormPrice(16500000);
    setFormYear(2024);
    setFormMileage(0);
    setFormEngine("1.0L Turbo Dual VVT-i");
    setFormHp(98);
    setFormTransmission("CVT Automatic");
    setFormFuelType("Gasoline");
    setFormImage("/inventory/toyota-raize-z.jpg");
    setFormBadge("Brand New Stock");
    setFormTagline("Pristine condition with complete warranty & Japanese auction verification.");
    setFormStatus("In Stock");
    setIsVehicleModalOpen(true);
  };

  // Open Modal for Edit
  const handleOpenEditModal = (vehicle: ExtendedVehicle) => {
    setEditingVehicleId(vehicle.id);
    setFormName(vehicle.name);
    setFormBrand(vehicle.brand);
    setFormCategory(vehicle.category);
    setFormPrice(vehicle.price);
    setFormYear(vehicle.year);
    setFormMileage(vehicle.mileage);
    setFormEngine(vehicle.engine);
    setFormHp(vehicle.horsepower);
    setFormTransmission(vehicle.transmission);
    setFormFuelType(vehicle.fuelType);
    setFormImage(vehicle.image);
    setFormBadge(vehicle.badge || "");
    setFormTagline(vehicle.tagline);
    setFormStatus(vehicle.status || "In Stock");
    setIsVehicleModalOpen(true);
  };

  // Save Vehicle (Create or Update)
  const handleSaveVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    if (editingVehicleId) {
      // Update
      const updated = vehiclesList.map((v) => {
        if (v.id === editingVehicleId) {
          return {
            ...v,
            name: formName.trim(),
            brand: formBrand.trim(),
            category: formCategory,
            price: Number(formPrice),
            year: Number(formYear),
            mileage: Number(formMileage),
            engine: formEngine.trim(),
            horsepower: Number(formHp),
            transmission: formTransmission.trim(),
            fuelType: formFuelType.trim(),
            image: formImage.trim() || "/inventory/toyota-raize-z.jpg",
            badge: formBadge.trim() || undefined,
            tagline: formTagline.trim(),
            status: formStatus,
          };
        }
        return v;
      });
      saveVehicles(updated);
      triggerToast(`Vehicle "${formName}" updated successfully!`);
    } else {
      // Create
      const newCar: ExtendedVehicle = {
        id: `veh-${Date.now()}`,
        name: formName.trim(),
        brand: formBrand.trim(),
        category: formCategory,
        price: Number(formPrice),
        year: Number(formYear),
        mileage: Number(formMileage),
        engine: formEngine.trim(),
        horsepower: Number(formHp),
        transmission: formTransmission.trim(),
        fuelType: formFuelType.trim(),
        acceleration: "6.5 sec",
        image: formImage.trim() || "/inventory/toyota-raize-z.jpg",
        badge: formBadge.trim() || "New Arrival",
        tagline: formTagline.trim() || "Quality certified new vehicle at Hansagiri Auto Traders Beruwala.",
        status: formStatus,
      };
      saveVehicles([newCar, ...vehiclesList]);
      triggerToast(`Vehicle "${formName}" added to inventory!`);
    }

    setIsVehicleModalOpen(false);
  };

  // Delete Vehicle
  const handleDeleteVehicle = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove "${name}" from inventory?`)) {
      const updated = vehiclesList.filter((v) => v.id !== id);
      saveVehicles(updated);
      triggerToast(`Vehicle "${name}" removed.`);
    }
  };

  // Toggle Vehicle Status
  const handleToggleStatus = (id: string, newStatus: "In Stock" | "Reserved" | "Sold") => {
    const updated = vehiclesList.map((v) => (v.id === id ? { ...v, status: newStatus } : v));
    saveVehicles(updated);
    triggerToast(`Status updated to ${newStatus}`);
  };

  // Inquiries Actions
  const handleUpdateInquiryStatus = (id: string, status: TestDriveInquiry["status"]) => {
    const updated = inquiriesList.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    saveInquiries(updated);
    triggerToast(`Booking status changed to ${status}`);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiriesList.filter((inq) => inq.id !== id);
    saveInquiries(updated);
    triggerToast("Booking request removed.");
  };

  // Trade-In Actions
  const handleUpdateTradeInStatus = (id: string, status: TradeInSubmission["status"]) => {
    const updated = tradeInsList.map((tr) => (tr.id === id ? { ...tr, status } : tr));
    saveTradeIns(updated);
    triggerToast(`Trade-in status updated to ${status}`);
  };

  // Add Gallery Photo
  const handleSaveGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryTitle.trim()) return;

    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: galleryTitle.trim(),
      category: galleryCategory,
      image: galleryImage.trim() || "/gallery/twin-nissan-gtr-showcase.jpg",
    };

    saveGallery([newItem, ...galleryList]);
    triggerToast("Photo added to Hansagiri Moments Gallery!");
    setIsGalleryModalOpen(false);
    setGalleryTitle("");
  };

  const handleDeleteGalleryItem = (id: string) => {
    const updated = galleryList.filter((g) => g.id !== id);
    saveGallery(updated);
    triggerToast("Gallery item removed.");
  };

  // Filtered Vehicles
  const filteredVehicles = vehiclesList.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.engine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ? true : (v.status || "In Stock") === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate Metrics
  const totalStockCount = vehiclesList.filter((v) => (v.status || "In Stock") === "In Stock").length;
  const totalReservedCount = vehiclesList.filter((v) => v.status === "Reserved").length;
  const totalSoldCount = vehiclesList.filter((v) => v.status === "Sold").length;
  const pendingInquiriesCount = inquiriesList.filter((i) => i.status === "Pending").length;
  const totalInventoryValue = vehiclesList.reduce((acc, v) => acc + (v.price || 0), 0);

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background glow & accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-8">
            <div className="relative h-16 w-40 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/hansagiri-logo.png"
                alt="Hansagiri Logo"
                width={160}
                height={60}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-mono font-bold uppercase mb-2">
              <Shield size={12} className="text-lime-400" />
              <span>Management Portal</span>
            </div>

            <h1 className="font-display font-black text-2xl uppercase tracking-tight text-white">
              Hansagiri Admin Access
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-1">
              586 Galle Rd, Beruwala · Website CMS & Fleet Control
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-lime-500 outline-none text-sm font-mono transition-all"
                placeholder="admin@hansagiri.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                Passcode / PIN
              </label>
              <input
                type="password"
                required
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-lime-500 outline-none text-sm font-mono transition-all"
                placeholder="Enter admin passcode"
              />
              <span className="text-[11px] font-mono text-slate-500 mt-1 block">
                Demo access code: <code className="text-lime-400 font-bold">admin123</code> or <code className="text-lime-400 font-bold">2026</code>
              </span>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-lime-500/20 cursor-pointer"
            >
              Sign In to Admin Portal
            </button>

            <button
              type="button"
              onClick={handleDemoQuickLogin}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>1-Click Instant Demo Login</span>
              <ArrowUpRight size={14} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <Link
              href="/"
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>← Back to Public Website</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // MAIN ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-lime-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 px-6 h-18 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="relative h-9 w-28 flex items-center justify-center">
              <Image
                src="/hansagiri-logo.png"
                alt="Hansagiri Logo"
                width={120}
                height={45}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-black text-sm uppercase tracking-wider text-white">
                Admin Console
              </span>
              <span className="text-[9px] font-mono text-lime-400 uppercase tracking-widest font-bold">
                ● Live System Control
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 hover:text-white border border-slate-700 transition-all"
          >
            <span>View Website</span>
            <ExternalLink size={13} />
          </Link>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold transition-all cursor-pointer"
          >
            <LogOut size={13} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Admin Body (Sidebar + Content) */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Sidebar / Mobile Tab Bar */}
        <aside className="w-full md:w-64 bg-[#0F172A] border-b md:border-b-0 md:border-r border-slate-800 p-3 md:p-4 shrink-0">
          <nav className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1.5 md:gap-0 md:space-y-1.5 scrollbar-none pb-1 md:pb-0">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-2.5 px-3.5 md:px-4 py-2.5 md:py-3 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink md:w-full ${
                activeTab === "dashboard"
                  ? "bg-lime-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <LayoutDashboard size={15} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab("inventory")}
              className={`flex items-center justify-between gap-2.5 px-3.5 md:px-4 py-2.5 md:py-3 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink md:w-full ${
                activeTab === "inventory"
                  ? "bg-lime-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Car size={15} />
                <span>Inventory Fleet</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "inventory" ? "bg-slate-950 text-white" : "bg-slate-800 text-slate-300"}`}>
                {vehiclesList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`flex items-center justify-between gap-2.5 px-3.5 md:px-4 py-2.5 md:py-3 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink md:w-full ${
                activeTab === "inquiries"
                  ? "bg-lime-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Calendar size={15} />
                <span>Test Drives / VIP</span>
              </div>
              {pendingInquiriesCount > 0 && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black">
                  {pendingInquiriesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("tradeins")}
              className={`flex items-center justify-between gap-2.5 px-3.5 md:px-4 py-2.5 md:py-3 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink md:w-full ${
                activeTab === "tradeins"
                  ? "bg-lime-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <RefreshCw size={15} />
                <span>Trade-Ins</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "tradeins" ? "bg-slate-950 text-white" : "bg-slate-800 text-slate-300"}`}>
                {tradeInsList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center justify-between gap-2.5 px-3.5 md:px-4 py-2.5 md:py-3 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink md:w-full ${
                activeTab === "gallery"
                  ? "bg-lime-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ImageIcon size={15} />
                <span>Moments Gallery</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "gallery" ? "bg-slate-950 text-white" : "bg-slate-800 text-slate-300"}`}>
                {galleryList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-2.5 px-3.5 md:px-4 py-2.5 md:py-3 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink md:w-full ${
                activeTab === "settings"
                  ? "bg-lime-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Settings size={15} />
              <span>Showroom Settings</span>
            </button>
          </nav>

          <div className="hidden md:block mt-8 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2 text-lime-400 font-bold mb-1">
              <Shield size={14} />
              <span>Hansagiri Security</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Authenticated Session. All modifications are synchronized to site storage.
            </p>
          </div>
        </aside>

        {/* Main Workspace Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl">
          
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Welcome Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                    Showroom Performance
                  </h1>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Hansagiri Auto Traders · 586 Galle Rd, Beruwala Fleet Overview
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleOpenAddModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <Plus size={15} />
                    <span>Add New Vehicle</span>
                  </button>
                </div>
              </div>

              {/* Stats KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-6 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">Active Fleet Stock</span>
                    <div className="p-2 rounded-xl bg-lime-500/10 text-lime-400">
                      <Car size={18} />
                    </div>
                  </div>
                  <div className="text-3xl font-display font-black text-white">{totalStockCount} Units</div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-lime-400 mt-2">
                    <TrendingUp size={13} />
                    <span>{vehiclesList.length} Total Registered</span>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">Pending Test Drives</span>
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                      <Calendar size={18} />
                    </div>
                  </div>
                  <div className="text-3xl font-display font-black text-white">{pendingInquiriesCount}</div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-2">
                    <span>{inquiriesList.length} Total Bookings Recorded</span>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">Trade-In Inquiries</span>
                    <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                      <RefreshCw size={18} />
                    </div>
                  </div>
                  <div className="text-3xl font-display font-black text-white">{tradeInsList.length}</div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400 mt-2">
                    <span>Active Vehicle Exchanges</span>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">Showroom Valuation</span>
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <DollarSign size={18} />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white">
                    LKR {(totalInventoryValue / 1000000).toFixed(1)}M
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-2">
                    <span>Estimated Showroom Fleet</span>
                  </div>
                </div>
              </div>

              {/* Recent Inquiries Quick Table */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-display font-bold text-lg uppercase text-white">
                      Recent Test Drive & VIP Requests
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">Incoming appointments from web visitors</p>
                  </div>
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    className="text-xs font-mono text-lime-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Inquiries</span>
                    <ChevronRight size={13} />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                      <tr>
                        <th className="pb-3 font-bold">Customer Name</th>
                        <th className="pb-3 font-bold">Requested Car</th>
                        <th className="pb-3 font-bold">Date & Time</th>
                        <th className="pb-3 font-bold">Contact</th>
                        <th className="pb-3 font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {inquiriesList.slice(0, 4).map((inq) => (
                        <tr key={inq.id} className="hover:bg-slate-800/30">
                          <td className="py-3.5 font-bold text-white font-sans">{inq.name}</td>
                          <td className="py-3.5 text-lime-400">{inq.vehicle}</td>
                          <td className="py-3.5">{inq.date} · {inq.preferredTime}</td>
                          <td className="py-3.5">{inq.phone}</td>
                          <td className="py-3.5">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                                inq.status === "Confirmed"
                                  ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                                  : inq.status === "Completed"
                                  ? "bg-slate-800 text-slate-300"
                                  : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              }`}
                            >
                              {inq.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Showroom Status Banner */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base uppercase text-white">
                      Hansagiri Showroom · Beruwala
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">
                      {showroomAddress} · Phone: {showroomPhone} · {showroomHours}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab("settings")}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-600 transition-all cursor-pointer"
                >
                  Edit Showroom Info
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: INVENTORY MANAGEMENT */}
          {activeTab === "inventory" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                    Inventory Fleet Control
                  </h1>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Manage vehicle listings, pricing, specs, and stock status in real-time
                  </p>
                </div>

                <button
                  onClick={handleOpenAddModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <Plus size={16} />
                  <span>Add Vehicle Listing</span>
                </button>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by car name, make, engine..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:border-lime-500 outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                  {["all", "In Stock", "Reserved", "Sold"].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                        statusFilter === st
                          ? "bg-lime-500 text-slate-950 font-bold"
                          : "bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700"
                      }`}
                    >
                      {st === "all" ? "All Cars" : st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicles Grid / Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((veh) => (
                  <div
                    key={veh.id}
                    className="rounded-3xl bg-[#0F172A] border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm"
                  >
                    <div>
                      {/* Image Preview & Status Badge */}
                      <div className="relative h-48 w-full bg-slate-900">
                        <Image
                          src={veh.image}
                          alt={veh.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute top-3 right-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-md ${
                              (veh.status || "In Stock") === "In Stock"
                                ? "bg-lime-500 text-slate-950"
                                : veh.status === "Reserved"
                                ? "bg-amber-400 text-slate-950"
                                : "bg-rose-500 text-white"
                            }`}
                          >
                            {veh.status || "In Stock"}
                          </span>
                        </div>
                        {veh.badge && (
                          <div className="absolute bottom-3 left-3">
                            <span className="px-2.5 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                              {veh.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                          <span>{veh.year} · {veh.brand}</span>
                          <span className="uppercase text-lime-400 font-bold">{veh.category}</span>
                        </div>
                        <h3 className="font-display font-black text-lg text-white mb-2 leading-snug">
                          {veh.name}
                        </h3>
                        <div className="text-xl font-display font-black text-lime-400 mb-3">
                          LKR {(veh.price).toLocaleString()}
                        </div>
                        <p className="text-xs text-slate-400 font-normal line-clamp-2 mb-4">
                          {veh.tagline}
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-850">
                          <div>⚡ {veh.horsepower} HP</div>
                          <div>🕹️ {veh.transmission.split(" ")[0]}</div>
                          <div>⛽ {veh.fuelType}</div>
                          <div>🛣️ {veh.mileage.toLocaleString()} KM</div>
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleToggleStatus(veh.id, "In Stock")}
                          className={`px-2 py-1 rounded-lg text-[10px] font-mono uppercase cursor-pointer ${
                            (veh.status || "In Stock") === "In Stock"
                              ? "bg-lime-500/20 text-lime-400 font-bold border border-lime-500/30"
                              : "text-slate-500 hover:text-slate-300"
                          }`}
                          title="Mark In Stock"
                        >
                          Available
                        </button>
                        <button
                          onClick={() => handleToggleStatus(veh.id, "Reserved")}
                          className={`px-2 py-1 rounded-lg text-[10px] font-mono uppercase cursor-pointer ${
                            veh.status === "Reserved"
                              ? "bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30"
                              : "text-slate-500 hover:text-slate-300"
                          }`}
                          title="Mark Reserved"
                        >
                          Reserved
                        </button>
                        <button
                          onClick={() => handleToggleStatus(veh.id, "Sold")}
                          className={`px-2 py-1 rounded-lg text-[10px] font-mono uppercase cursor-pointer ${
                            veh.status === "Sold"
                              ? "bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30"
                              : "text-slate-500 hover:text-slate-300"
                          }`}
                          title="Mark Sold"
                        >
                          Sold
                        </button>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleOpenEditModal(veh)}
                          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                          title="Edit Vehicle"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteVehicle(veh.id, veh.name)}
                          className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors cursor-pointer"
                          title="Delete Vehicle"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 3: TEST DRIVE & INQUIRIES */}
          {activeTab === "inquiries" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                    Test Drive & VIP Appointments
                  </h1>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Manage customer test drive requests and showroom appointments
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {inquiriesList.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-6 rounded-3xl bg-[#0F172A] border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display font-bold text-lg text-white font-sans">
                          {inq.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase ${
                            inq.status === "Confirmed"
                              ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                              : inq.status === "Completed"
                              ? "bg-slate-800 text-slate-300"
                              : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          }`}
                        >
                          {inq.status}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          Submitted: {inq.createdAt}
                        </span>
                      </div>

                      <div className="text-sm font-mono text-lime-400 font-bold">
                        Vehicle: {inq.vehicle}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Calendar size={13} className="text-lime-400" />
                          <span>Appointment: {inq.date} at {inq.preferredTime}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Phone size={13} className="text-lime-400" />
                          <a href={`tel:${inq.phone}`} className="hover:underline">{inq.phone}</a>
                        </span>
                      </div>

                      {inq.notes && (
                        <p className="text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-850 font-sans">
                          Notes: {inq.notes}
                        </p>
                      )}
                    </div>

                    {/* Status Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleUpdateInquiryStatus(inq.id, "Confirmed")}
                        className="px-4 py-2 rounded-xl bg-lime-500/20 hover:bg-lime-500/30 text-lime-400 border border-lime-500/30 text-xs font-mono font-bold transition-all cursor-pointer"
                      >
                        Confirm Booking
                      </button>
                      <button
                        onClick={() => handleUpdateInquiryStatus(inq.id, "Completed")}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold transition-all cursor-pointer"
                      >
                        Completed
                      </button>
                      <button
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-all cursor-pointer"
                        title="Delete Inquiry"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: TRADE-IN VALUATIONS */}
          {activeTab === "tradeins" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                  Trade-In & Vehicle Exchange
                </h1>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Customer vehicle trade-in submissions and estimated valuations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tradeInsList.map((tr) => (
                  <div
                    key={tr.id}
                    className="p-6 rounded-3xl bg-[#0F172A] border border-slate-800 space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display font-bold text-lg text-white font-sans">
                          {tr.name}
                        </h3>
                        <p className="text-xs font-mono text-slate-400">
                          Phone: <a href={`tel:${tr.phone}`} className="text-lime-400 hover:underline">{tr.phone}</a>
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-sky-500/20 text-sky-400 border border-sky-500/30">
                        {tr.status}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-2 text-xs font-mono">
                      <div className="text-slate-300">
                        <strong className="text-white block font-sans text-sm">Offered Vehicle:</strong>
                        {tr.currentCar} ({tr.year}) · {tr.mileage.toLocaleString()} KM
                      </div>
                      <div className="text-slate-400">Condition: {tr.condition}</div>
                      <div className="text-lime-400 font-bold">Interested In: {tr.targetCar}</div>
                      <div className="text-amber-400 font-bold">Estimated Value: {tr.estimatedValue}</div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => handleUpdateTradeInStatus(tr.id, "Offer Sent")}
                        className="flex-1 py-2 rounded-xl bg-lime-500/20 hover:bg-lime-500/30 text-lime-400 border border-lime-500/30 text-xs font-mono font-bold cursor-pointer"
                      >
                        Send Valuation Offer
                      </button>
                      <button
                        onClick={() => handleUpdateTradeInStatus(tr.id, "Accepted")}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold cursor-pointer"
                      >
                        Accepted
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: MOMENTS GALLERY MANAGER */}
          {activeTab === "gallery" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                    Moments Gallery Control
                  </h1>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Manage ceremony, delivery, and showroom showcase photography
                  </p>
                </div>

                <button
                  onClick={() => setIsGalleryModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <Plus size={16} />
                  <span>Add Gallery Photo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryList.map((g) => (
                  <div
                    key={g.id}
                    className="rounded-3xl bg-[#0F172A] border border-slate-800 overflow-hidden group hover:border-slate-700 transition-all"
                  >
                    <div className="relative h-52 w-full bg-slate-900">
                      <Image
                        src={g.image}
                        alt={g.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono uppercase text-lime-400 border border-lime-400/30 font-bold">
                          {g.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-white truncate pr-2">
                        {g.title}
                      </h4>
                      <button
                        onClick={() => handleDeleteGalleryItem(g.id)}
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors cursor-pointer shrink-0"
                        title="Delete Photo"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 6: SHOWROOM SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6 animate-in fade-in duration-200 max-w-3xl">
              <div>
                <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                  Showroom & Website Settings
                </h1>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Configure business contact details, showroom schedule, and site announcements
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-slate-800 space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                    Showroom Hotline
                  </label>
                  <input
                    type="text"
                    value={showroomPhone}
                    onChange={(e) => setShowroomPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                    Showroom Address
                  </label>
                  <input
                    type="text"
                    value={showroomAddress}
                    onChange={(e) => setShowroomAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                    Opening Hours
                  </label>
                  <input
                    type="text"
                    value={showroomHours}
                    onChange={(e) => setShowroomHours(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                    Top Announcement Banner Text
                  </label>
                  <textarea
                    rows={2}
                    value={announcementText}
                    onChange={(e) => setAnnouncementText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => triggerToast("Showroom settings updated successfully!")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <Save size={15} />
                    <span>Save Settings</span>
                  </button>
                </div>

              </div>

            </div>
          )}

        </main>
      </div>

      {/* ADD / EDIT VEHICLE MODAL */}
      {isVehicleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsVehicleModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <XCircle size={20} />
            </button>

            <h2 className="font-display font-black text-2xl uppercase text-white mb-1">
              {editingVehicleId ? "Edit Vehicle Listing" : "Add Vehicle to Fleet"}
            </h2>
            <p className="text-xs font-mono text-slate-400 mb-6">
              Fill in the vehicle specifications for Hansagiri Auto Traders website
            </p>

            <form onSubmit={handleSaveVehicle} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Vehicle Model Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Toyota Raize Z Modellista"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-sans text-sm focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Brand / Manufacturer *
                  </label>
                  <input
                    type="text"
                    required
                    value={formBrand}
                    onChange={(e) => setFormBrand(e.target.value)}
                    placeholder="e.g. Toyota / Lexus / Nissan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-sans text-sm focus:border-lime-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Category
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:border-lime-500 outline-none"
                  >
                    <option value="suv">SUV</option>
                    <option value="sedan">Sedan</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="sports">Sports</option>
                    <option value="truck">Commercial / Van</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Price (LKR) *
                  </label>
                  <input
                    type="number"
                    required
                    value={formPrice}
                    onChange={(e) => setFormPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Manufacture Year
                  </label>
                  <input
                    type="number"
                    value={formYear}
                    onChange={(e) => setFormYear(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Mileage (KM)
                  </label>
                  <input
                    type="number"
                    value={formMileage}
                    onChange={(e) => setFormMileage(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Horsepower (HP)
                  </label>
                  <input
                    type="number"
                    value={formHp}
                    onChange={(e) => setFormHp(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Stock Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:border-lime-500 outline-none"
                  >
                    <option value="In Stock">In Stock (Available)</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Sold">Sold</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Engine Spec
                  </label>
                  <input
                    type="text"
                    value={formEngine}
                    onChange={(e) => setFormEngine(e.target.value)}
                    placeholder="e.g. 1.0L Turbo Dual VVT-i"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:border-lime-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Transmission
                  </label>
                  <input
                    type="text"
                    value={formTransmission}
                    onChange={(e) => setFormTransmission(e.target.value)}
                    placeholder="e.g. 6-Speed Automatic / CVT"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:border-lime-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                  Image URL / Asset Path
                </label>
                <input
                  type="text"
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  placeholder="/inventory/toyota-raize-z.jpg"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:border-lime-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                  Vehicle Tagline / Description
                </label>
                <textarea
                  rows={2}
                  value={formTagline}
                  onChange={(e) => setFormTagline(e.target.value)}
                  placeholder="Showroom vehicle description and highlights..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-sans text-xs focus:border-lime-500 outline-none resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsVehicleModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  {editingVehicleId ? "Save Changes" : "Create Listing"}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ADD GALLERY PHOTO MODAL */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#0F172A] border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setIsGalleryModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <XCircle size={20} />
            </button>

            <h2 className="font-display font-black text-2xl uppercase text-white mb-1">
              Add Gallery Moment
            </h2>
            <p className="text-xs font-mono text-slate-400 mb-6">
              Showcase ceremonial handovers and showroom photos
            </p>

            <form onSubmit={handleSaveGalleryItem} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                  Photo Title *
                </label>
                <input
                  type="text"
                  required
                  value={galleryTitle}
                  onChange={(e) => setGalleryTitle(e.target.value)}
                  placeholder="e.g. VIP Delivery Handover"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-sans text-sm focus:border-lime-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                  Category
                </label>
                <select
                  value={galleryCategory}
                  onChange={(e) => setGalleryCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:border-lime-500 outline-none"
                >
                  <option value="showroom">Showroom & Fleet</option>
                  <option value="handover">Key Handovers & Deliveries</option>
                  <option value="opening">Grand Opening & Ceremony</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                  Image Path / URL
                </label>
                <input
                  type="text"
                  value={galleryImage}
                  onChange={(e) => setGalleryImage(e.target.value)}
                  placeholder="/gallery/twin-nissan-gtr-showcase.jpg"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:border-lime-500 outline-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
