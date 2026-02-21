import { motion } from "framer-motion";
import { Scan, AlertTriangle, Link2, Brain, Lock, Settings } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "See Threats Instantly",
    description: "Suspicious emails are marked with a warning badge right in your inbox. No need to open them to know they're risky.",
  },
  {
    icon: AlertTriangle,
    title: "Inline Email Warnings",
    description: "⚠ Suspicious badges appear directly on risky emails in your inbox list for immediate visibility.",
    accent: true,
  },
  {
    icon: Link2,
    title: "Think Before You Click",
    description: "When you click a suspicious link, SentinelMind asks for confirmation. One extra step that could save you from a breach.",
  },
  {
    icon: Brain,
    title: "AI That Understands Deception",
    description: "Powered by Claude, SentinelMind detects manipulation tactics like fake urgency, authority impersonation, and fear-based messaging.",
  },
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Runs locally in your browser. Only sends email content to AI for analysis. No data is ever stored or shared.",
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
