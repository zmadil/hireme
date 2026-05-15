"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  "LLM integration & RAG pipelines",
  "AI workflow automation (n8n)",
  "Kubernetes & edge infrastructure",
  "Azure cloud architecture",
  "IIoT system design",
  "Self-hosted AI infrastructure",
];

export default function HireMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 px-6 border-t border-black/[0.06] bg-black text-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white/40 font-mono tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available now
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Let's build something.
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Open to AI consulting contracts, short-term projects, and
              infrastructure engagements. Remote-first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-2 mb-8">
              {services.map((s) => (
                <div key={s} className="text-sm text-white/40 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  {s}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:zainmadil95@gmail.com?subject=AI Consulting Inquiry"
                className="flex items-center justify-center gap-1.5 px-5 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
              >
                Send inquiry <ArrowUpRight size={14} />
              </a>
              <a
                href="https://linkedin.com/in/zainadil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-3 border border-white/20 text-white/70 text-sm font-medium rounded-full hover:border-white/40 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
