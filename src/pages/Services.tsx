import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const services = [
  {
    icon: Globe,
    title: "Website",
    subtitle: "Business Website Development",
    description:
      "Professional, mobile-optimized business websites that build trust and generate leads for your business.",
    price: "Starting ₹5,000",
    link: "/website-services",
  },
  {
    icon: ShoppingBag,
    title: "Store",
    subtitle: "E-commerce Store Setup",
    description:
      "Conversion-ready Shopify stores with seamless payment integration and premium design to boost sales.",
    price: "Starting ₹25,000",
    link: "/store-services",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    subtitle: "Digital Marketing & Growth",
    description:
      "Strategic Meta Ads and Instagram growth management to scale your online presence and reach more customers.",
    price: "Starting ₹2,000/mo",
    link: "/marketing-services",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-dark-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 font-display">
              Everything You Need to{" "}
              <span className="text-gradient-green">Grow Online</span>
            </h1>
            <p className="text-pure-white/70 text-lg max-w-2xl mx-auto">
              From building your digital presence to scaling your sales — we've
              got you covered with professional solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section data-light-section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link} className="group block h-full">
                  <div className="relative h-full bg-gray-50 rounded-3xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-growth-green/30 overflow-hidden">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-growth-green/10 flex items-center justify-center mb-6 group-hover:bg-growth-green/20 transition-colors">
                      <service.icon className="w-8 h-8 text-growth-green" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-dark-blue mb-2 font-display group-hover:text-growth-green transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-growth-green text-sm font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-dark-blue/60 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-dark-blue font-semibold">
                        {service.price}
                      </span>
                      <div className="flex items-center gap-2 text-growth-green font-medium group-hover:gap-3 transition-all">
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
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

export default Services;