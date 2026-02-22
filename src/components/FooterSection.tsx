import { motion } from "framer-motion";
import { Shield, Github, BookOpen } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">SentinelMind</span>
            <span className="text-sm text-muted-foreground">— AI-Powered Phishing Detection</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/elbeekk/hackeurope"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://github.com/elbeekk/hackeurope#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="h-4 w-4" /> Setup Guide
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} SentinelMind. Open source under MIT License.
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
