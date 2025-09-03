import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import { Pridi, Gantari } from "next/font/google";
import type React from "react";

const pridi = Pridi({ weight: ["400"], subsets: ["latin"], variable: "--font-pridi" });
const gantari = Gantari({ weight: ["400","600"], subsets: ["latin"], variable: "--font-gantari" });

export const metadata = { title: "Aquatela Tech", description: "Real-time water-quality insights" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pridi.variable} ${gantari.variable}`}>
      {/* make body use Gantari globally; titles will override to Pridi */}
      <body className="min-h-screen antialiased bg-[#0f261c] font-sans">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 pt-28">{children}</main>
      </body>
    </html>
  );
}
