import { motion } from "framer-motion";
import { Shield, Zap, Users, Award, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "No hidden charges or surprise costs. Clear packages designed for small businesses that want professional results.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    description:
      "We deliver websites and marketing campaigns on time without compromising on quality or performance.",
  },
  {
    icon: Users,
    title: "Built for Indian Businesses",
    description:
      "We understand local markets, customer behavior, and pricing sensitivity — so we build solutions that actually work in India.",
  },
  {
    icon: Award,
    title: "Premium, Professional Design",
    description:
      "Your business deserves more than a basic template. We create modern, high-converting designs that build trust instantly.",
  },
  {
    icon: Clock,
    title: "Ongoing Support After Launch",
    description:
      "We don’t disappear after delivery. We provide support and guidance to keep your website and marketing running smoothly.",
  },
  {
    icon: Heart,
    title: "Long-Term Growth Partner",
    description:
      "Our goal is not just to build a website, but to help you grow consistently with the right digital strategy.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-dark-blue relative overflow-hidden" id="why-groviaa">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-growth-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-growth-green/5 rounded-full blur-3xl" />

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
            Why Choose Groviaa Web
          </span>

          {/* SEO-Friendly Trust Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mb-4 font-display">
            A Digital Growth Partner Small Businesses Can{" "}
            <span className="text-gradient-green">Trust</span>
          </h2>

          <p className="text-pure-white/60 max-w-2xl mx-auto">
            We combine professional website development, e-commerce expertise, and result-driven digital marketing to help your business grow online with confidence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-growth-green/30 hover:shadow-glow">
                <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center mb-4 group-hover:bg-growth-green/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-growth-green" />
                </div>
                <h3 className="text-lg font-bold text-pure-white mb-2 font-display">
                  {reason.title}
                </h3>
                <p className="text-pure-white/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
