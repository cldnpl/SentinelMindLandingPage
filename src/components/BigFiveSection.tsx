import { motion } from "framer-motion";
import { Timer, Crown, Skull, Heart, Sparkles } from "lucide-react";

const traits = [
  {
    icon: Timer,
    name: "Urgency",
    vector: 'The "Time Pressure" Vector',
    description: "The use of artificial deadlines to create a state of panic or rush.",
    triggers: ["Immediate action required", "Expires in 15 minutes", "Act now"],
    psychology: 'Forces the user into "System 1" thinking (fast/instinctive), preventing them from noticing red flags like a fake email address.',
    color: "destructive",
  },
  {
    icon: Crown,
    name: "Authority",
    vector: 'The "Compliance" Vector',
    description: "Impersonation of high-ranking figures or official departments to demand obedience.",
    triggers: ["From the Office of the CEO", "Official IT Security Audit", "HR Policy Update"],
    psychology: "Humans are socially conditioned to follow instructions from superiors or official entities without question.",
    color: "warning",
  },
  {
    icon: Skull,
    name: "Intimidation",
    vector: 'The "Consequence" Vector',
    description: "Threatening negative outcomes (legal, financial, or professional) if the user does not comply.",
    triggers: ["Unauthorized login detected", "Your account will be deleted", "Legal action is pending"],
    psychology: 'Fear triggers an "Amygdala Hijack," where the brain\'s threat-detection center takes over, making logical reasoning nearly impossible.',
    color: "destructive",
  },
  {
    icon: Heart,
    name: "Empathy",
    vector: 'The "Reciprocity" Vector',
    description: "Exploiting the user's desire to be a good person or to help a colleague in need.",
    triggers: ["I'm stuck and need a favor", "Can you help me with this file?", "I'm a new intern"],
    psychology: "The principle of Reciprocity makes us feel a powerful urge to comply with requests that seem personal or collaborative.",
    color: "primary",
  },
  {
    icon: Sparkles,
    name: "Curiosity",
    vector: 'The "Novelty" Vector',
    description: '"Too good to be true" offers or mysterious information to provoke a click.',
    triggers: ["Confidential Salary List", "Exclusive Invite", "You've been mentioned in this document"],
    psychology: 'Targets "Sensation Seeking" — the prospect of secret information releases dopamine, overriding security caution.',
    color: "secondary",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  destructive: {
    bg: "bg-destructive/5",
    text: "text-destructive",
    border: "border-destructive/20",
    iconBg: "bg-destructive/10",
  },
  warning: {
    bg: "bg-warning/5",
    text: "text-warning",
    border: "border-warning/20",
    iconBg: "bg-warning/10",
  },
  primary: {
    bg: "bg-primary/5",
    text: "text-primary",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
  },
  secondary: {
    bg: "bg-secondary/5",
    text: "text-secondary",
    border: "border-secondary/20",
    iconBg: "bg-secondary/10",
  },
};

const BigFiveSection = () => {
  return (
    <section id="big-five" className="py-24 relative">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">Our Research</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            The <span className="text-gradient">Big Five</span> of Social Engineering
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Our work is grounded in the psychological framework of{" "}
          <strong className="text-foreground">"The Big Five"</strong> personality model,
          adapted to the cybersecurity domain. We identified five core{" "}
          <strong className="text-foreground">attacker tactics</strong> —
          the social engineering vectors — and SentinelMind measures each one as a
          percentage score, giving you a clear breakdown of how a threat is trying to manipulate you.
        </motion.p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {traits.map((trait, i) => {
            const colors = colorMap[trait.color];
            return (
              <motion.div
                key={trait.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`gradient-card rounded-xl border ${colors.border} p-6 shadow-card`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.iconBg}`}>
                    <trait.icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{trait.name}</h3>
                      <span className={`text-xs font-mono ${colors.text} ${colors.bg} px-2 py-1 rounded-full`}>
                        {trait.vector}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{trait.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {trait.triggers.map((trigger) => (
                        <span
                          key={trigger}
                          className="text-xs font-mono bg-muted/50 border border-border px-2.5 py-1 rounded-md text-muted-foreground"
                        >
                          "{trigger}"
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground/80 italic leading-relaxed">
                      🧠 {trait.psychology}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BigFiveSection;
