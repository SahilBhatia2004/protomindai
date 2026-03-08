import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero circuit-bg">
      {/* Radial glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-navy/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Defense &amp; Enterprise AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground mb-6"
            >
              Sovereign AI.<br />
              <span className="text-gradient-gold">Built for the</span><br />
              Mission.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 font-body"
            >
              ProtomindAI engineers <strong className="text-foreground font-semibold">self-hosted AI agent systems</strong> for defense organizations and enterprises — delivering the full power of large language models, computer vision, and autonomous workflows, entirely within your secure perimeter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-gold hover:bg-primary-glow transition-colors duration-200"
              >
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                Explore Solutions
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              {[
                { label: "Self-Hosted", sub: "No data leaves your perimeter" },
                { label: "Air-Gap Ready", sub: "Fully offline deployment" },
                { label: "Enterprise-Grade", sub: "SOC2-ready architecture" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-foreground text-base">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Logo hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 -m-16 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]">
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-2 h-2 rounded-full bg-primary/30"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateX(180px) translateY(-50%)`,
                    }}
                  />
                ))}
              </div>

              {/* Middle ring */}
              <div className="absolute inset-0 -m-8 rounded-full border border-primary/15 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Logo container */}
              <div className="relative w-64 h-64 rounded-full bg-navy flex items-center justify-center shadow-[0_0_80px_hsl(43_68%_47%/0.2)] border border-primary/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
                <img
                  src={logo}
                  alt="ProtomindAI"
                  className="w-44 h-44 object-contain relative z-10 drop-shadow-[0_0_24px_hsl(43_68%_47%/0.6)]"
                />
              </div>

              {/* Floating chips */}
              {[
                { label: "LLM", top: "5%", left: "-20%" },
                { label: "RAG", top: "75%", left: "-18%" },
                { label: "Vision", top: "5%", right: "-22%" },
                { label: "Neural Net", top: "75%", right: "-24%" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="absolute px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold text-foreground shadow-md"
                  style={{ top: chip.top, left: chip.left, right: chip.right }}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 align-middle" />
                  {chip.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
