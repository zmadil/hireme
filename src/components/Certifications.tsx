"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  {
    title: "AZ-204",
    subtitle: "Developing Solutions for Microsoft Azure",
    org: "Microsoft",
    color: "#00d4ff",
    bg: "bg-[#00d4ff]/[0.07]",
    border: "border-[#00d4ff]/20",
  },
  {
    title: "AZ-900",
    subtitle: "Azure Fundamentals",
    org: "Microsoft",
    color: "#38bdf8",
    bg: "bg-[#38bdf8]/[0.07]",
    border: "border-[#38bdf8]/20",
  },
  {
    title: "CSM",
    subtitle: "Certified Scrum Master",
    org: "Scrum Alliance",
    color: "#818cf8",
    bg: "bg-[#818cf8]/[0.07]",
    border: "border-[#818cf8]/20",
  },
  {
    title: "SAFe",
    subtitle: "Certified SAFe Practitioner",
    org: "Scaled Agile",
    color: "#34d399",
    bg: "bg-[#34d399]/[0.07]",
    border: "border-[#34d399]/20",
  },
  {
    title: "FlexiCapture",
    subtitle: "ABBYY FlexiCapture Specialist",
    org: "ABBYY",
    color: "#fb923c",
    bg: "bg-[#fb923c]/[0.07]",
    border: "border-[#fb923c]/20",
  },
  {
    title: "Python DS",
    subtitle: "Python for Data Science",
    org: "IBM",
    color: "#818cf8",
    bg: "bg-[#818cf8]/[0.07]",
    border: "border-[#818cf8]/20",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-28 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#00d4ff] text-sm font-mono font-medium tracking-widest uppercase mb-3">
            05 / Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Credentials &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className={`p-5 rounded-xl ${cert.bg} border ${cert.border} card-glow text-center group cursor-default`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: `${cert.color}18` }}
              >
                <Award size={20} style={{ color: cert.color }} />
              </div>
              <div className="text-xs font-bold font-mono mb-1" style={{ color: cert.color }}>
                {cert.title}
              </div>
              <div className="text-[10px] text-white/40 leading-snug mb-2">{cert.subtitle}</div>
              <div className="text-[10px] text-white/25 font-mono">{cert.org}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
