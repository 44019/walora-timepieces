import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import waloraIcon from "@assets/logo_1778956539317.png";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Collections", id: "timepieces" },
    { name: "Craftsmanship", id: "craftsmanship" },
    { name: "Heritage", id: "heritage" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent ${
          scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-4" : "bg-transparent py-6"
        }`}
        data-testid="main-navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} role="button" tabIndex={0}>
            <img src={waloraIcon} alt="Walora" className="h-10 w-auto filter brightness-0 invert" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-sans tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300"
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 rounded-none tracking-widest uppercase text-xs px-6 py-5"
              onClick={() => scrollTo("contact")}
              data-testid="btn-book-consultation"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="btn-mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-background transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        data-testid="mobile-navigation"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button
              className="text-foreground hover:text-primary transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="btn-close-menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            <img src={waloraIcon} alt="Walora" className="h-16 w-auto filter brightness-0 invert mb-8" />
            
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-serif text-foreground hover:text-primary transition-colors duration-300"
                data-testid={`mobile-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </button>
            ))}
            
            <div className="pt-8">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-background rounded-none tracking-widest uppercase text-sm px-8 py-6"
                onClick={() => scrollTo("contact")}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
