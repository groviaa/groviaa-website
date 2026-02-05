import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Understand Business",
    description: "We start by understanding your goals, target audience, and what makes your business unique.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Design",
    description: "Craft a tailored strategy and design that aligns with your brand and converts visitors.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Build your website or store with clean code, premium design, and optimized performance.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "We handle the technical setup and launch your project with a smooth go-live process.",
  },
  {
    icon: HeadphonesIcon,
    number: "05",
    title: "Growth & Support",
    description: "Ongoing support, optimization, and marketing to help you grow after launch.",
  },
];

const HowWeWork = () => {
  return (
    <section data-light-section id="light-section" className="py-24 bg-white relative overflow-hidden">
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
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue mb-4 font-display">
            How We <span className="text-gradient-green">Work</span>
          </h2>
          <p className="text-dark-blue/60 max-w-2xl mx-auto">
            A streamlined process designed to deliver results efficiently and effectively.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-growth-green/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
{steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="group text-center">
                  {/* Icon Container */}
                  <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-dark-blue flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                    <step.icon className="w-8 h-8 text-growth-green" />
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-growth-green rounded-full flex items-center justify-center text-pure-white text-xs font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-dark-blue mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-dark-blue/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
