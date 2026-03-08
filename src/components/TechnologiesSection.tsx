import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 5v2M12 17v2M5 12H3M21 12h-2"/>
      </svg>
    ),
    title: "Computer Vision",
    description:
      "Real-time object detection, scene understanding, anomaly recognition, and satellite/aerial image analysis — deployed entirely on-premises with zero cloud dependency.",
    tags: ["Object Detection", "Thermal Imaging", "Video Analytics"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="5" cy="19" r="2"/>
        <circle cx="19" cy="19" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 7v3M12 14v3M7 19h4M13 19h4M7.5 17.5l3-4M16.5 17.5l-3-4"/>
      </svg>
    ),
    title: "Neural Networks",
    description:
      "Custom-trained deep learning architectures optimized for mission-critical accuracy. Transformer models, CNNs, and hybrid architectures fine-tuned on your domain data.",
    tags: ["Transformers", "CNNs", "Fine-Tuning"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8M8 14h5"/>
      </svg>
    ),
    title: "Large Language Models",
    description:
      "On-premises LLMs delivering advanced reasoning, document analysis, code generation, and multi-turn conversations — with full data sovereignty and audit trails.",
    tags: ["On-Prem LLMs", "Document QA", "Reasoning Chains"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Machine Learning",
    description:
      "Predictive analytics, anomaly detection, classification, and ranking — ML pipelines that adapt to evolving threat landscapes and enterprise operational patterns.",
    tags: ["Predictive Analytics", "Anomaly Detection", "AutoML"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <path d="M9 7h7M9 11h5M9 15h3"/>
      </svg>
    ),
    title: "Retrieval-Augmented Generation",
    description:
      "RAG pipelines that ground your agents in proprietary documents, classified databases, and institutional knowledge — delivering precise, cited, hallucination-resistant answers.",
    tags: ["Vector Search", "Knowledge Bases", "Cited Answers"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M17.5 17.5l2.5 2.5M17.5 20l2.5-2.5"/>
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4"/>
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Autonomous multi-agent orchestration that handles decision trees, approvals, data routing, and cross-system integrations — dramatically reducing manual overhead.",
    tags: ["Multi-Agent", "Orchestration", "Decision Automation"],
  },
];

export default function TechnologiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technologies" className="py-24 bg-secondary/30" ref={ref}>
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
              Core Technologies
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            State-of-the-Art AI,<br />
            <span className="text-gradient-gold">Under Your Control</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Every capability runs within your infrastructure — no third-party APIs, no data leakage.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-[0_4px_32px_hsl(43_68%_47%/0.1)] transition-all duration-300"
            >
              {/* Hover accent bar */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500" />

              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                {tech.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-2">{tech.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tech.description}</p>

              <div className="flex flex-wrap gap-2">
                {tech.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-primary-muted text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
