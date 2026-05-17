"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "We were spending hours manually checking reports and device statuses every day. Zain automated the workflow and gave us a clean dashboard with alerts. It honestly changed how our team operates.",
    name: "Sarah Kim",
    role: "Operations Manager",
  },
  {
    quote:
      "I originally reached out for help with self-hosted AI, but he ended up helping us rethink our whole infrastructure. Super easy to work with and explains things in a way non-technical people can actually understand.",
    name: "James Liu",
    role: "Startup Founder",
  },
  {
    quote:
      "Our edge devices kept going offline with no visibility into what was happening. Zain set up monitoring, alerting, and remote access so we could finally troubleshoot issues before they became outages.",
    name: "Priya Mehta",
    role: "IT Director",
  },
  {
    quote:
      "DwelloMate helped us modernize our office without overcomplicating things. The smart lighting, camera integrations, and remote access setup all felt polished and reliable from day one.",
    name: "David Ramirez",
    role: "Business Owner",
  },
  {
    quote:
      "What stood out most was how practical the solutions were. Instead of pushing unnecessary tools, Zain focused on what actually made sense for our workflow and budget.",
    name: "Aisha Tariq",
    role: "Product Lead",
  },
  {
    quote:
      "We needed a small Kubernetes and IoT test environment built quickly for internal validation. Zain handled the setup, documentation, and deployment process smoothly end-to-end.",
    name: "Chris Nolan",
    role: "Engineering Manager",
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
