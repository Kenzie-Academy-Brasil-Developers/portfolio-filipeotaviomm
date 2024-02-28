"use client";
import Header from "@/components/header/header";
import SectionHome from "@/components/sections/sectionHome";
import { Locale } from "@/config/it8n.config";
import { useMainContext } from "@/providers/mainContext";
import { useEffect } from "react";
// import { Inter } from "@next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

export default function Home({ params }: { params: { lang: Locale } }) {
  const { setLanguage, isMenuOpen, setIsMenuOpen } = useMainContext();
  useEffect(() => setLanguage(params.lang), []);

  useEffect(() => {
    console.log(isMenuOpen);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="body min-h-screen flex flex-col font-inter inter.variable">
      <Header />
      <SectionHome />
    </main>
  );
}
