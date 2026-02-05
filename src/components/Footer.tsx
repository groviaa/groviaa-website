import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, ArrowUp } from "lucide-react";
import logoFull from "@/assets/logo-full-new.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-blue border-t border-white/10">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-growth-green rounded-full flex items-center justify-center shadow-glow hover:shadow-glow-intense transition-shadow"
      >
        <ArrowUp className="w-5 h-5 text-pure-white" />
      </button>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={logoFull} alt="Groviaa" className="h-16 md:h-20 w-auto mb-10" />
            </Link>
            <p className="text-pure-white/60 text-sm leading-relaxed mb-6">
              Your trusted digital growth partner. We help businesses look professional, 
              sell better, and grow faster online.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://instagram.com/groviaaweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-pure-white/60 hover:bg-growth-green hover:text-pure-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-pure-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Website Development", path: "/website-services" },
                { name: "E-commerce Stores", path: "/store-services" },
                { name: "Digital Marketing", path: "/marketing-services" },
                { name: "Instagram Growth", path: "/marketing-services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-pure-white/60 hover:text-growth-green transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-pure-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
                { name: "Get Started", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-pure-white/60 hover:text-growth-green transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-pure-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-growth-green mt-0.5" />
                <a
                  href="tel:+917727900889"
                  className="text-pure-white/60 hover:text-pure-white transition-colors text-sm"
                >
                  +91 7727900889
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-growth-green mt-0.5" />
                <a
                  href="mailto:groviaaweb@gmail.com"
                  className="text-pure-white/60 hover:text-pure-white transition-colors text-sm"
                >
                  groviaaweb@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={18} className="text-growth-green mt-0.5" />
                <a
                  href="https://instagram.com/groviaaweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pure-white/60 hover:text-pure-white transition-colors text-sm"
                >
                  @groviaaweb
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-growth-green mt-0.5" />
                <span className="text-pure-white/60 text-sm">
                  Jaipur, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-pure-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Groviaa. All rights reserved. Built with ❤️ for Indian Businesses.
            </p>
            <div className="flex gap-6">
              <span className="text-pure-white/40 text-xs">Clear Pricing</span>
              <span className="text-pure-white/40 text-xs">No Fake Promises</span>
              <span className="text-pure-white/40 text-xs">Real Results</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
