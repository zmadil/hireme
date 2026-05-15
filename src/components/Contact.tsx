"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "zainmadil95@gmail.com", href: "mailto:zainmadil95@gmail.com" },
  { label: "GitHub", value: "github.com/zainmadil", href: "https://github.com/zainmadil" },
  { label: "LinkedIn", value: "linkedin.com/in/zain-adil", href: "https://linkedin.com/in/zain-adil" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-24 px-6 border-t border-black/[0.06]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold font-mono text-black/30 uppercase tracking-widest mb-8"
        >
          Contact
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group flex items-center justify-between px-5 py-4 rounded-xl border border-black/[0.07] hover:border-black/20 bg-[#fafafa] hover:bg-white transition-all"
            >
              <div>
                <div className="text-xs text-black/35 mb-0.5">{l.label}</div>
                <div className="text-sm font-medium text-black">{l.value}</div>
              </div>
              <ArrowUpRight size={14} className="text-black/25 group-hover:text-black transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
