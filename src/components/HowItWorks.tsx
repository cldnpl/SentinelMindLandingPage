import { motion } from "framer-motion";
import { Download, Globe, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install the Extension",
    description: "Add SentinelMind to Chrome in one click. No configuration needed.",
  },
  {
    icon: Globe,
    step: "02",
    title: "Browse the Web",
    description: "SentinelMind automatically scans every page you visit — Gmail, websites, downloads, and more.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Get Instant Warnings",
    description: "Suspicious emails, fake buttons, phishing links, and shady downloads are flagged before you interact.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Protected in <span className="text-gradient">Three Steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className="relative gradient-card rounded-xl border border-border p-8 text-center shadow-card"
            >
              <div className="text-6xl font-black text-primary/10 absolute top-4 right-6">{step.step}</div>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary shadow-glow">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
