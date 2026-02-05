import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Check, 
  Globe, 
  Smartphone, 
  MessageCircle, 
  MapPin, 
  Search, 
  Zap, 
  Clock, 
  Phone,
  ArrowRight,
  Share2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";


const features = [
  { icon: Globe, text: "3-5 Page Professional Website" },
  { icon: Smartphone, text: "Mobile & Desktop Optimized" },
  { icon: MessageCircle, text: "Contact Form + WhatsApp Integration" },
  { icon: MapPin, text: "Google Maps + Click-to-Call" },
  { icon: Share2, text: "Social Media Integration" },
  { icon: Search, text: "Basic SEO Setup" },
  { icon: Zap, text: "Fast Loading & Performance" },
  { icon: Clock, text: "5-7 Days Delivery" },
];

const WebsiteServices = () => {
    const pageUrl = "https://groviaa.in/website-services";
  const pageTitle = "Website Development Company in India | Business Website Design - Groviaa Web";
  const pageDescription =
    "Groviaa Web offers professional website development services for small businesses, startups, and brands. Get a fast, mobile-optimized website that converts visitors into leads.";
  const phoneNumber = "917727900889";
  const message = "Hi! I'm interested in the Starter Business Website package.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
        <meta property="og:type" content="service" />
        <meta property="og:image" content="https://groviaa.in/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://groviaa.in/og-image.png" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website Development",
            provider: {
              "@type": "Organization",
              name: "Groviaa Web",
              url: "https://groviaa.in",
            },
            areaServed: {
              "@type": "Place",
              name: "India",
            },
            description:
              "Professional business website development services including responsive design, SEO setup, and lead-focused layouts.",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "5000",
            },
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-6">
              Website Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 font-display">
              Professional Websites That <span className="text-gradient-green">Convert</span>
            </h1>
            <p className="text-pure-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Get a stunning, mobile-optimized business website that builds trust and generates leads for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Package Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Package Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4 font-display">
                  Starter Business Website
                </h2>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-growth-green">₹5,000</span>
                  <span className="text-dark-blue/60">one-time</span>
                </div>
                <p className="text-dark-blue/70 mb-8">
                  Perfect for small businesses, freelancers, and startups looking to establish their online presence with a professional, inquiry-focused website.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-growth-green/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-growth-green" />
                      </div>
                      <span className="text-dark-blue/80 text-sm">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bonus */}
                <div className="bg-growth-green/10 rounded-2xl p-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-growth-green/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-growth-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-blue">Bonus Included</p>
                      <p className="text-sm text-dark-blue/60">
                        Free 30-min guidance call + 1 week post-launch support
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" onClick={() => window.open(whatsappUrl, "_blank")}>
                    <MessageCircle className="w-5 h-5" />
                    Get Started Now
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* What You Get Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-dark-blue rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-pure-white mb-6 font-display">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "3-5 Page Inquiry-Focused Website",
                      "Mobile & Desktop Optimized Design",
                      "Contact Form with Email Notifications",
                      "WhatsApp Chat Integration",
                      "Google Maps Embed",
                      "Click-to-Call Functionality",
                      "Social Media Links",
                      "Basic On-Page SEO Setup",
                      "Fast Loading Optimization",
                      "2 Revisions Included",
                      "5-7 Days Delivery Time",
                      "1 Week Post-Launch Support",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-growth-green flex-shrink-0 mt-0.5" />
                        <span className="text-pure-white/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-blue">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4 font-display">
              Ready to Get Your <span className="text-gradient-green">Professional Website?</span>
            </h2>
            <p className="text-pure-white/60 mb-8">
              Let's build a website that represents your business professionally and helps you grow online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="xl" onClick={() => window.open(whatsappUrl, "_blank")}>
                <MessageCircle className="w-5 h-5" />
                Start on WhatsApp
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/pricing">View All Pricing</Link>
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

export default WebsiteServices;
