import { motion } from "framer-motion";
import waloraFullLogo from "@assets/file_000000008a807206879c3f60eab71a86_1778955989973.png";

export default function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      data-testid="splash-screen"
    >
      <div className="flex flex-col items-center">
        <motion.img
          src={waloraFullLogo}
          alt="WALORA Timepieces"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-16 md:h-20 object-contain mb-8 filter brightness-0 invert sepia-[.3] hue-rotate-[10deg] saturate-[3] contrast-[1.2]" 
          // Note: using CSS filters to make the logo look somewhat golden if it's not already
        />
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="h-[1px] bg-primary w-full max-w-[200px]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 text-primary tracking-[0.2em] uppercase text-xs md:text-sm font-light"
        >
          Since the beginning of time
        </motion.p>
      </div>
    </motion.div>
  );
}
