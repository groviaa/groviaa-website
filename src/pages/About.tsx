import { motion } from "framer-motion";
import { Check, Users, Target, Handshake, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const About = () => {
  const focusPoints = [
    "Multiple business websites successfully launched",
    "Clients supported across different industries",
    "Focus on long-term client relationships",
    "Consistent 5-star client feedback on delivered work",
  ];

  const values = [
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description:
        "We focus on practical strategies that help businesses attract more customers, improve visibility, and grow sustainably.",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description:
        "We take time to understand your business, your goals, and your challenges before recommending any solution.",
    },
    {
      icon: Handshake,
      title: "Genuine Partnership",
      description:
        "We see ourselves as your long-term growth partner, not just a service provider. Your success is our success.",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 font-display">
              About <span className="text-gradient-green">Groviaa Web</span>
            </h1>
            <p className="text-pure-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              We are a growth-focused digital solutions agency helping small
              businesses build a strong and reliable online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section data-light-section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue font-display">
                Our <span className="text-gradient-green">Story</span>
              </h2>
            </div>

            <div className="space-y-6 text-dark-blue/70 text-lg leading-relaxed">
              <p>
                Groviaa Web was started with a clear goal — to help small
                businesses and startups access professional digital solutions
                without the confusion, inflated pricing, or over-complication
                that often comes with the industry.
              </p>
              <p>
                We saw many hardworking business owners struggle online, not
                because their services were poor, but because their websites and
                marketing were not built to attract and convert customers.
              </p>
              <p>
                Groviaa Web was created to bridge that gap. We combine
                professional-quality work, practical pricing, and a focus on
                real business growth. Every project we take on is approached
                with long-term value in mind — not just quick delivery.
              </p>
              <p>
                Today, we work with businesses across different industries,
                helping them build credibility online, reach the right audience,
                and turn their digital presence into a growth engine.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="py-24 bg-dark-blue">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-4">
              Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white font-display">
              Our Focus <span className="text-gradient-green">So Far</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {focusPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 glass-card rounded-2xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-growth-green/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-growth-green" />
                </div>
                <span className="text-pure-white/80 text-lg">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section data-light-section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue font-display">
              Our <span className="text-gradient-green">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-growth-green/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-growth-green" />
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-4 font-display">
                  {value.title}
                </h3>
                <p className="text-dark-blue/60">{value.description}</p>
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

export default About;