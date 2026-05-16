import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Received",
        description: "Our concierge will contact you shortly to arrange your consultation.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-background border-t border-white/5 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Book a Private Consultation</h2>
            <p className="text-foreground/70 font-sans font-light text-lg mb-12">
              Acquiring a WALORA is a personal journey. We invite you to schedule a private viewing at our boutique or a virtual consultation with our horology experts.
            </p>

            <div className="space-y-8 font-sans font-light">
              <div>
                <p className="text-primary tracking-widest uppercase text-xs mb-2">Boutique</p>
                <p className="text-foreground text-lg">The Dubai Mall, Fashion Avenue<br />Dubai, United Arab Emirates</p>
              </div>
              
              <div>
                <p className="text-primary tracking-widest uppercase text-xs mb-2">Concierge</p>
                <p className="text-foreground text-lg">+971 50 000 0000</p>
              </div>

              <div>
                <p className="text-primary tracking-widest uppercase text-xs mb-2">Email</p>
                <p className="text-foreground text-lg">contact@waloratimepieces.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 md:p-12 border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-foreground/60">Full Name</label>
                <Input 
                  id="name" 
                  required 
                  className="bg-background border-white/10 rounded-none focus-visible:ring-primary h-12 text-foreground" 
                  placeholder="e.g. Tariq Al-Mansouri"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-foreground/60">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-background border-white/10 rounded-none focus-visible:ring-primary h-12 text-foreground" 
                    placeholder="name@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-foreground/60">Phone Number</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    className="bg-background border-white/10 rounded-none focus-visible:ring-primary h-12 text-foreground" 
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-foreground/60">Your Message</label>
                <Textarea 
                  id="message" 
                  required 
                  className="bg-background border-white/10 rounded-none focus-visible:ring-primary min-h-[120px] text-foreground resize-none" 
                  placeholder="Tell us which timepiece you are interested in..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-background rounded-none tracking-widest uppercase py-6 transition-all duration-300"
                data-testid="btn-submit-enquiry"
              >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
