"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import productsData from "@/data/products.json";
import type { Product } from "@/types";

const products = productsData as Product[];
const categories = ["Alle", ...new Set(products.map((p) => p.category))];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredProducts =
    activeCategory === "Alle"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="kaarten" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-terracotta font-medium mb-3">
            Kies jouw kaart
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-rich-brown mb-4">
            Prachtige ontwerpen om uit te kiezen
          </h2>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Selecteer een kaart die past bij jouw boodschap, of upload je eigen ontwerp
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                activeCategory === category
                  ? "bg-terracotta text-white shadow-button"
                  : "bg-parchment text-warm-brown hover:bg-sand"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-warm-white hover:shadow-card-hover transition-all border-sand">
                {/* Card Image Placeholder */}
                <div className="aspect-[3/4] relative overflow-hidden bg-parchment">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-warm-white rounded-lg shadow-card flex items-center justify-center">
                      <span className="text-2xl text-warm-brown font-heading">
                        {product.name.split(" - ")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-rich-brown/0 group-hover:bg-rich-brown/10 transition-colors" />
                </div>
                <CardContent className="p-4">
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-parchment text-warm-brown"
                  >
                    {product.category}
                  </Badge>
                  <h3 className="font-heading text-lg text-rich-brown">
                    {product.name}
                  </h3>
                  <p className="text-sm text-warm-brown mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl text-terracotta">
                      &euro;{product.price.toFixed(2)}
                    </span>
                    <Button
                      size="sm"
                      className="bg-terracotta hover:bg-terracotta-dark text-white"
                    >
                      Kiezen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
          >
            Bekijk Alle Kaarten
          </Button>
        </div>
      </div>
    </section>
  );
}
