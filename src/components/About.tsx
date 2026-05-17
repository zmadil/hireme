"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "20+", label: "Businesses helped" },
  { value: "5+", label: "Years in engineering" },
  { value: "6", label: "Microsoft certifications" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-24 px-6 border-t border-black/[0.06]" ref={ref}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold font-mono text-black/30 uppercase tracking-widest mb-5">About</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-black">
            Tech that works for your business.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-base text-black/55 leading-relaxed">
            Software engineer and digital consultant with experience across AI systems, web development, and business technology. I work with small businesses who need a reliable tech partner — and with technical teams who need AI and automation expertise.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/[0.06]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tracking-tight text-black">{s.value}</div>
                <div className="text-xs text-black/40 mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
