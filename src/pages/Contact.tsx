import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Instagram
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNumber = "917727900889";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi Groviaa! I'm interested in your services.")}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // stop page redirect

  const formData = new FormData(e.currentTarget);

  await fetch("https://formsubmit.co/groviaaweb@gmail.com", {
    method: "POST",
    body: formData,
  });

  setIsSubmitted(true);

  setTimeout(() => {
    setIsSubmitted(false);
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  }, 4000);
};

  return (
    <div className="min-h-screen bg-dark-blue">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 font-display">
              Let's <span className="text-gradient-green">Grow Together</span>
            </h1>
            <p className="text-pure-white/70 text-lg max-w-2xl mx-auto">
              Ready to take your business online? Get in touch and let's discuss how we can help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-light-section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 font-display">
                Get In Touch
              </h2>
              <p className="text-dark-blue/60 mb-8">
                We'd love to hear from you. Whether you have a question about our services, 
                pricing, or anything else, our team is ready to answer all your questions.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                <a
                  href="tel:+917727900889"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-growth-green/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center group-hover:bg-growth-green/20 transition-colors">
                    <Phone className="w-5 h-5 text-growth-green" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-blue/50">Call Us</p>
                    <p className="font-semibold text-dark-blue">+91 7727900889</p>
                  </div>
                </a>

                <a
                  href="mailto:groviaaweb@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-growth-green/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center group-hover:bg-growth-green/20 transition-colors">
                    <Mail className="w-5 h-5 text-growth-green" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-blue/50">Email Us</p>
                    <p className="font-semibold text-dark-blue">groviaaweb@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/groviaaweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-growth-green/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center group-hover:bg-growth-green/20 transition-colors">
                    <Instagram className="w-5 h-5 text-growth-green" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-blue/50">Instagram</p>
                    <p className="font-semibold text-dark-blue">@groviaaweb</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-growth-green" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-blue/50">Location</p>
                    <p className="font-semibold text-dark-blue">Jaipur, India</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="bg-dark-blue rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-pure-white">Prefer WhatsApp?</p>
                    <p className="text-sm text-pure-white/60">Get instant responses</p>
                  </div>
                </div>
                <Button
                  variant="whatsapp"
                  className="w-full"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <motion.a
                  href="https://instagram.com/groviaaweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-dark-blue/60 hover:bg-growth-green hover:text-pure-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-dark-blue mb-6 font-display">
  Send us a Message
</h3>

{isSubmitted ? (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-12"
  >
    <div className="w-20 h-20 mx-auto mb-6 bg-growth-green/10 rounded-full flex items-center justify-center">
      <CheckCircle className="w-10 h-10 text-growth-green" />
    </div>
    <h4 className="text-xl font-bold text-dark-blue mb-2">
      Message Sent! 🎉
    </h4>
    <p className="text-dark-blue/60">
      We’ll get back to you within 24 hours.
    </p>
  </motion.div>
) : (
  <form onSubmit={handleSubmit} className="space-y-6">

<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_subject" value="New Lead from Groviaa Website" />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_autoresponse" value="Thank you for contacting Groviaa! We received your message and will call you within 24 hours." />


                    <div>
                      <label className="block text-sm font-medium text-dark-blue mb-2">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-white border-gray-200 text-dark-blue placeholder:text-gray-400 focus:border-growth-green"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-blue mb-2">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-white border-gray-200 text-dark-blue placeholder:text-gray-400 focus:border-growth-green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-blue mb-2">
                          Phone
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 77279 00889"
                          className="bg-white border-gray-200 text-dark-blue placeholder:text-gray-400 focus:border-growth-green"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-blue mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full h-11 px-3 rounded-xl bg-white border border-gray-200 text-dark-blue focus:border-growth-green focus:outline-none focus:ring-2 focus:ring-growth-green/20"
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Development</option>
                        <option value="store">E-commerce Store</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="instagram">Instagram Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-blue mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={4}
                        required
                        className="bg-white border-gray-200 text-dark-blue placeholder:text-gray-400 focus:border-growth-green resize-none"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                  )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map / Trust Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-pure-white mb-4 font-display">
              Trusted by Growing Businesses Across India
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 text-pure-white/40">
              {["Clear Pricing", "No Fake Promises", "Free Counselling", "Real Results"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-growth-green rounded-full" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );

};
export default Contact;
