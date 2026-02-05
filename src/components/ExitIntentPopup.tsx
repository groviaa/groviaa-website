import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const phoneNumber = "917727900889";
  const message = "Hi! I'd like to schedule my FREE 30-minute guidance call.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-dark-blue/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-gradient-to-br from-card to-secondary rounded-3xl p-8 shadow-elevated border border-white/10"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-pure-white/40 hover:text-pure-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <motion.div
              className="w-20 h-20 mx-auto mb-6 bg-growth-green/20 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-10 h-10 text-growth-green" />
            </motion.div>

            {/* Content */}
            <h3 className="text-2xl md:text-3xl font-bold text-pure-white text-center mb-3 font-display">
              Wait! Before You Go...
            </h3>
            <p className="text-pure-white/70 text-center mb-6">
              Get a <span className="text-growth-green font-semibold">FREE 30-minute guidance call</span> with 
              our digital growth experts. No strings attached!
            </p>

            {/* Benefits */}
            <ul className="space-y-2 mb-8">
              {[
                "Discuss your business goals",
                "Get personalized strategy advice",
                "Learn about the best solutions for you",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-pure-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full bg-growth-green/20 flex items-center justify-center">
                    <span className="w-2 h-2 bg-growth-green rounded-full" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <Phone size={18} />
                Book Free Call on WhatsApp
              </Button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-pure-white/50 text-sm hover:text-pure-white transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
