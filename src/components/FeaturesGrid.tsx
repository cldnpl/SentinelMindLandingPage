import { motion } from "framer-motion";
import { Scan, AlertTriangle, Link2, Brain, Lock, Settings } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Full-Page Threat Scanning",
    description: "Every element on the page is analyzed — emails, buttons, links, forms, and popups. If it's suspicious, you'll know.",
  },
  {
    icon: AlertTriangle,
    title: "Inline Visual Warnings",
    description: "⚠ Suspicious badges appear directly on risky elements — whether it's an email, a download button, or a deceptive link.",
    accent: true,
  },
  {
    icon: Link2,
    title: "Think Before You Click",
    description: "Clicking a suspicious link or download triggers a confirmation dialog. One extra step that could save you from a breach.",
  },
  {
    icon: Brain,
    title: "AI That Understands Deception",
    description: "Powered by Claude, SentinelMind detects manipulation tactics like fake urgency, disguised downloads, authority impersonation, and fear-based messaging.",
  },
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Runs locally in your browser. Only sends page content to AI for analysis. No data is ever stored or shared.",
  },
  {
    icon: Settings,
    title: "Zero Configuration",
    description: "Install and forget. Smart filtering automatically skips trusted sites like Google, YouTube, and GitHub.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything You Need to <span className="text-gradient">Stay Safe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className={`gradient-card rounded-xl border p-6 transition-all hover:border-primary/40 hover:shadow-glow ${
                feature.accent ? "border-warning/30" : "border-border"
              }`}
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${
                feature.accent ? "bg-warning/10" : "bg-primary/10"
              }`}>
                <feature.icon className={`h-5 w-5 ${feature.accent ? "text-warning" : "text-primary"}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
