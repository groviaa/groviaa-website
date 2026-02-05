import { motion } from "framer-motion";
import logoFull from "@/assets/Loader.png";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-blue"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-growth-green/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{ x: "-50%", y: "-50%" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full border border-growth-green/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0, 0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          style={{ x: "-50%", y: "-50%" }}
        />
      </div>

      {/* Logo Container */}
      <motion.div
        className="relative z-10 mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          animate={{ 
            filter: ["drop-shadow(0 0 20px rgba(57, 181, 74, 0.3))", "drop-shadow(0 0 40px rgba(57, 181, 74, 0.6))", "drop-shadow(0 0 20px rgba(57, 181, 74, 0.3))"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={logoFull}
            alt="Groviaa"
            className="w-64 md:w-80 h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <div className="relative w-64 md:w-80">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-growth-green to-growth-green/70 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
          />
        </div>
        
        {/* Loading Text */}
        <motion.p
          className="text-pure-white/60 text-sm mt-4 text-center font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Growing your digital presence...
        </motion.p>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-growth-green/40 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 20,
            opacity: 0 
          }}
          animate={{ 
            y: -20, 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            delay: i * 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;
