import { motion } from "framer-motion";
import { Brain, Github, DatabaseZap } from "lucide-react";

const signals = [
  { icon: Brain, label: "Powered by Claude AI", description: "Anthropic's advanced AI model" },
  { icon: Github, label: "Open Source", description: "Transparent & community-driven" },
  { icon: DatabaseZap, label: "No Data Stored", description: "Zero persistence, full privacy" },
];

const TrustSignals = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {signals.map((signal, i) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
