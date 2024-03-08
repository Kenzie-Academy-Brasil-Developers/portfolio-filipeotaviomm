"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import AboutMeSection from "@/components/sections/aboutMeSection";
import ContactstSection from "@/components/sections/contactsSection";
import HomeSection from "@/components/sections/homeSection";
import ProjectsSection from "@/components/sections/projectsSection";
import SocialMediasSection from "@/components/sections/socialMediasSection";
import { Locale } from "@/config/it8n.config";
import { useMainContext } from "@/providers/mainContext";
import { useEffect } from "react";

export default function Home({ params }: { params: { lang: Locale } }) {
  const { setLanguage, setIsMenuOpen } = useMainContext();

  useEffect(() => setLanguage(params.lang), []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="body min-h-screen flex flex-col font-inter">
      <Header />
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactstSection />
      <SocialMediasSection />
      <Footer />
    </main>
  );
}
