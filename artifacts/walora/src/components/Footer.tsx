import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import waloraFullLogo from "@assets/file_000000008a807206879c3f60eab71a86_1778955989973.png";

export default function Footer() {
  const [, setLocation] = useLocation();

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

        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-sans tracking-widest uppercase text-foreground/50">
          <button onClick={() => scrollTo("hero")} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => setLocation("/timepieces")} className="hover:text-primary transition-colors">Collections</button>
          <button onClick={() => scrollTo("craftsmanship")} className="hover:text-primary transition-colors">Craftsmanship</button>
          <button onClick={() => scrollTo("heritage")} className="hover:text-primary transition-colors">Heritage</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
        </div>

        {/* Social / Contact Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://wa.me/923195710757"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            data-testid="footer-link-whatsapp"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4 text-foreground/50 group-hover:text-primary" />
          </a>
          <a
            href="https://instagram.com/walora.official"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            data-testid="footer-link-instagram"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4 text-foreground/50 group-hover:text-primary" />
          </a>
          <a
            href="mailto:waloratimepieces@gmail.com"
            className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            data-testid="footer-link-email"
            aria-label="Email"
          >
            <Mail className="h-4 w-4 text-foreground/50 group-hover:text-primary" />
          </a>
        </div>

        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

        <p className="text-foreground/40 font-sans text-xs">
          © 2026 WALORA Timepieces by Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
