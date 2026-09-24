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
  title: "VELOCE | Quality New & Pre-Owned Vehicle Dealership",
  description:
    "Explore our collection of certified SUVs, sedans, trucks, hybrids, and luxury vehicles. Trade-in, financing, and nationwide delivery available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${barlowCondensed.variable} ${dmSans.variable} antialiased bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}