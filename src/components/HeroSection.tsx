import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, HardHat } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Building Construction Concepts Ltd",
  subtitle = "Constructing excellence with precision and reliability since 1986. Your vision, our expertise.",
  ctaText = "Explore Our Services",
  onCtaClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  },
  backgroundImage = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
}: HeroSectionProps) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This would be where we'd implement more complex animations
    // if needed beyond what framer-motion provides declaratively
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Animated Logo */}
        <motion.div
          ref={logoRef}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/90 p-5 shadow-lg">
            <HardHat size={48} className="text-white" />
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-7xl px-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-8 max-w-2xl text-base text-gray-200 md:text-xl px-4"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={onCtaClick}
            className="group bg-primary px-8 py-6 text-lg font-semibold hover:bg-primary/90"
          >
            {ctaText}
            <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </Button>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-8 w-8 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
