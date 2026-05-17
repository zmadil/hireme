"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const roles = ["AI & Automation.", "Web & Digital Growth.", "Independent Contractor."];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-black/40 font-mono tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for projects
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 text-black"
      >
        {roles.map((r, i) => (
          <span key={r} className="block">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={i === 0 ? "text-black" : "text-black/25"}
            >
              {r}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="text-base text-black/50 max-w-md leading-relaxed mb-10"
      >
        I help small businesses and technical teams build what they need — websites, SEO, social media strategy, CRM setup, and AI-powered automation. Based in Houston. Remote-friendly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="flex flex-wrap gap-3"
      >
        <a
          href="mailto:zainmadil95@gmail.com?subject=AI Consulting Inquiry"
          className="flex items-center gap-1.5 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/80 transition-colors"
        >
          Get in touch <ArrowUpRight size={14} />
        </a>
        <a
          href="#projects"
          className="flex items-center gap-1.5 px-5 py-2.5 border border-black/15 text-black/70 text-sm font-medium rounded-full hover:border-black/40 hover:text-black transition-colors"
        >
          View work
        </a>
      </motion.div>
    </section>
  );
}
