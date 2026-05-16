import { motion } from "framer-motion";
import { Settings, Diamond, ShieldCheck, PenTool } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Swiss Mechanical Movement",
    description: "Hand-assembled complications ensuring lifetime precision."
  },
  {
    icon: Diamond,
    title: "Sapphire Crystal Glass",
    description: "Flawless clarity with anti-reflective, scratch-proof durability."
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    description: "An unconditional guarantee on our uncompromising quality."
  },
  {
    icon: PenTool,
    title: "Bespoke Engraving",
    description: "Personalize your legacy with custom artisanal detailing."
  }
];

export default function Craftsmanship() {
  return (
    <section className="py-24 bg-card border-y border-white/5 relative z-10" id="craftsmanship">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-16 w-16 mb-6 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  <Icon strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm font-sans font-light text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
