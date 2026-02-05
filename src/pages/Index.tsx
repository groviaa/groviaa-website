import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PricingPreview from "@/components/sections/PricingPreview";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) setIsLoading(false);
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem("hasLoaded", "true");
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-dark-blue">
          
          <Helmet>
            {/* Primary SEO */}
            <title>
              Website Development, E-commerce & Digital Marketing for Small Businesses | Groviaa Web
            </title>

            <meta
              name="description"
              content="Groviaa Web helps small businesses grow online with professional website development, high-converting e-commerce stores, and performance-driven digital marketing services across India."
            />

            <meta
              name="keywords"
              content="website development company India, small business website design, ecommerce website development, Shopify store setup India, digital marketing agency India, Facebook ads service, Instagram marketing for business"
            />

            <meta name="author" content="Groviaa Web" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://groviaa.in/" />

            {/* Open Graph (WhatsApp, Facebook, LinkedIn) */}
            <meta property="og:title" content="Grow Your Business Online with Groviaa Web" />
            <meta
              property="og:description"
              content="Websites, online stores, and marketing systems designed to help small businesses attract customers and grow faster."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://groviaa.in/" />
            <meta property="og:image" content="https://groviaa.in/og-image.png" />

            {/* Twitter Preview */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Groviaa Web – Digital Growth for Small Businesses" />
            <meta
              name="twitter:description"
              content="Professional websites, e-commerce stores, and marketing that help businesses grow online."
            />
            <meta name="twitter:image" content="https://groviaa.in/og-image.png" />
<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Groviaa Web",
  "url": "https://groviaa.in",
  "logo": "https://groviaa.in/og-image.png",
  "description": "Groviaa Web is a digital solutions agency helping small businesses grow online with professional website development, e-commerce store setup, and performance-driven digital marketing.",
  "email": "groviaaweb@gmail.com",
  "telephone": ["+91 7727900889", "+91 8696104430"],
  "sameAs": [
    "https://instagram.com/groviaaweb"
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Place",
      "name": "Global"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Website Development",
        "description": "Professional business website design and development for small businesses."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "E-commerce Website Development",
        "description": "Shopify and custom online store setup with payment integration."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "Performance marketing including Meta Ads, Google Ads, and social media growth."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Paid Advertising",
        "description": "Paid ad campaigns designed to generate leads and sales for growing businesses."
      }
    }
  ]
}
`}
</script>

            
          </Helmet>

          <Navbar />

          <main role="main">
            <Hero />
            <Services />
            <WhyChooseUs />
            <HowWeWork />
            <Testimonials />
            <PricingPreview />
            <FinalCTA />
          </main>

          <Footer />
          <WhatsAppCTA />
          <ExitIntentPopup />
        </div>
      )}
    </>
  );
};

export default Index;
