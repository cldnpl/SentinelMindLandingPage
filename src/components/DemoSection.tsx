import { motion } from "framer-motion";
import { AlertTriangle, Shield, ExternalLink, Check, X } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">See It In Action</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient">SentinelMind</span> at Work
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gmail inbox mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-card rounded-xl border border-border shadow-card overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-warning/60" />
                <div className="h-3 w-3 rounded-full bg-secondary/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">Gmail — Inbox</span>
            </div>
            <div className="p-1">
              {/* Safe email */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 hover:bg-muted/20 rounded">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">JD</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">Meeting tomorrow at 3pm</p>
                </div>
                <span className="text-xs text-muted-foreground">2:30 PM</span>
              </div>
              {/* Suspicious email */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-destructive/5 rounded">
                <div className="h-8 w-8 rounded-full bg-destructive/20 flex items-center justify-center text-xs font-bold text-destructive">!!</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground truncate">Security Team</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-destructive/20 px-2 py-0.5 text-[10px] font-bold text-destructive">
                      <AlertTriangle className="h-3 w-3" /> Suspicious
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">URGENT: Your account will be suspended...</p>
                </div>
                <span className="text-xs text-muted-foreground">1:15 PM</span>
              </div>
              {/* Another safe email */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 hover:bg-muted/20 rounded">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">GH</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">GitHub</p>
                  <p className="text-xs text-muted-foreground truncate">Your pull request was merged</p>
                </div>
                <span className="text-xs text-muted-foreground">11:00 AM</span>
              </div>
              {/* Another suspicious */}
              <div className="flex items-center gap-3 px-4 py-3 bg-destructive/5 rounded">
                <div className="h-8 w-8 rounded-full bg-destructive/20 flex items-center justify-center text-xs font-bold text-destructive">PP</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground truncate">PayPal Support</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-destructive/20 px-2 py-0.5 text-[10px] font-bold text-destructive">
                      <AlertTriangle className="h-3 w-3" /> Suspicious
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">Verify your identity immediately or...</p>
                </div>
                <span className="text-xs text-muted-foreground">9:30 AM</span>
              </div>
            </div>
          </motion.div>

          {/* Link confirmation dialog mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Dialog */}
            <div className="gradient-card rounded-xl border border-destructive/30 shadow-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">⚠ Suspicious Link Detected</h4>
                  <p className="text-xs text-muted-foreground">SentinelMind Protection</p>
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 border border-border p-3 mb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <ExternalLink className="h-3 w-3" /> Destination URL
                </div>
                <p className="text-sm font-mono text-destructive break-all">
                  http://paypa1-secure.phishing-site.com/verify
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                This link appears to be a phishing attempt. The domain mimics PayPal but is not legitimate.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-muted border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/80 transition-colors">
                  <X className="h-4 w-4" /> Go Back
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-destructive/20 border border-destructive/30 px-4 py-2.5 text-sm font-semibold text-destructive hover:bg-destructive/30 transition-colors">
                  <Check className="h-4 w-4" /> Open Anyway
                </button>
              </div>
            </div>

            {/* Status banner */}
            <div className="gradient-card rounded-xl border border-secondary/30 shadow-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">SentinelMind Active</p>
                    <p className="text-xs text-muted-foreground">Monitoring your inbox</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-secondary">3 threats blocked</p>
                  <p className="text-xs text-muted-foreground">12 emails scanned</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
