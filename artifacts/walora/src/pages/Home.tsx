import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timepieces from "@/components/Timepieces";
import Craftsmanship from "@/components/Craftsmanship";
import Heritage from "@/components/Heritage";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("walora_splash_seen");
    if (hasSeenSplash) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("walora_splash_seen", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground relative selection:bg-primary/30 selection:text-primary">
      <AnimatePresence>
        {showSplash && <Splash key="splash" />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${showSplash ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Timepieces />
          <Craftsmanship />
          <Heritage />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
