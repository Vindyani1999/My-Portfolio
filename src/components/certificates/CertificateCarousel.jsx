"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CertificateCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Mobitel Code Blast Championship",
      image:
        "https://res.cloudinary.com/dlago1qei/image/upload/v1768882131/FB_IMG_1765870195609_swhj7o.jpg",
      description: "Championship Winner",
    },
    {
      id: 2,
      title: "FYP Arena Finalist",
      image:
        "https://res.cloudinary.com/dlago1qei/image/upload/v1768882241/1766128402673_ofjwmg.jpg",
      description: "Project Competition",
    },
    {
      id: 3,
      title: "Rextro Demonstration",
      image:
        "https://res.cloudinary.com/dlago1qei/image/upload/v1768884403/Picsart_25-12-17_11-40-11-665_iv9ev8.jpg",
      description: "Tech Showcase",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoplay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-2 px-4">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-lg h-80 md:h-96 lg:h-[500px] bg-background border-2 border-accent/30 aspect-video shadow-lg shadow-accent/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {slides[currentSlide].title}
              </h2>
              <p className="text-accent text-sm md:text-base">
                {slides[currentSlide].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-all duration-200 border border-accent/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-all duration-200 border border-accent/30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-muted/40 w-2 hover:bg-muted/60"
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificateCarousel;
