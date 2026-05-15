"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  "Deployed edge AI infrastructure across 1,000+ IIoT sensors",
  "Built Azure IoT Operations on Arc-enabled Kubernetes clusters",
  "Designed edge-to-cloud telemetry pipelines for industrial monitoring",
  "Automated GitOps provisioning workflows across cloud environments",
  "Developed local LLM and RAG-based internal knowledge systems",
];

const certs = [
  { code: "AZ-204", name: "Azure Developer" },
  { code: "AZ-900", name: "Azure Fundamentals" },
  { code: "CSM", name: "Scrum Master" },
  { code: "SAFe", name: "SAFe Practitioner" },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 px-6 border-t border-black/[0.06]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-bold font-mono text-black/30 uppercase tracking-widest mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Where I've worked.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Role */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <span className="text-white text-sm font-bold">SE</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">Software Engineer</div>
                <div className="text-sm text-black/40">Energy Sector · Full-time</div>
              </div>
            </div>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-black/55">
                  <span className="mt-2 w-1 h-1 rounded-full bg-black/30 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Certs */}
          <div>
            <p className="text-xs font-semibold text-black/30 uppercase tracking-widest mb-5">Certifications</p>
            <div className="grid grid-cols-2 gap-3">
              {certs.map((c) => (
                <div
                  key={c.code}
                  className="p-4 rounded-xl border border-black/[0.07] bg-[#fafafa]"
                >
                  <div className="text-sm font-bold text-black">{c.code}</div>
                  <div className="text-xs text-black/40 mt-0.5">{c.name}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
