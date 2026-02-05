import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { 
  Check, 
  X,
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  MessageCircle, 
  Instagram,
  Camera,
  Calendar,
  Hash,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";

const MarketingServices = () => {


  const phoneNumber = "917727900889";

  const metaAdsPackages = [
    {
      name: "Meta Ads Starter",
      price: "₹2,000",
      period: "/month",
      description: "Perfect for businesses testing paid advertising",
      features: [
        "1 Campaign Setup",
        "1 Audience Targeting",
        "Ad Setup & Basic Optimization",
        "Message / Traffic Objective",
        "7-Day Performance Report",
      ],
      notes: [
        "No sales guarantee - results depend on many factors",
        "Recommended ad budget: ₹3K-₹5K/month",
      ],
    },
    {
      name: "Meta Ads Growth",
      price: "₹5,000",
      period: "/month",
      description: "For businesses ready to scale with strategic advertising",
      features: [
        "Up to 3 Campaigns",
        "Multiple Audience Targeting",
        "A/B Testing Setup",
        "Retargeting Campaigns",
        "Weekly Optimization",
        "Weekly Performance Reports",
      ],
      notes: [
        "Ad budget paid separately to Meta",
        "Minimum 14-day testing period recommended",
      ],
      highlighted: true,
    },
  ];

  const instagramPackage = {
    name: "Instagram Growth Management",
    price: "₹8,000 - ₹12,000",
    period: "/month",
    description: "Complete Instagram presence management for growing brands",
    includes: [
      { icon: Camera, text: "15 Static Posts/Month" },
      { icon: Instagram, text: "5 Reels (Editing + Captions)" },
      { icon: Calendar, text: "Content Calendar Planning" },
      { icon: MessageCircle, text: "CTA-Focused Captions" },
      { icon: Users, text: "Bio Optimization" },
      { icon: Hash, text: "Basic Hashtag Strategy" },
    ],
    excludes: [
      "Paid Advertisements",
      "DM Management",
      "Product Photography/Shoots",
    ],
  };

  return (
    <div className="min-h-screen bg-dark-blue">
      <Navbar />
      <Helmet>
  {/* Primary SEO */}
  <title>
    Digital Marketing & Paid Ads Services for Small Businesses | Groviaa Web
  </title>

  <meta
    name="description"
    content="Groviaa Web provides result-driven digital marketing, Facebook Ads, Instagram Ads, and Google Ads management services to help small businesses generate leads and grow faster."
  />

  <meta
    name="keywords"
    content="digital marketing agency India, Facebook ads service, Instagram ads agency, Google ads management India, paid advertising for small business, performance marketing services"
  />

  <meta name="author" content="Groviaa Web" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://groviaa.in/marketing-services" />

  {/* Open Graph */}
  <meta property="og:title" content="Grow Faster with Digital Marketing & Paid Ads | Groviaa Web" />
  <meta
    property="og:description"
    content="We help businesses scale with high-converting Facebook, Instagram, and Google Ads campaigns managed by performance marketing experts."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://groviaa.in/marketing-services" />
  <meta property="og:image" content="https://groviaa.in/og-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Digital Marketing That Drives Sales | Groviaa Web" />
  <meta
    name="twitter:description"
    content="Paid ads and digital marketing systems designed to bring leads, sales, and measurable growth for small businesses."
  />
  <meta name="twitter:image" content="https://groviaa.in/og-image.png" />

  {/* Service Schema */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Marketing & Paid Advertising",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Groviaa Web",
          "url": "https://groviaa.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "description": "Groviaa Web provides Facebook Ads, Instagram Ads, Google Ads, and performance-driven digital marketing services for small businesses.",
        "offers": {
          "@type": "Offer",
          "url": "https://groviaa.in/marketing-services"
        }
      }
    `}
  </script>
</Helmet>


      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-6">
              Digital Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 font-display">
              Grow Your <span className="text-gradient-green">Online Presence</span>
            </h1>
            <p className="text-pure-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Strategic Meta Ads and Instagram management to reach your target audience and drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meta Ads Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-6 h-6 text-growth-green" />
              <span className="text-growth-green font-semibold">Meta Ads (Facebook & Instagram)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4 font-display">
              Paid Advertising <span className="text-gradient-green">Packages</span>
            </h2>
            <p className="text-dark-blue/60 max-w-2xl mx-auto">
              Reach your target customers with strategic ad campaigns on Facebook and Instagram.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {metaAdsPackages.map((pkg, index) => {
              const message = `Hi! I'm interested in the ${pkg.name} package.`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`h-full rounded-3xl p-8 ${
                      pkg.highlighted
                        ? "bg-dark-blue text-pure-white shadow-xl"
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
                        {pkg.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-growth-green flex-shrink-0 mt-0.5" />
                          <span className={`text-sm ${pkg.highlighted ? "text-pure-white/80" : "text-dark-blue/70"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Notes */}
                    <div className={`rounded-xl p-4 mb-6 ${pkg.highlighted ? "bg-white/5" : "bg-gray-100"}`}>
                      {pkg.notes.map((note) => (
                        <div key={note} className="flex items-start gap-2 mb-2 last:mb-0">
                          <AlertCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlighted ? "text-growth-green/70" : "text-dark-blue/50"}`} />
                          <span className={`text-xs ${pkg.highlighted ? "text-pure-white/60" : "text-dark-blue/50"}`}>
                            {note}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant={pkg.highlighted ? "hero" : "outline"}
                      size="lg"
                      className="w-full"
                      onClick={() => window.open(whatsappUrl, "_blank")}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram Management Section */}
      <section className="py-24 bg-dark-blue">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-6 h-6 text-growth-green" />
              <span className="text-growth-green font-semibold">Instagram Marketing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4 font-display">
              Instagram Growth <span className="text-gradient-green">Management</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h3 className="text-2xl font-bold text-pure-white mb-2 font-display">
                    {instagramPackage.name}
                  </h3>
                  <p className="text-pure-white/60 text-sm mb-6">{instagramPackage.description}</p>

                  <div className="mb-8">
                    <span className="text-3xl font-bold text-growth-green font-display">
                      {instagramPackage.price}
                    </span>
                    <span className="text-pure-white/60 text-sm">{instagramPackage.period}</span>
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      const message = "Hi! I'm interested in Instagram Growth Management.";
                      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="text-sm font-semibold text-pure-white/40 uppercase tracking-wider mb-4">
                    What's Included
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {instagramPackage.includes.map((item) => (
                      <li key={item.text} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-growth-green/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-growth-green" />
                        </div>
                        <span className="text-pure-white/80 text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-sm font-semibold text-pure-white/40 uppercase tracking-wider mb-4">
                    Not Included
                  </h4>
                  <ul className="space-y-2">
                    {instagramPackage.excludes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <X className="w-4 h-4 text-destructive/60" />
                        <span className="text-pure-white/50 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "50+", label: "Happy Clients" },
              { icon: TrendingUp, value: "3x", label: "Avg. ROI" },
              { icon: Target, value: "100+", label: "Campaigns Run" },
              { icon: BarChart3, value: "500K+", label: "Reach Generated" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-growth-green/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-growth-green" />
                </div>
                <div className="text-3xl font-bold text-dark-blue mb-1 font-display">{stat.value}</div>
                <div className="text-dark-blue/60 text-sm">{stat.label}</div>
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

export default MarketingServices;
