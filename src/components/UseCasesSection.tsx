import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
  {
    label: "Intelligence Analysis",
    icon: "🔍",
    description: "Agents that process satellite imagery, signals intelligence, and open-source data to produce synthesized, actionable battlefield intelligence — in minutes, not hours.",
  },
  {
    label: "Cyber Threat Detection",
    icon: "🛡",
    description: "ML-powered anomaly detection across network traffic and endpoint telemetry, with LLM-assisted incident response recommendations tailored to your environment.",
  },
  {
    label: "Document Intelligence",
    icon: "📋",
    description: "Ingest thousands of classified or proprietary documents and query them with natural language — the AI answers with citations, summaries, and cross-references.",
  },
  {
    label: "Logistics Optimization",
    icon: "🔄",
    description: "Predictive supply chain and logistics agents that balance equipment readiness, maintenance schedules, and resource allocation across complex operational theaters.",
  },
  {
    label: "Compliance Automation",
    icon: "✅",
    description: "Continuously monitor operations, contracts, and communications against regulatory frameworks — flagging non-compliance before it becomes a liability.",
  },
  {
    label: "Training & Simulation",
    icon: "🎯",
    description: "AI-driven simulation environments and adaptive training agents that evolve based on performance data and emerging doctrinal requirements.",
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="usecases" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="gold-line" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Use Cases
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-foreground"
          >
            Where ProtomindAI<br />
            <span className="text-gradient-gold">Delivers Value</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group flex flex-col gap-3 p-6 rounded-xl border border-border hover:border-primary/30 bg-card hover:shadow-[0_4px_24px_hsl(43_68%_47%/0.08)] transition-all duration-300"
            >
              <div className="text-3xl">{c.icon}</div>
              <h3 className="font-display font-bold text-lg text-foreground">{c.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
              <div className="mt-auto pt-2">
                <a
                  href="#contact"
                  className="text-primary text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200"
                >
                  Discuss this use case
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
