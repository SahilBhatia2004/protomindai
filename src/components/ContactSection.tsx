import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const email = "protomind.ai@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="gold-line" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Get in Touch
              </span>
              <div className="gold-line" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl text-foreground mb-4"
            >
              Ready to Deploy<br />
              <span className="text-gradient-gold">Sovereign AI?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto"
            >
              Whether you're evaluating AI capabilities for a classified program or enterprise transformation — reach out to start a confidential conversation.
            </motion.p>
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative rounded-2xl border border-primary/20 bg-card overflow-hidden shadow-[0_8px_48px_hsl(43_68%_47%/0.10)]"
          >
            {/* Gold top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-glow to-primary" />

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left — contact details */}
              <div className="p-10 border-r border-border">
                <div className="mb-8">
                  <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
                    Email Us Directly
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={`mailto:${email}`}
                      className="font-display font-bold text-xl text-foreground hover:text-primary transition-colors break-all"
                    >
                      {email}
                    </a>
                    <button
                      onClick={copyEmail}
                      title="Copy email"
                      className="flex-shrink-0 p-1.5 rounded-md border border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
                    >
                      {copied ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-xs text-primary mt-1">Copied to clipboard!</p>
                  )}
                </div>

                <div className="space-y-4">
                  {[
                    { icon: "🔒", text: "All communications treated with strict confidentiality" },
                    { icon: "⚡", text: "Typical response within 24 business hours" },
                    { icon: "🎯", text: "We handle defense, government, and enterprise inquiries" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-base flex-shrink-0">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — what to ask about */}
              <div className="p-10">
                <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
                  Topics We Handle
                </div>
                <div className="space-y-3">
                  {[
                    "Self-hosted LLM deployment for your environment",
                    "Computer vision for surveillance or analysis",
                    "RAG pipelines over classified or proprietary data",
                    "Multi-agent workflow automation architecture",
                    "Air-gapped or on-premise ML infrastructure",
                    "Custom model fine-tuning and evaluation",
                    "Security & compliance assessment",
                  ].map((topic) => (
                    <div key={topic} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {topic}
                    </div>
                  ))}
                </div>

                <a
                  href={`mailto:${email}?subject=ProtomindAI%20Inquiry&body=Hello%20ProtomindAI%20Team%2C%0A%0AI%20am%20interested%20in%20discussing%20your%20AI%20agent%20solutions.%0A%0A`}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-gold hover:bg-primary-glow transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Send us an Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
