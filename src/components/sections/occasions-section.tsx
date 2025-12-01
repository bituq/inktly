"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Baby,
  Heart,
  HeartHandshake,
  Snowflake,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Occasion {
  title: string;
  description: string;
  example: string;
  icon: LucideIcon;
  color: string;
}

const occasions: Occasion[] = [
  {
    title: "Verjaardagen",
    description:
      "Laat iemand weten dat je aan ze denkt op hun speciale dag",
    example: "\"Van harte gefeliciteerd met je verjaardag! Geniet van je dag.\"",
    icon: Gift,
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    title: "Geboorte",
    description:
      "Feliciteer kersverse ouders met een persoonlijk welkom",
    example: "\"Wat een wonder! Gefeliciteerd met jullie kleine spruit.\"",
    icon: Baby,
    color: "bg-sage/20 text-sage-dark",
  },
  {
    title: "Condoleance",
    description:
      "Toon medeleven in moeilijke tijden met oprechte woorden",
    example: "\"Veel sterkte in deze moeilijke tijd. We denken aan jullie.\"",
    icon: HeartHandshake,
    color: "bg-warm-brown/10 text-warm-brown",
  },
  {
    title: "Bedankjes",
    description:
      "Zeg dankjewel op een manier die echt binnenkomt",
    example: "\"Bedankt voor alles wat je voor ons hebt gedaan.\"",
    icon: Heart,
    color: "bg-terracotta-light/20 text-terracotta",
  },
  {
    title: "Feestdagen",
    description:
      "Kerst, Nieuwjaar of Pasen — maak het persoonlijk",
    example: "\"Fijne feestdagen en een gelukkig nieuwjaar gewenst!\"",
    icon: Snowflake,
    color: "bg-sand text-rich-brown",
  },
  {
    title: "Zomaar",
    description:
      "Gewoon omdat je aan iemand denkt. Dat is vaak het mooiste",
    example: "\"Ik dacht aan je en wilde even laten weten dat ik om je geef.\"",
    icon: Sparkles,
    color: "bg-parchment text-warm-brown",
  },
];

export function OccasionsSection() {
  return (
    <section id="gelegenheden" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-terracotta font-medium mb-3">
            Voor elk bijzonder moment
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-rich-brown mb-4">
            Wanneer stuur je een handgeschreven kaart?
          </h2>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Een handgeschreven kaart laat zien dat je echt de moeite hebt genomen.
            Het is een klein gebaar met een grote impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-warm-white rounded-xl p-6 border border-sand hover:border-terracotta/30 hover:shadow-card transition-all h-full">
                <div
                  className={`w-12 h-12 rounded-xl ${occasion.color} flex items-center justify-center mb-4`}
                >
                  <occasion.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl text-rich-brown mb-2">
                  {occasion.title}
                </h3>
                <p className="text-warm-brown text-sm mb-4">
                  {occasion.description}
                </p>
                <p
                  className="text-sm italic text-warm-brown/70 border-l-2 border-terracotta/30 pl-3"
                  style={{ fontFamily: "var(--font-dancing-script), cursive" }}
                >
                  {occasion.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
