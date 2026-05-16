import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [, setLocation] = useLocation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/60 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <img 
          src="/images/hero.png" 
          alt="WALORA Luxury Watch on Velvet" 
          className="w-full h-full object-cover object-center transform scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" 
        />
      </div>
      
      <div className="relative z-20 text-center px-4 flex flex-col items-center w-full max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif text-foreground tracking-[0.15em] uppercase mb-6 drop-shadow-2xl"
        >
          WALORA
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-primary font-serif italic text-xl md:text-2xl mb-12 tracking-wider"
        >
          Precision. Prestige. Permanence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button 
            variant="outline" 
            className="border-primary text-primary bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-background rounded-none tracking-[0.2em] uppercase text-xs md:text-sm px-8 md:px-12 py-6 md:py-8 transition-all duration-500"
            onClick={() => setLocation("/timepieces")}
            data-testid="hero-cta-timepieces"
          >
            View Available Timepieces
          </Button>
          <Button 
            variant="ghost"
            className="text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-transparent rounded-none tracking-[0.2em] uppercase text-xs md:text-sm px-8 md:px-12 py-6 md:py-8 transition-all duration-500"
            onClick={() => scrollTo("contact")}
            data-testid="hero-cta-consult"
          >
            Book a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
