"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Web & Business",
    items: ["Web Development", "SEO Optimization", "Social Media Strategy", "CRM Setup", "GoHighLevel", "HubSpot", "Google Business Profile", "Content Strategy"],
  },
  {
    label: "AI & LLMs",
    items: ["Ollama", "RAG Pipelines", "Local LLMs", "AI Workflow Automation", "Prompt Engineering"],
  },
  {
    label: "Automation",
    items: ["n8n", "MQTT", "Event-Driven Architecture", "CI/CD", "Telegram Bots"],
  },
  {
    label: "Cloud",
    items: ["Microsoft Azure", "Azure IoT Operations", "Azure Arc", "Event Grid", "Azure Functions"],
  },
  {
    label: "Development",
    items: ["Python", "C# / .NET", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Infrastructure & Edge",
    items: ["Kubernetes", "K3s", "Docker", "Helm", "GitOps", "FluxCD", "Ansible"],
  },
  {
    label: "Edge Hardware",
    items: ["Raspberry Pi", "Edge AI", "Tailscale", "Self-Hosted Infra", "Telemetry Systems"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 px-6 border-t border-black/[0.06] bg-[#fafafa]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-bold font-mono text-black/30 uppercase tracking-widest mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Tech stack.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <p className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">{cat.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
