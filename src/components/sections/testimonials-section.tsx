"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import type { Testimonial } from "@/types";

const testimonials = testimonialsData as Testimonial[];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-terracotta font-medium mb-3">
            Ervaringen
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-rich-brown mb-4">
            Verhalen van blije afzenders
          </h2>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Ontdek hoe een handgeschreven kaart het verschil maakt
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-warm-white border-sand hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Text */}
                  <p className="text-warm-brown flex-grow mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-terracotta text-terracotta"
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-sand pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center text-warm-brown font-medium">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium text-rich-brown">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-warm-brown">
                          {testimonial.context}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
