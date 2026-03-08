import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const solutions = [
  {
    sector: "Defense",
    badge: "DEFENSE",
    heading: "AI for the Battlefield and Beyond",
    description:
      "From ISR (Intelligence, Surveillance, Reconnaissance) to logistics optimization and cyber threat detection — ProtomindAI agents are engineered to operate in disconnected, degraded, and contested environments.",
    capabilities: [
      "Autonomous ISR analysis and target identification",
      "Classified document intelligence & summarization",
      "Real-time video/sensor fusion with CV models",
      "Threat pattern recognition from multi-source feeds",
      "Air-gapped deployment with no external dependencies",
    ],
    accent: "from-primary/5 to-primary/10",
    border: "border-primary/20",
  },
  {
    sector: "Enterprise",
    badge: "ENTERPRISE",
    heading: "AI Agents That Work Like Your Best Analyst",
    description:
      "Deploy intelligent agents across operations, compliance, finance, and R&D that reason over your internal data — automating complex workflows while keeping sensitive information locked within your environment.",
    capabilities: [
      "Internal knowledge base Q&A with RAG pipelines",
      "Automated compliance monitoring & reporting",
      "Cross-department workflow orchestration",
      "Predictive analytics on proprietary datasets",
      "Seamless integration with existing enterprise tools",
    ],
    accent: "from-secondary to-secondary/60",
    border: "border-border",
  },
];

export default function SolutionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="gold-line" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              What We Build
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-foreground"
          >
            Tailored AI Agent<br />
            <span className="text-gradient-gold">Systems</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.sector}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className={`relative rounded-2xl border ${sol.border} bg-gradient-to-br ${sol.accent} p-8 overflow-hidden`}
            >
              {/* Sector badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-bold tracking-widest text-primary">{sol.badge}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{sol.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{sol.description}</p>

              <ul className="space-y-3">
                {sol.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm text-foreground">
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
