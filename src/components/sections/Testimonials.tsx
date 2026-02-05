import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, Artisan Crafts",
    content: "Groviaa transformed our small handicraft business. The website they built looks incredibly professional and we've seen a 3x increase in inquiries. Highly recommended!",
    rating: 5,
    image: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart Solutions",
    content: "The team understood our vision perfectly. Our new Shopify store has been converting visitors into customers from day one. The ROI has been phenomenal.",
    rating: 5,
    image: "RK",
  },
  {
    name: "Anita Patel",
    role: "Owner, Fresh Organics",
    content: "From website to Instagram marketing, Groviaa handles everything. Our online presence has never looked this good. They truly care about our growth.",
    rating: 5,
    image: "AP",
  },
  {
    name: "Vikram Singh",
    role: "Director, Urban Fitness",
    content: "The Meta Ads campaigns they run for us are consistently delivering results. Finally found a marketing partner who actually understands our business.",
    rating: 5,
    image: "VS",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-dark-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-growth-green/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-growth-green/5 rounded-full blur-3xl -translate-y-1/2" />

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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mb-4 font-display">
            What Our <span className="text-gradient-green">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-pure-white hover:bg-growth-green hover:border-growth-green transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-pure-white hover:bg-growth-green hover:border-growth-green transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8 md:p-12"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-growth-green/30 mb-6" />

              {/* Content */}
              <p className="text-pure-white text-lg md:text-xl leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-growth-green/20 flex items-center justify-center text-growth-green font-bold text-lg">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <h4 className="text-pure-white font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-pure-white/60 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-growth-green fill-growth-green" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-growth-green"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
