"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Zain delivered an AI automation system that cut our manual reporting time in half. Professional and incredibly knowledgeable.",
    name: "Sarah K.",
    role: "Operations Manager",
  },
  {
    quote: "Helped us set up a local LLM stack that saved thousands monthly vs. cloud APIs. Highly recommend.",
    name: "James L.",
    role: "Startup Founder",
  },
  {
    quote: "Our edge monitoring setup was a mess. Zain cleaned it up and added real-time alerting. Night and day difference.",
    name: "Priya M.",
    role: "IT Director",
  },
  {
    quote: "DwelloMate transformed our office into a smart workspace. Seamless setup and great ongoing support.",
    name: "David R.",
    role: "Small Business Owner",
  },
  {
    quote: "Excellent at explaining complex AI concepts and translating them into real business value. Impressive work.",
    name: "Aisha T.",
    role: "Product Lead",
  },
  {
    quote: "The Kubernetes edge lab setup was exactly what we needed for our IoT rollout. Solid, reliable work.",
    name: "Chris N.",
    role: "Head of Engineering",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-72 shrink-0 rounded-2xl border border-black/[0.07] bg-white p-6">
      <div className="mb-3 text-amber-400 text-sm tracking-wide">★★★★★</div>
      <p className="text-sm text-black/60 leading-relaxed mb-4">"{t.quote}"</p>
      <div>
        <div className="text-sm font-semibold text-black">{t.name}</div>
        <div className="text-xs text-black/40 mt-0.5">{t.role}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" className="py-24 border-t border-black/[0.06] bg-[#fafafa]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold font-mono text-black/30 uppercase tracking-widest mb-3">What clients say</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Trusted by clients.</h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="marquee-wrapper overflow-hidden"
      >
        <div className="marquee-track flex gap-6 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
