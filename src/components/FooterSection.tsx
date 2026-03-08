import logo from "@/assets/logo.png";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/8 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center overflow-hidden">
              <img src={logo} alt="ProtomindAI" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-display font-bold text-white tracking-tight">
              Protomind<span className="text-gradient-gold">AI</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Solutions", href: "#solutions" },
              { label: "Technologies", href: "#technologies" },
              { label: "Why Self-Hosted", href: "#why" },
              { label: "Use Cases", href: "#usecases" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:protomind.ai@gmail.com"
            className="text-sm text-primary hover:text-primary-glow transition-colors font-medium"
          >
            protomind.ai@gmail.com
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© {year} ProtomindAI. All rights reserved.</span>
          <span>Self-Hosted AI Agents for Defense &amp; Enterprise</span>
        </div>
      </div>
    </footer>
  );
}
