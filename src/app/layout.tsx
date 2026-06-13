import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutAnimation from "@/components/LayoutAnimation";

export const metadata: Metadata = {
  title: "Jada Han | Chinese Oil Painter",
  description:
    "Jada Han is a Chinese oil painter specializing in landscape oil paintings, modern paintings, and decorative artworks for contemporary interiors. Her works have been collected by galleries, art spaces, and private collectors.",
  keywords: [
    "Jada Han",
    "Chinese oil painter",
    "landscape paintings",
    "modern paintings",
    "decorative artworks",
    "contemporary art",
    "oil painting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif antialiased bg-cream-100 text-charcoal-900">
        <Header />
        <main className="min-h-screen">
          <LayoutAnimation>{children}</LayoutAnimation>
        </main>
        <Footer />
      </body>
    </html>
  );
}