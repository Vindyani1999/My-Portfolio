"use client";
import CertificateLayout from "./CertificateLayout";
import CertificateCarousel from "./CertificateCarousel";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const CertificateList = ({ certificates }) => {
  return (
    <div className="w-full">
      {/* Carousel Section */}
      <div className="w-full px-4 mx-auto lg:px-16 mb-12">
        <CertificateCarousel />
      </div>

      {/* Certificate Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-auto xl:max-w-6xl px-4 mx-auto lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((certificate, index) => (
          <CertificateLayout key={index} {...certificate} />
        ))}
      </motion.div>
    </div>
  );
};

export default CertificateList;
