import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center max-w-xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">The Brand Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 text-foreground">
              Time Is Not Just Measured.<br />
              <span className="italic text-primary">It Is Mastered.</span>
            </h2>
            
            <div className="space-y-6 text-foreground/70 font-sans font-light leading-relaxed text-lg">
              <p>
                At WALORA, we do not merely build watches; we forge legacies. Born from an uncompromising dedication to perfection, each timepiece is a testament to the Arabic tradition of excellence combined with unparalleled Swiss precision.
              </p>
              <p>
                In a world that rushes, true luxury is the patience to craft perfection. It takes hundreds of hours, masterful hands, and the world's rarest materials to create a WALORA. For the connoisseur who understands that a watch is not just an instrument of time, but a reflection of permanence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 z-0"></div>
            <div className="absolute inset-0 z-10 bg-card overflow-hidden">
              <img 
                src="/images/about.png" 
                alt="WALORA Lifestyle" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
