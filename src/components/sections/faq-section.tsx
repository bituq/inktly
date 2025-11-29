"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/data/faq-items.json";
import type { FAQItem } from "@/types";

const faqItems = faqData as FAQItem[];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-terracotta font-medium mb-3">
            Hulp nodig?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-rich-brown mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Heb je vragen? We hebben de antwoorden voor je klaarstaan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-warm-white rounded-xl border border-sand px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="font-heading text-lg text-rich-brown hover:text-terracotta hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-warm-brown pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-warm-brown mb-4">
            Staat jouw vraag er niet tussen?
          </p>
          <a
            href="#contact"
            className="text-terracotta hover:text-terracotta-dark font-medium underline underline-offset-4"
          >
            Neem contact met ons op
          </a>
        </motion.div>
      </div>
    </section>
  );
}
