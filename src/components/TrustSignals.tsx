import { motion } from "framer-motion";
import { Brain, Github, DatabaseZap } from "lucide-react";

const signals = [
  { icon: Brain, label: "Powered by Claude AI", description: "Anthropic's advanced AI model" },
  { icon: Github, label: "Open Source", description: "Transparent & community-driven" },
  { icon: DatabaseZap, label: "No Data Stored", description: "Zero persistence, full privacy" },
];

const TrustSignals = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {signals.map((signal, i) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 120 }}
              className="flex items-center gap-4 justify-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <signal.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">{signal.label}</p>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
