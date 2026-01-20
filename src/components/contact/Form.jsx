"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const email = "chamihansani99@gmail.com";
  const phone = "+94715352004";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-md w-full flex flex-col items-center justify-center space-y-6"
    >
      {/* Email Card */}
      <motion.a
        variants={item}
        href={`mailto:${email}`}
        className="w-full p-6 rounded-lg shadow-lg bg-background border border-accent/30 hover:border-accent/60 transition-all duration-300 flex items-center gap-4 group"
      >
        <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
          <Mail className="w-6 h-6 text-accent" />
        </div>
        <div className="flex flex-col">
          <p className="text-foreground/60 text-sm">Email</p>
          <p className="text-foreground font-semibold break-all">{email}</p>
        </div>
      </motion.a>

      {/* Phone Card */}
      <motion.a
        variants={item}
        href={`tel:${phone}`}
        className="w-full p-6 rounded-lg shadow-lg bg-background border border-accent/30 hover:border-accent/60 transition-all duration-300 flex items-center gap-4 group"
      >
        <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
          <Phone className="w-6 h-6 text-accent" />
        </div>
        <div className="flex flex-col">
          <p className="text-foreground/60 text-sm">Phone</p>
          <p className="text-foreground font-semibold">{phone}</p>
        </div>
      </motion.a>

      {/* Message Info */}
      <motion.div
        variants={item}
        className="w-full p-4 rounded-lg bg-accent/5 border border-accent/20 text-center"
      >
        <p className="text-foreground/70 text-sm">
          Click on either contact method above to reach out, and I will get back
          to you as soon as possible!
        </p>
      </motion.div>
    </motion.div>
  );
}
