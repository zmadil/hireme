"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  bg: string;
  emoji: string;
  href?: string;
  badge?: string;
  bullets?: string[];
};

const projects: Project[] = [
  {
    title: "Web Marketing & SEO",
    desc: "End-to-end digital growth — from search visibility and content strategy to social media engagement and conversion.",
    tags: ["SEO", "Marketing", "Social Media", "Web Dev"],
    bg: "#fff7ed",
    emoji: "📈",
    bullets: [
      "On-page & technical SEO audits and implementation",
      "Content strategy aligned with search intent",
      "Social media management & engagement campaigns",
      "Analytics setup: GA4, Search Console, conversion tracking",
      "Landing page design optimized for lead generation",
      "Monthly reporting with actionable growth insights",
    ],
  },
  {
    title: "DwelloMate",
    desc: "Smart home automation company — tailored solutions for lighting, security, and climate control.",
    tags: ["Home Automation", "IoT", "Smart Home"],
    bg: "#f0f9ff",
    emoji: "🏠",
    href: "https://dwellomate.webflow.io",
    badge: "Founder",
    bullets: [
      "Tailored lighting with personalized mood settings",
      "Security integration: smart locks, cameras & alerts",
      "Climate control automation for year-round comfort",
      "Locally stored data — private & secure by design",
      "Works with Ring, Reolink, Aqara, Google Home & more",
      "24/7 local technical support",
    ],
  },
  {
    title: "Telegram Accountability App",
    desc: "Daily check-in bot that tracks goals and streaks via Telegram, powered by n8n workflows and AI-generated summaries.",
    tags: ["n8n", "Telegram", "AI", "Automation"],
    href: "https://friend.n8nbronco.com",
    bg: "#fff8f0",
    emoji: "🤖",
  },
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
          {projects.map((p, i) => {
            const inner = (
              <>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{p.emoji}</div>
                  {p.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/[0.06] text-black/50">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-black mb-1.5">{p.title}</h3>
                <p className="text-sm text-black/50 leading-relaxed mb-4">{p.desc}</p>
                {p.bullets && (
                  <ul className="mb-4 space-y-1">
                    {p.bullets.map((b) => (
                      <li key={b} className="text-xs text-black/45 leading-snug flex gap-1.5">
                        <span className="mt-[3px] shrink-0 w-1 h-1 rounded-full bg-black/20" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                {p.href && (
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-black/40 group-hover:text-black/70 transition-colors">
                    Visit site <ArrowUpRight size={11} />
                  </div>
                )}
              </>
            );

            const cardClass =
              "group relative p-6 rounded-2xl border border-black/[0.07] hover:border-black/20 transition-colors" +
              (p.href ? " cursor-pointer" : "");

            return p.href ? (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className={cardClass}
                style={{ backgroundColor: p.bg }}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className={cardClass}
                style={{ backgroundColor: p.bg }}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
