import { motion } from "framer-motion";
import waloraFullLogo from "@assets/file_000000008a807206879c3f60eab71a86_1778955989973.png";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-20 border-t border-white/5 text-center flex flex-col items-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src={waloraFullLogo} 
          alt="WALORA Timepieces" 
          className="h-12 md:h-16 object-contain mb-8 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" 
        />
        
        <p className="text-primary tracking-[0.2em] uppercase text-xs md:text-sm font-light mb-12">
          Since the beginning of time
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm font-sans tracking-widest uppercase text-foreground/50">
          <button onClick={() => scrollTo("hero")} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollTo("timepieces")} className="hover:text-primary transition-colors">Collections</button>
          <button onClick={() => scrollTo("craftsmanship")} className="hover:text-primary transition-colors">Craftsmanship</button>
          <button onClick={() => scrollTo("heritage")} className="hover:text-primary transition-colors">Heritage</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
        </div>

        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

        <p className="text-foreground/40 font-sans text-xs">
          © 2026 WALORA Timepieces by Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
