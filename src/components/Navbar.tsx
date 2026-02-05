import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoLight from "@/assets/logo-full-new.png";   // White logo
import logoDark from "@/assets/logo-full-inv.png";    // Dark logo

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverLightSection, setIsOverLightSection] = useState(false);
  const location = useLocation();

  // Close menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // 🔥 Detect overlap with ANY light section on ANY page
  useEffect(() => {
    const handleScroll = () => {
      const lightSections = document.querySelectorAll("[data-light-section]");
      const navbarHeight = 90; // height where navbar sits

      let overLight = false;

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          overLight = true;
        }
      });

      setIsOverLightSection(overLight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`mx-4 md:mx-8 rounded-2xl transition-all duration-300 ${
          isOverLightSection
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "glass shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <img
                src={isOverLightSection ? logoDark : logoLight}
                alt="Groviaa"
                className="h-16 md:h-24 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    location.pathname === link.path
                      ? "text-growth-green"
                      : isOverLightSection
                      ? "text-dark-blue/80 hover:text-dark-blue"
                      : "text-pure-white/80 hover:text-pure-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-growth-green rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="default" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden relative z-10 p-2 ${
                isOverLightSection ? "text-dark-blue" : "text-pure-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark-blue/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="absolute top-24 left-4 right-4 bg-card rounded-2xl p-6 shadow-elevated"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? "bg-growth-green/20 text-growth-green"
                          : "text-pure-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
