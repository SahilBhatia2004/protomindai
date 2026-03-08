import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Total Data Sovereignty",
    body: "Your data never traverses external APIs or cloud servers. All inference, training, and retrieval happens on hardware you own or control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Air-Gap & Offline Capable",
    body: "Designed from the ground up for denied-network environments. Deploy into classified or isolated networks with no internet connectivity required.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3c1.99 0 3.82.65 5.31 1.73"/>
        <path d="M22 4L12 14.01l-3-3"/>
      </svg>
    ),
    title: "Compliance-Ready Architecture",
    body: "Built with SOC 2, ITAR, FedRAMP, and sector-specific compliance frameworks in mind. Full audit logging and access controls out of the box.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Deterministic & Auditable",
    body: "Every decision made by a ProtomindAI agent is logged, explainable, and reproducible. No black-box third-party dependencies affecting your outcomes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Custom Model Fine-Tuning",
    body: "We fine-tune foundation models on your specific domain — whether that's military terminology, engineering specs, legal documents, or financial data.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Dedicated Integration Support",
    body: "Our team works alongside your engineers to integrate AI agents into your existing tech stack, workflows, and security posture — from day one.",
  },
];

export default function WhySelfHosted() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Dark background with noise */}
      <div className="absolute inset-0 bg-navy circuit-bg" />
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <div className="relative container mx-auto px-6">
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
              Why Self-Hosted
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-white mb-4"
          >
            Your Intelligence,<br />
            <span className="text-gradient-gold">Your Infrastructure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            The most powerful AI is the one you trust. Self-hosted deployment isn't a constraint — it's a strategic advantage.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group p-6 rounded-xl border border-white/8 bg-white/5 hover:bg-white/8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
