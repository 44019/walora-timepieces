import { motion } from "framer-motion";
import waloraFullLogo from "@assets/file_000000008a807206879c3f60eab71a86_1778955989973.png";
import wIcon from "@assets/logo_1778956539317.png";

export default function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
      data-testid="splash-screen"
    >
      {/* Subtle radial glow behind logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* W Icon mark — appears first */}
        <motion.img
          src={wIcon}
          alt="W"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-12 md:h-14 w-auto object-contain mb-8 brightness-0 invert"
        />

        {/* Full WALORA TIMEPIECES wordmark */}
        <motion.img
          src={waloraFullLogo}
          alt="WALORA Timepieces"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
        />

        {/* Gold divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-40 md:w-56 bg-primary mt-7 mb-6 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.15em" }}
          animate={{ opacity: 0.7, letterSpacing: "0.35em" }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="text-primary text-[10px] md:text-xs uppercase font-sans font-light tracking-[0.35em]"
        >
          Since the Beginning of Time
        </motion.p>
      </div>

      {/* Bottom fade strip for elegant exit */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </motion.div>
  );
}
