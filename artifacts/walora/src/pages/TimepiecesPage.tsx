import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const timepieces = [
  {
    id: "noir",
    name: "WALORA Noir",
    description: "Midnight black dial, 41mm case, Swiss movement",
    price: "$12,500",
    image: "/images/watch-noir.png"
  },
  {
    id: "aurum",
    name: "WALORA Aurum",
    description: "Champagne gold dial, 38mm case, sapphire crystal",
    price: "$18,200",
    image: "/images/watch-aurum.png"
  },
  {
    id: "classique",
    name: "WALORA Classique",
    description: "White enamel dial, rose gold indices, leather strap",
    price: "$14,800",
    image: "/images/watch-classique.png"
  },
  {
    id: "celeste",
    name: "WALORA Céleste",
    description: "Deep navy blue dial with meteor texture, titanium case",
    price: "$22,000",
    image: "/images/watch-celeste.png"
  }
];

export default function TimepiecesPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-40 pb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors duration-300 mb-12 text-xs tracking-widest uppercase font-sans"
            data-testid="btn-back-home"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </motion.button>

          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-primary font-sans tracking-[0.3em] uppercase text-xs mb-4"
            >
              The Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-serif text-foreground mb-6 tracking-wide"
            >
              Available Timepieces
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px w-24 bg-primary mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-foreground/60 font-serif italic text-lg"
            >
              Each piece is a statement. Choose yours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timepieces Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timepieces.map((watch, index) => (
              <motion.div
                key={watch.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-card border border-white/5 overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,168,76,0.1)]"
                data-testid={`card-watch-${watch.id}`}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-contain relative z-0 transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-card">
                  <h3 className="text-2xl font-serif text-foreground mb-2">{watch.name}</h3>
                  <p className="text-sm font-sans font-light text-foreground/60 mb-6 flex-grow">{watch.description}</p>
                  <div className="flex flex-col items-start gap-4 mt-auto">
                    <span className="text-primary font-serif text-xl tracking-wider">{watch.price}</span>
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:bg-primary hover:text-background rounded-none tracking-widest uppercase text-xs py-5 transition-all duration-300 group-hover:border-primary"
                      data-testid={`btn-enquire-${watch.id}`}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-24 pt-16 border-t border-white/5"
          >
            <p className="text-foreground/50 font-sans tracking-widest uppercase text-xs mb-3">Looking for something unique?</p>
            <h3 className="text-3xl font-serif text-foreground mb-6">Request a Bespoke Commission</h3>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-background rounded-none tracking-[0.2em] uppercase text-xs px-10 py-6 transition-all duration-500"
              onClick={() => setLocation("/")}
              data-testid="btn-bespoke-enquiry"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
