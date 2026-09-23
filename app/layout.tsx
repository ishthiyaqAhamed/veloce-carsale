import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "VELOCE | Luxury & Exotic Vehicle Dealership",
  description:
    "Explore our collection of certified luxury, sports, and exotic vehicles. Nationwide delivery and flexible financing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${barlowCondensed.variable} ${dmSans.variable} antialiased bg-[#06060E] text-white min-h-screen flex flex-col selection:bg-[#C9FF00] selection:text-[#06060E]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}