"use client";

import { motion } from "framer-motion";
import { LayoutGrid, PenLine, Palette, Send, type LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Selecteer een kaart",
    description:
      "Kies uit onze collectie kaartontwerpen of upload een eigen design in verschillende formaten.",
    icon: LayoutGrid,
  },
  {
    number: 2,
    title: "Schrijf je bericht",
    description:
      "Voer je persoonlijke boodschap in. Wij zorgen voor de perfecte vertaling naar handschrift.",
    icon: PenLine,
  },
  {
    number: 3,
    title: "Kies een handschrift",
    description:
      "Selecteer uit zes unieke handschriftstijlen die passen bij de toon van je bericht.",
    icon: Palette,
  },
  {
    number: 4,
    title: "Wij verzenden",
    description:
      "Onze robots schrijven je kaart met echte inkt en wij verzenden hem rechtstreeks.",
    icon: Send,
  },
];

export function HowItWorksSection() {
  return (
    <section id="hoe-het-werkt" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-terracotta font-medium mb-3">
            Eenvoudig proces
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-rich-brown mb-4">
            Hoe het werkt
          </h2>
          <p className="text-warm-brown text-lg max-w-xl mx-auto">
            Van bericht tot brievenbus in vier stappen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[55%] w-[90%] border-t border-dashed border-sand/60" />
              )}

              <div className="bg-warm-white rounded-xl p-6 border border-sand/50 hover:border-terracotta/30 hover:shadow-card transition-all duration-300 relative z-10 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center font-heading text-lg">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-parchment flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                    <step.icon className="h-6 w-6 text-warm-brown group-hover:text-terracotta transition-colors" />
                  </div>
                </div>

                <h3 className="font-heading text-lg text-rich-brown mb-2">
                  {step.title}
                </h3>
                <p className="text-warm-brown text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
