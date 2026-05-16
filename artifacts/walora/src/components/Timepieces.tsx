import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

export default function Timepieces() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-white/5 relative z-10" id="timepieces">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-4"
          >
            Available Timepieces
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary font-serif italic text-xl"
          >
            Each piece is a statement. Choose yours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timepieces.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative bg-card border border-white/5 overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={watch.image} 
                  alt={watch.name} 
                  className="w-full h-full object-contain relative z-0 transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative z-20 bg-card group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-foreground mb-2">{watch.name}</h3>
                <p className="text-sm font-sans font-light text-foreground/60 mb-6 flex-grow">{watch.description}</p>
                <div className="flex flex-col items-start gap-6 mt-auto">
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
      </div>
    </section>
  );
}
