import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-growth-green/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,181,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,181,74,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* SEO-Optimized Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white leading-tight mb-6 font-display"
          >
            Professional Website Development &{" "}
            <span className="text-gradient-green">Digital Marketing</span>
            <br />
            for Growing Businesses
          </motion.h1>

          {/* Improved Subheadline */}
          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-lg md:text-xl text-pure-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
>
  We design high-converting{" "}
  <a href="/website-services" className="text-inherit underline-offset-4 hover:underline">
    business websites
  </a>, powerful{" "}
  <a href="/store-services" className="text-inherit underline-offset-4 hover:underline">
    e-commerce stores
  </a>, and{" "}
  <a href="/marketing-services" className="text-inherit underline-offset-4 hover:underline">
    performance-driven marketing campaigns
  </a>{" "}
  that help Indian businesses attract more customers and grow faster online.
</motion.p>


          {/* CTA Buttons (Lead-first order) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">
                <Store className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </Button>

            <Button variant="hero" size="xl" asChild>
              <Link to="/pricing">
                <TrendingUp className="w-5 h-5" />
                View Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-pure-white/60"
          >
            {[
              "Clear & Transparent Pricing",
              "No Fake Promises",
              "Free Business Consultation",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-growth-green rounded-full" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-blue to-transparent" />
    </section>
  );
};

export default Hero;
