import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website Development",
    description:
      "Professional, mobile-optimized business websites that build trust, attract customers, and generate leads for small businesses.",
    price: "Starting ₹5,000",
    link: "/website-services",
    gradient: "from-growth-green/20 to-growth-green/5",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Website & Shopify Store Development",
    description:
      "Conversion-ready Shopify and e-commerce stores with seamless payment integration, product setup, and premium design.",
    price: "Starting ₹25,000",
    link: "/store-services",
    gradient: "from-growth-green/15 to-growth-green/5",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Paid Advertising",
    description:
      "Strategic Meta Ads, Google Ads, and Instagram growth management to increase traffic, leads, and online sales.",
    price: "Starting ₹2,000/mo",
    link: "/marketing-services",
    gradient: "from-growth-green/10 to-growth-green/5",
  },
];

const Services = () => {
  return (
    <section
      className="py-24 bg-dark-blue relative overflow-hidden"
      id="services"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,181,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(57,181,74,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-4">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mb-4 font-display">
            Website Development, E-commerce Stores &{" "}
            <span className="text-gradient-green">
              Digital Marketing Services
            </span>
          </h2>

          <p className="text-pure-white/60 max-w-2xl mx-auto">
            We help small businesses build a strong online presence, sell
            products online, and grow faster with performance-driven marketing.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.link} className="group block h-full">
                <div
                  className="relative h-full glass-card rounded-3xl p-8 transition-all duration-300 hover:border-growth-green/30 hover:shadow-glow overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-growth-green/10 flex items-center justify-center mb-6 group-hover:bg-growth-green/20 transition-colors">
                      <service.icon className="w-8 h-8 text-growth-green" />
                    </div>

                    {/* Service Name for SEO */}
                    <h3 className="text-xl font-bold text-pure-white mb-3 font-display group-hover:text-growth-green transition-colors">
                      <span itemProp="name">{service.title}</span>
                    </h3>

                    {/* Service Description for SEO */}
                    <p
                      className="text-pure-white/60 text-sm leading-relaxed mb-6"
                      itemProp="description"
                    >
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-growth-green font-semibold"
                        itemProp="offers"
                        itemScope
                        itemType="https://schema.org/Offer"
                      >
                        <span itemProp="priceCurrency" content="INR" />
                        <span itemProp="price">{service.price}</span>
                      </span>

                      <div className="flex items-center gap-2 text-pure-white/60 group-hover:text-growth-green transition-colors">
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
