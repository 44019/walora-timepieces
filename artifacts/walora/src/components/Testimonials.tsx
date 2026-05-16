import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tariq Al-Mansouri",
    role: "Collector",
    text: "The WALORA Noir feels heavier than just metal and glass; it feels like history on my wrist. The craftsmanship easily rivals houses that have been around for a century.",
    rating: 5
  },
  {
    name: "E. Rothschild",
    role: "Horology Enthusiast",
    text: "I was captivated by the Aurum's champagne dial. In the sunlight, it possesses a warmth and depth that I have rarely seen outside of the world's most exclusive ateliers.",
    rating: 5
  },
  {
    name: "S. Al-Fayed",
    role: "Connoisseur",
    text: "Uncompromising quality. The movement is flawless, and the bespoke engraving they offered made this piece an heirloom the moment it arrived in its velvet case.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card relative z-10" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">The Connoisseur's Word</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-10 border border-white/5 bg-background relative"
            >
              <div className="absolute top-6 right-8 text-primary/20 text-6xl font-serif font-bold italic leading-none select-none">"</div>
              
              <div className="flex text-primary mb-6 space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground/80 font-sans font-light italic leading-relaxed mb-8 relative z-10">
                {t.text}
              </p>
              
              <div className="mt-auto">
                <h4 className="text-foreground font-serif text-lg">{t.name}</h4>
                <p className="text-primary text-xs uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
