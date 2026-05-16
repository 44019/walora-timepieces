import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Craftsmanship from "@/components/Craftsmanship";
import Heritage from "@/components/Heritage";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);
    return () => clearTimeout(timer);
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
