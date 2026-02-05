import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, MessageCircle, ArrowRight, Star, Globe, ShoppingBag, TrendingUp, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const phoneNumber = "917727900889";

  const allPackages = [
    {
      category: "Website Development",
      icon: Globe,
      packages: [
        {
          name: "Starter Business Website",
          price: "₹5,000",
          period: "one-time",
          features: [
            "3-5 Page Professional Website",
            "Mobile & Desktop Optimized",
            "Contact Form + WhatsApp",
            "Google Maps + Click-to-Call",
            "Basic SEO Setup",
            "5-7 Days Delivery",
            "1 Week Post-Launch Support",
          ],
          link: "/website-services",
        },
      ],
    },
    {
      category: "E-commerce Stores",
      icon: ShoppingBag,
      packages: [
        {
          name: "Store Launch",
          price: "₹25,000",
          period: "one-time",
          features: [
            "Conversion-Ready Shopify Store",
            "Up to 30 Products",
            "Payment Gateway Setup",
            "Shipping & Tax Configuration",
            "Instagram & WhatsApp Selling",
            "7-10 Days Delivery",
            "30-Min Training Included",
          ],
          link: "/store-services",
        },
        {
          name: "Pro Store Launch",
          price: "₹30,000",
          period: "one-time",
          features: [
            "Everything in Store Launch",
            "Advanced Animations & Effects",
            "Up to 40 Products",
            "Premium Conversion UI/UX",
            "Storytelling Brand Layout",
            "Priority Support",
          ],
          link: "/store-services",
          highlighted: true,
          badge: "Best Value",
        },
      ],
    },
    {
      category: "Digital Marketing",
      icon: TrendingUp,
      packages: [
        {
          name: "Meta Ads Starter",
          price: "₹2,000",
          period: "/month",
          features: [
            "1 Campaign Setup",
            "1 Audience Targeting",
            "Basic Optimization",
            "7-Day Performance Report",
          ],
          link: "/marketing-services",
        },
        {
          name: "Meta Ads Growth",
          price: "₹5,000",
          period: "/month",
          features: [
            "Up to 3 Campaigns",
            "Multiple Audiences",
            "A/B Testing",
            "Retargeting",
            "Weekly Reports",
          ],
          link: "/marketing-services",
        },
      ],
    },
    {
      category: "Instagram Management",
      icon: Instagram,
      packages: [
        {
          name: "Instagram Growth",
          price: "₹8,000 - ₹12,000",
          period: "/month",
          features: [
            "15 Static Posts/Month",
            "5 Reels with Editing",
            "Content Calendar",
            "CTA Captions",
            "Bio Optimization",
            "Hashtag Strategy",
          ],
          link: "/marketing-services",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-6">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 font-display">
              Simple, Honest <span className="text-gradient-green">Pricing</span>
            </h1>
            <p className="text-pure-white/70 text-lg max-w-2xl mx-auto">
              No hidden fees, no surprises. Choose the service that fits your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Packages */}
      {allPackages.map((category, catIndex) => (
        <section
          key={category.category}
          className={`py-20 ${catIndex % 2 === 0 ? "bg-white" : "bg-dark-blue"}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                catIndex % 2 === 0 ? "bg-growth-green/10" : "bg-growth-green/20"
              }`}>
                <category.icon className="w-6 h-6 text-growth-green" />
              </div>
              <h2 className={`text-2xl md:text-3xl font-bold font-display ${
                catIndex % 2 === 0 ? "text-dark-blue" : "text-pure-white"
              }`}>
                {category.category}
              </h2>
            </motion.div>

            <div className={`grid gap-6 ${
              category.packages.length === 1 
                ? "max-w-lg mx-auto" 
                : category.packages.length === 2 
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" 
                  : "grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
            }`}>
              {category.packages.map((pkg, pkgIndex) => {
                const isLightBg = catIndex % 2 === 0;
                const message = `Hi! I'm interested in the ${pkg.name} package.`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                return (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pkgIndex * 0.1 }}
                    className={`relative ${pkg.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="px-4 py-1 bg-growth-green text-pure-white text-sm font-bold rounded-full shadow-glow flex items-center gap-2">
                          <Star className="w-4 h-4 fill-current" />
                          {pkg.badge}
                        </span>
                      </div>
                    )}

<div
                      className={`h-full rounded-3xl p-8 transition-all duration-300 hover:shadow-lg ${
                        pkg.highlighted
                          ? "bg-dark-blue/70 text-pure-white shadow-xl best-value-badge"
                          : isLightBg
                            ? "bg-gray-50 text-dark-blue border border-gray-100"
                            : "glass-card text-pure-white"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2 font-display">{pkg.name}</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-bold font-display">{pkg.price}</span>
                        <span className={`text-sm ${
                          pkg.highlighted || !isLightBg ? "text-pure-white/60" : "text-dark-blue/60"
                        }`}>
                          {" "}{pkg.period}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-growth-green flex-shrink-0 mt-0.5" />
                            <span className={`text-sm ${
                              pkg.highlighted || !isLightBg ? "text-pure-white/80" : "text-dark-blue/70"
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col gap-2">
                        <Button
                          variant={pkg.highlighted || !isLightBg ? "hero" : "outline"}
                          className="w-full"
                          onClick={() => window.open(whatsappUrl, "_blank")}
                        >
                          <MessageCircle className="w-4 h-4" />
                          Get Started
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`w-full ${
                            pkg.highlighted || !isLightBg ? "text-pure-white/60 hover:text-pure-white" : "text-dark-blue/60 hover:text-dark-blue"
                          }`}
                          asChild
                        >
                          <Link to={pkg.link}>
                            Learn More <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ / Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6 font-display">
              Have Questions?
            </h2>
            <p className="text-dark-blue/60 mb-8">
              We believe in transparent communication. Get in touch and we'll help you choose the right package for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => {
                  const message = "Hi! I have some questions about your pricing.";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Us
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Page
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Pricing;
