"use client";

import { motion } from "framer-motion";
import { HandwritingPreview } from "@/components/features/handwriting-preview";

export function HandwritingPreviewSection() {
  return (
    <section id="handschriften" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-terracotta font-medium mb-3">
            Live preview
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-rich-brown mb-4">
            Probeer het zelf
          </h2>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Typ je bericht en kies een handschriftstijl om direct te zien hoe
            jouw kaart eruit komt te zien
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HandwritingPreview />
        </motion.div>
      </div>
    </section>
  );
}
