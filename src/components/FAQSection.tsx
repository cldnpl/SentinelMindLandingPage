import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does SentinelMind work?",
    a: "SentinelMind runs as a Chrome extension that scans every page you visit. It uses Claude AI to analyze emails, links, buttons, popups, and other interactive elements for phishing indicators like urgency tactics, disguised URLs, fake download buttons, and authority impersonation.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. SentinelMind is privacy-first. It runs locally in your browser and only sends page content to Claude AI for analysis. No data is stored, logged, or shared with any third party. The extension is also fully open source so you can verify this yourself.",
  },
  {
    q: "What does it scan?",
    a: "SentinelMind scans everything on the page — emails in Gmail, links anywhere on the web, download buttons, form submissions, popups, and any interactive element that could be deceptive. It skips trusted domains like Google, YouTube, and GitHub to save resources.",
  },
  {
    q: "Is it free?",
    a: "Yes! SentinelMind is completely free and open source. You can install it from the Chrome Web Store or build it yourself from the GitHub repository.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="gradient-card rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
