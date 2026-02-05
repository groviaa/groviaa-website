import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { 
  Check, 
  ShoppingBag, 
  CreditCard, 
  Package, 
  Truck, 
  MessageCircle, 
  Instagram,
  Search,
  Palette,
  Sparkles,
  ArrowRight,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";

const StoreServices = () => {
    const pageUrl = "https://groviaa.in/ecommerce-development";
  const pageTitle = "E-commerce Website Development Company in India | Online Store Experts - Groviaa Web";
  const pageDescription =
    "Groviaa Web builds high-converting e-commerce websites and online stores with secure payments, mobile optimization, and SEO-ready structure to grow your online sales.";

  const phoneNumber = "917727900889";

  const packages = [
    {
      name: "Store Launch",
      price: "₹25,000",
      description: "Complete Shopify store setup for businesses ready to sell online",
      features: [
        "Conversion-Ready Shopify Store",
        "Up to 30 Products Uploaded",
        "Responsive Mobile Design",
        "Payment Gateway Integration",
        "Login, Cart & Order Tracking",
        "Shipping & Tax Setup",
        "Instagram & WhatsApp Selling",
        "Basic SEO Optimization",
        "4 Revisions Included",
        "7-10 Days Delivery",
        "7 Days Post-Launch Support",
        "30-Min Store Training",
      ],
      highlighted: false,
    },
    {
      name: "Pro Store Launch",
      price: "₹30,000",
      description: "Premium store with advanced animations and conversion-focused design",
      features: [
        "Everything in Store Launch",
        "Advanced Motion & Animations",
        "Interactive Banners & Sections",
        "Smooth Page Transitions",
        "Up to 40 Products Uploaded",
        "Premium Conversion-Focused UI/UX",
        "Storytelling Brand Layout",
        "Custom Theme Customization",
        "Priority Support Access",
        "Extended Post-Launch Help",
      ],
      highlighted: true,
      badge: "Best Value",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
                  <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://groviaa.in/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://groviaa.in/og-image.png" />

        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "E-commerce Website Development",
            provider: {
              "@type": "Organization",
              name: "Groviaa Web",
              url: "https://groviaa.in",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            description:
              "Custom e-commerce website development including product management, secure payment gateways, mobile optimization, and SEO-ready architecture.",
          })}
        </script>
      </Helmet>


      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-6">
              E-commerce Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 font-display">
              Launch Your <span className="text-gradient-green">Shopify Store</span>
            </h1>
            <p className="text-pure-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Conversion-ready e-commerce stores designed to turn visitors into customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-dark-blue border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShoppingBag, label: "Shopify Platform" },
              { icon: CreditCard, label: "Payment Ready" },
              { icon: Package, label: "Inventory Sync" },
              { icon: Truck, label: "Shipping Setup" },
              { icon: Instagram, label: "Social Selling" },
              { icon: MessageCircle, label: "WhatsApp Orders" },
              { icon: Search, label: "SEO Optimized" },
              { icon: Palette, label: "Custom Design" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-3 p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-growth-green" />
                </div>
                <span className="text-pure-white/70 text-sm text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4 font-display">
              Choose Your <span className="text-gradient-green">Package</span>
            </h2>
            <p className="text-dark-blue/60 max-w-2xl mx-auto">
              Select the perfect e-commerce solution for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => {
              const message = `Hi! I'm interested in the ${pkg.name} package.`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${pkg.highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}
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
                    className={`h-full rounded-3xl p-8 ${
                      pkg.highlighted
                        ? "bg-dark-blue/70 text-pure-white shadow-xl best-value-badge"
                        : "bg-gray-50 text-dark-blue border border-gray-100"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-2 font-display">{pkg.name}</h3>
                    <p className={`text-sm mb-6 ${pkg.highlighted ? "text-pure-white/60" : "text-dark-blue/60"}`}>
                      {pkg.description}
                    </p>

                    <div className="mb-8">
                      <span className="text-4xl font-bold font-display">{pkg.price}</span>
                      <span className={`text-sm ${pkg.highlighted ? "text-pure-white/60" : "text-dark-blue/60"}`}>
                        {" "}one-time
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                              pkg.highlighted ? "text-growth-green" : "text-growth-green"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              pkg.highlighted ? "text-pure-white/80" : "text-dark-blue/70"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={pkg.highlighted ? "hero" : "outline"}
                      size="lg"
                      className="w-full"
                      onClick={() => window.open(whatsappUrl, "_blank")}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pro Store Features */}
      <section className="py-24 bg-dark-blue">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-4">
              Pro Store Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4 font-display">
              Why Go <span className="text-gradient-green">Pro?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Advanced Animations",
                description: "Smooth motion effects that create a premium shopping experience",
              },
              {
                icon: Palette,
                title: "Premium UI/UX",
                description: "Conversion-optimized design with storytelling brand layouts",
              },
              {
                icon: Star,
                title: "Priority Support",
                description: "Extended post-launch support and faster response times",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-growth-green/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-growth-green" />
                </div>
                <h3 className="text-lg font-bold text-pure-white mb-2 font-display">
                  {feature.title}
                </h3>
                <p className="text-pure-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default StoreServices;
