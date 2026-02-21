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
    a: "SentinelMind runs as a Chrome extension. When you open Gmail, it scans your inbox emails and analyzes them using Claude AI to detect phishing indicators like urgency tactics, authority impersonation, and suspicious links. Results appear as inline badges directly in your inbox.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. SentinelMind is privacy-first. It runs locally in your browser and only sends email content to Claude AI for analysis. No data is stored, logged, or shared with any third party. The extension is also fully open source so you can verify this yourself.",
  },
  {
    q: "Which sites are scanned?",
    a: "SentinelMind only activates on Gmail (mail.google.com). When checking links, it skips trusted domains like Google, YouTube, GitHub, and other well-known sites to save resources and reduce false positives.",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
