import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const timepieces = [
  {
    id: "rolex-datejust-black",
    brand: "Rolex",
    name: "Datejust",
    variant: "Black Honeycomb",
    price: "Rs. 3,500",
    image: "/watches/rolex-datejust-black.jpg",
    dial: "Black honeycomb pattern",
    case: "41mm stainless steel",
    bracelet: "Silver Jubilee bracelet",
    movement: "Automatic",
    bezel: "Fluted stainless steel",
    features: ["Date display", "Scratch-resistant sapphire crystal", "Water resistant 100m", "COSC certified chronometer"],
    description: "The Datejust in black honeycomb is a bold yet refined statement. The intricate hexagonal texture on the dial catches light with every movement of the wrist, while the polished Jubilee bracelet drapes with effortless elegance."
  },
  {
    id: "rolex-datejust-diamond",
    brand: "Rolex",
    name: "Datejust",
    variant: "Diamond Indices",
    price: "Rs. 3,300",
    image: "/watches/rolex-datejust-diamond.jpg",
    dial: "Dark dial with diamond hour markers",
    case: "41mm stainless steel",
    bracelet: "Jubilee bracelet",
    movement: "Automatic",
    bezel: "Fluted stainless steel",
    features: ["Diamond-set hour indices", "Date display", "Sapphire crystal", "COSC chronometer"],
    description: "Diamond-set hour indices elevate this Datejust into the realm of pure luxury. Each marker catches the light with a quiet brilliance — a watch that speaks in whispers, not shouts."
  },
  {
    id: "ap-royal-oak-blue",
    brand: "Audemars Piguet",
    name: "Royal Oak",
    variant: "Blue Tapisserie",
    price: "Rs. 3,500",
    image: "/watches/ap-royal-oak-blue.jpg",
    dial: "Blue tapisserie pattern",
    case: "Stainless steel, octagonal",
    bracelet: "Integrated steel bracelet",
    movement: "Automatic",
    bezel: "Octagonal with exposed screws",
    features: ["Iconic octagonal case", "Tapisserie dial pattern", "Date at 3 o'clock", "Integrated bracelet design"],
    description: "The Royal Oak rewrote the rules of luxury watchmaking. Its audacious octagonal case, signature screws and integrated bracelet remain the most copied silhouette in horology — yet never equalled. In blue, it is simply breathtaking."
  },
  {
    id: "patek-nautilus-blue",
    brand: "Patek Philippe",
    name: "Nautilus",
    variant: "Blue Dial",
    price: "Rs. 3,200",
    image: "/watches/patek-nautilus-blue.jpg",
    dial: "Dark blue horizontal embossed",
    case: "Stainless steel, rounded octagonal",
    bracelet: "Integrated steel bracelet",
    movement: "Automatic",
    bezel: "Polished steel",
    features: ["Horizontal embossed dial", "Luminescent hands & indices", "Date display", "Water resistant 120m"],
    description: "The Nautilus is the crown jewel of sports-luxury watches. Born in 1976, its porthole-inspired case and embossed horizontal dial are instantly recognisable to every connoisseur. To own one is to hold a piece of horological history."
  },
  {
    id: "rolex-datejust-diamond-bezel",
    brand: "Rolex",
    name: "Datejust",
    variant: "Diamond Bezel Two-Tone",
    price: "Rs. 3,600",
    image: "/watches/rolex-datejust-diamond-bezel.jpg",
    dial: "Silver honeycomb pattern",
    case: "Two-tone steel & yellow gold",
    bracelet: "Two-tone Jubilee bracelet",
    movement: "Automatic",
    bezel: "Diamond-set bezel",
    features: ["Full diamond bezel", "Two-tone gold & steel", "Honeycomb silver dial", "Date display", "COSC certified"],
    description: "The pinnacle of the Datejust range. A full diamond-set bezel crowns a silver honeycomb dial, flanked by a two-tone gold and steel Jubilee bracelet. Opulence and precision in perfect measure."
  },
  {
    id: "rolex-gmt-master",
    brand: "Rolex",
    name: "GMT Master II",
    variant: "Two-Tone",
    price: "Rs. 3,800",
    image: "/watches/rolex-gmt-master.jpg",
    dial: "Black dial with GMT hand",
    case: "Two-tone steel & yellow gold",
    bracelet: "Two-tone Jubilee bracelet",
    movement: "Automatic",
    bezel: "Bi-directional rotating 24h bezel",
    features: ["Dual time zone", "GMT hand", "Rotating bezel with 24hr scale", "Date display", "Water resistant 100m"],
    description: "The GMT Master II was built for those who cross meridians. Its distinctive 24-hour bezel reads two time zones simultaneously, while the two-tone case marries professional tool-watch DNA with unmistakable prestige."
  },
  {
    id: "tissot-prx-blue",
    brand: "Tissot",
    name: "PRX",
    variant: "Ice Blue",
    price: "Rs. 3,200",
    image: "/watches/tissot-prx-blue.jpg",
    dial: "Ice blue sunray",
    case: "Stainless steel, integrated",
    bracelet: "Integrated steel bracelet",
    movement: "Quartz",
    bezel: "Polished integrated steel",
    features: ["Sunray brushed dial", "Integrated bracelet design", "Date at 3 o'clock", "Sapphire crystal glass"],
    description: "Swiss precision meets minimalist elegance. The PRX in ice blue is a masterclass in restrained luxury — the sunray dial shifts from pale azure to deep sky as the light moves. A refined everyday companion."
  },
  {
    id: "cartier-tank-green",
    brand: "Cartier",
    name: "Tank",
    variant: "Forest Green",
    price: "Rs. 3,000",
    image: "/watches/cartier-tank-green.jpg",
    dial: "Deep forest green",
    case: "Stainless steel, rectangular",
    bracelet: "Green alligator leather strap",
    movement: "Quartz",
    bezel: "Polished steel",
    features: ["Iconic rectangular Tank case", "Sword-shaped gold hands", "Emerald green dial", "Gold crown"],
    description: "The Cartier Tank has adorned the wrists of royalty, presidents, and artists since 1917. In forest green with matching alligator leather, this piece is as much a jewel as it is a timepiece."
  },
  {
    id: "cartier-tank-navy",
    brand: "Cartier",
    name: "Tank",
    variant: "Midnight Navy",
    price: "Rs. 3,000",
    image: "/watches/cartier-tank-navy.jpg",
    dial: "Midnight navy blue",
    case: "Stainless steel, rectangular",
    bracelet: "Navy alligator leather strap",
    movement: "Quartz",
    bezel: "Polished steel",
    features: ["Rectangular Tank silhouette", "Sword-shaped gold hands", "Deep navy dial", "Gold crown"],
    description: "Deep midnight navy lends this Tank a commanding, oceanic calm. Paired with a matching navy alligator strap, it is the definition of understated authority — the kind of watch you notice only when you look away."
  },
  {
    id: "cartier-tank-black-gold",
    brand: "Cartier",
    name: "Tank",
    variant: "Noir Doré",
    price: "Rs. 3,000",
    image: "/watches/cartier-tank-black-gold.jpg",
    dial: "Matte black",
    case: "Gold-plated, rectangular",
    bracelet: "Black leather strap",
    movement: "Quartz",
    bezel: "Gold-plated",
    features: ["Full gold-plated case", "Sword-shaped gold hands", "Matte black dial", "Gold crown"],
    description: "Black and gold — the eternal combination of power and refinement. The Noir Doré Tank wears its gold case with complete confidence against a matte black dial. Few watches command a room quite like this."
  },
  {
    id: "cartier-tank-white",
    brand: "Cartier",
    name: "Tank Solo",
    variant: "Classic White",
    price: "Rs. 3,000",
    image: "/watches/cartier-tank-white.jpg",
    dial: "White with Roman numerals",
    case: "Stainless steel, rectangular",
    bracelet: "Burgundy alligator leather",
    movement: "Quartz",
    bezel: "Polished steel",
    features: ["Roman numeral dial", "Classic sword hands", "Burgundy alligator strap", "Deployant clasp"],
    description: "The purest expression of the Tank. White Roman numerals, blue sword hands, and burgundy alligator leather — this is the watch Coco Chanel wore, the watch Jackie Kennedy wore. Timeless is not a word. It is this watch."
  },
  {
    id: "cartier-ballon-bleu",
    brand: "Cartier",
    name: "Ballon Bleu",
    variant: "Rose Gold Chronograph",
    price: "Rs. 6,000",
    image: "/watches/cartier-ballon-bleu.jpg",
    dial: "Black with Roman numerals",
    case: "Rose gold-plated, round",
    bracelet: "Brown alligator leather",
    movement: "Automatic chronograph",
    bezel: "Rose gold, cabochon crown",
    features: ["Chronograph complication", "Rose gold plating", "Signature blue sapphire crown", "Roman numerals", "Sub-dials"],
    description: "The Ballon Bleu is Cartier's most seductive creation — its perfectly spherical case and the signature blue sapphire crown are unmistakeable. In rose gold with a chronograph, it is our most coveted piece."
  },
  {
    id: "patek-nautilus-black",
    brand: "Patek Philippe",
    name: "Nautilus",
    variant: "Black Leather",
    price: "Rs. 3,000",
    image: "/watches/patek-nautilus-black.jpg",
    dial: "Black horizontal embossed",
    case: "Stainless steel, rounded octagonal",
    bracelet: "Black leather strap",
    movement: "Automatic",
    bezel: "Polished steel",
    features: ["Horizontal embossed dial", "Luminescent hands & indices", "Date display", "Black leather strap option"],
    description: "The Nautilus on black leather takes on a different character entirely — sleeker, more refined, almost formal. The contrast of the steel case against the deep black strap gives this icon a new dimension of elegance."
  }
];

