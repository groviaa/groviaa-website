import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Website",
    price: "₹5,000",
    period: "one-time",
    description: "Perfect for small businesses starting their online journey",
    features: [
      "3-5 Page Professional Website",
      "Mobile Optimized",
      "Contact Form + WhatsApp",
      "Basic SEO Setup",
      "5-7 Days Delivery",
    ],
    link: "/website-services",
    highlighted: false,
  },
  {
    name: "Pro Store Launch",
    price: "₹30,000",
    period: "one-time",
    description: "Premium Shopify store with advanced features",
    features: [
      "Full Shopify Store Setup",
      "Up to 40 Products",
      "Advanced Animations",
      "Premium UI/UX Design",
      "Priority Support",
    ],
    link: "/store-services",
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "Marketing Growth",
    price: "₹5,000",
    period: "/month",
    description: "Strategic Meta Ads for consistent leads",
    features: [
      "Up to 3 Campaigns",
      "A/B Testing",
      "Retargeting Setup",
      "Weekly Reports",
      "Ongoing Optimization",
    ],
    link: "/marketing-services",
    highlighted: false,
  },
];

const PricingPreview = () => {
  return (
    <section data-light-section className="py-24 bg-white relative overflow-hidden">
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
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue mb-4 font-display">
            Simple, Transparent <span className="text-gradient-green">Pricing</span>
          </h2>
          <p className="text-dark-blue/60 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Best Value Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-growth-green text-pure-white text-sm font-bold rounded-full shadow-glow">
                    {plan.badge}
                  </span>
                </div>
              )}

<div
                className={`h-full rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-dark-blue/70 text-pure-white shadow-xl best-value-badge"
                    : "bg-gray-50 text-dark-blue hover:shadow-lg border border-gray-100"
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-xl font-bold mb-2 font-display">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-pure-white/60" : "text-dark-blue/60"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold font-display">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-pure-white/60" : "text-dark-blue/60"}`}>
                    {" "}{plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-growth-green" : "text-growth-green"}`} />
                      <span className={`text-sm ${plan.highlighted ? "text-pure-white/80" : "text-dark-blue/70"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to={plan.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-growth-green font-semibold hover:underline"
          >
            View All Pricing Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
