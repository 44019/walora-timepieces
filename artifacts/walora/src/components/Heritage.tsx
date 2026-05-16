import { motion } from "framer-motion";

export default function Heritage() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-32 overflow-hidden bg-background" id="heritage">
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden opacity-[0.02]">
        <h2 className="text-[15vw] font-serif text-white whitespace-nowrap">EST. BY EXCELLENCE</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="mx-auto w-px h-16 bg-primary mb-12"></div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-snug">
            "A watch is not merely worn; it is inherited. We forge timepieces that deserve to be passed down through generations."
          </h2>
          
          <p className="text-primary font-sans tracking-[0.2em] uppercase text-sm mb-12">
            The Walora Promise
          </p>

          <p className="text-foreground/70 font-sans font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            From the bustling heart of the Middle East to the serene snow-capped peaks of the Swiss Alps, our heritage is a bridge between two worlds of excellence. We celebrate the majesty of Arabic prestige while embracing the rigorous mechanics of European horology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