const brandColors: Record<string, string> = {
  "Rolex": "text-emerald-400",
  "Audemars Piguet": "text-blue-400",
  "Patek Philippe": "text-indigo-400",
  "Tissot": "text-sky-400",
  "Cartier": "text-rose-400",
};

export default function TimepiecesPage() {
  const [, setLocation] = useLocation();
  const [selected, setSelected] = useState<typeof timepieces[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const brands = ["All", ...Array.from(new Set(timepieces.map(w => w.brand)))];
  const filtered = filter === "All" ? timepieces : timepieces.filter(w => w.brand === filter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-40 pb-16 border-b border-white/5">
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
              Rolex · Patek Philippe · Audemars Piguet · Cartier · Tissot
            </motion.p>
          </div>

          {/* Brand Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setFilter(brand)}
                className={`px-5 py-2 text-xs tracking-widest uppercase font-sans border transition-all duration-300 ${
                  filter === brand
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-white/10 text-foreground/50 hover:border-primary/40 hover:text-foreground"
                }`}
                data-testid={`filter-${brand.toLowerCase().replace(/\s/g, "-")}`}
              >
                {brand}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((watch, index) => (
                <motion.div
                  key={watch.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group bg-card border border-white/5 overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,168,76,0.08)] cursor-pointer"
                  onClick={() => setSelected(watch)}
                  data-testid={`card-watch-${watch.id}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={watch.image}
                      alt={`${watch.brand} ${watch.name}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-xs font-sans tracking-widest uppercase ${brandColors[watch.brand] || "text-primary"}`}>
                        {watch.brand}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif text-foreground mb-1">{watch.name}</h3>
                    <p className="text-sm font-sans text-foreground/50 mb-4 flex-grow">{watch.variant}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-primary font-serif text-lg">{watch.price}</span>
                      <span className="text-xs text-foreground/30 uppercase tracking-widest font-sans group-hover:text-primary transition-colors duration-300">View Details</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0d0d0d] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto md:min-h-[500px] bg-black overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Details */}
                <div className="p-8 md:p-10 flex flex-col relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-6 right-6 text-foreground/40 hover:text-primary transition-colors"
                    data-testid="btn-close-detail"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <span className={`text-xs font-sans tracking-[0.3em] uppercase mb-3 ${brandColors[selected.brand] || "text-primary"}`}>
                    {selected.brand}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-1">{selected.name}</h2>
                  <p className="text-foreground/50 font-sans text-sm mb-6">{selected.variant}</p>
                  <div className="h-px w-16 bg-primary mb-6" />

                  <p className="text-foreground/70 font-sans font-light text-sm leading-relaxed mb-8">
                    {selected.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-3 mb-8">
                    {[
                      { label: "Dial", value: selected.dial },
                      { label: "Case", value: selected.case },
                      { label: "Bracelet", value: selected.bracelet },
                      { label: "Movement", value: selected.movement },
                      { label: "Bezel", value: selected.bezel },
                    ].map(spec => (
                      <div key={spec.label} className="flex gap-4 text-sm">
                        <span className="text-primary/70 uppercase tracking-widest text-xs font-sans w-20 shrink-0 pt-0.5">{spec.label}</span>
                        <span className="text-foreground/80 font-sans">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <p className="text-primary/70 uppercase tracking-widest text-xs font-sans mb-3">Features</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.features.map(f => (
                        <span key={f} className="text-xs font-sans text-foreground/60 border border-white/10 px-3 py-1">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-serif text-2xl">{selected.price}</span>
                    </div>
                    <Button
                      className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-background rounded-none tracking-[0.2em] uppercase text-xs py-6 transition-all duration-300"
                      onClick={() => {
                        setSelected(null);
                        setLocation("/");
                        setTimeout(() => {
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }}
                      data-testid={`btn-enquire-${selected.id}`}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
