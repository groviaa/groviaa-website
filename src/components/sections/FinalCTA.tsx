import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const phoneNumber = "917727900889";
  const message = "Hi Groviaa! I'm interested in growing my business online.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section data-light-section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-growth-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-dark-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-blue rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-growth-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-growth-green/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-8 bg-growth-green/10 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-10 h-10 text-growth-green" />
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mb-4 font-display">
                Ready to <span className="text-gradient-green">Grow Your Business?</span>
              </h2>
              <p className="text-pure-white/70 text-lg max-w-2xl mx-auto mb-10">
                Let's discuss your goals and find the perfect solution for your business. 
                Get started with a free consultation today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5" />
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Text */}
              <p className="text-pure-white/40 text-sm mt-8">
                No commitment required • Free 30-min consultation • Built for Indian businesses
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
