"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Local AI Infrastructure",
    desc: "Self-hosted LLM stack with Ollama, RAG pipelines, and AI workflow automation.",
    tags: ["Ollama", "RAG", "n8n"],
    bg: "#f5f0ff",
    emoji: "🧠",
  },
  {
    title: "Kubernetes Edge Lab",
    desc: "K3s cluster on Raspberry Pi nodes with GitOps deployments via FluxCD.",
    tags: ["K3s", "FluxCD", "Helm"],
    bg: "#f0f7ff",
    emoji: "⎈",
  },
  {
    title: "DVR AI Surveillance",
    desc: "Edge-based object detection on camera feeds with real-time alerting.",
    tags: ["Edge AI", "Docker", "MQTT"],
    bg: "#f0fff4",
    emoji: "👁",
  },
  {
    title: "Telegram Accountability App",
    desc: "Daily check-in bot that tracks goals and streaks via Telegram, powered by n8n workflows and AI-generated summaries.",
    tags: ["n8n", "Telegram", "AI", "Automation"],
    bg: "#fff8f0",
    emoji: "✅",
  },
  {
    title: "n8n Automation Ecosystem",
    desc: "AI-enhanced workflow automation connecting APIs, bots, and data pipelines.",
    tags: ["n8n", "Webhooks", "AI"],
    bg: "#f0f7ff",
    emoji: "⚡",
  },
  {
    title: "GitOps Deployment Platform",
    desc: "Automated Kubernetes provisioning and CI/CD for edge environments.",
    tags: ["GitOps", "Ansible", "Azure"],
    bg: "#f8f8f8",
    emoji: "🔄",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-24 px-6 border-t border-black/[0.06]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm font-bold font-mono text-black/30 uppercase tracking-widest mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">What I've built.</h2>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group relative p-6 rounded-2xl border border-black/[0.07] hover:border-black/20 transition-colors"
              style={{ backgroundColor: p.bg }}
            >
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="text-sm font-semibold text-black mb-1.5">{p.title}</h3>
              <p className="text-sm text-black/50 leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
