import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Import your components (adjust paths if they are in /app/Components)
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Writers.com | Creative Strategy & Design",
  description: "Bespoke design and narrative strategy for global brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Place Navbar here - it will now stay at the top of every page */}
        <Navbar />

        {/* This renders the specific content of whatever page you are visiting */}
        {children}

        {/* 3. Place Footer here - it will now stay at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}