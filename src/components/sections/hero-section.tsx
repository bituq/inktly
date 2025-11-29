"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const trustPoints = [
  "Niet te onderscheiden van echt handschrift",
  "Binnen 3 werkdagen verzonden",
  "Geen minimale bestelling",
];

const handwrittenLines = [
  "Beste Thomas,",
  "",
  "Hartelijk dank voor de",
  "prettige samenwerking",
  "dit afgelopen jaar.",
  "",
  "Met vriendelijke groet,",
  "",
  "Anna de Vries",
];

function AnimatedHandwriting() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentLineChars, setCurrentLineChars] = useState(0);

  useEffect(() => {
    if (visibleLines >= handwrittenLines.length) return;
    const currentLine = handwrittenLines[visibleLines];
    if (currentLine === "") {
      const timeout = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCurrentLineChars(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
    if (currentLineChars < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentLineChars((c) => c + 1);
      }, 45);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCurrentLineChars(0);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, currentLineChars]);

  return (
    <div className="space-y-0">
      {handwrittenLines.map((line, lineIndex) => {
        if (lineIndex > visibleLines) return null;
        if (line === "") {
          return lineIndex <= visibleLines ? (
            <div key={lineIndex} className="h-7" />
          ) : null;
        }
        const displayText =
          lineIndex === visibleLines ? line.slice(0, currentLineChars) : line;
        const showCursor =
          lineIndex === visibleLines && currentLineChars < line.length;
        return (
          <p
            key={lineIndex}
            className="text-rich-brown text-xl leading-[29px]"
            style={{ fontFamily: "var(--font-dancing-script), cursive" }}
          >
            {displayText}
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-rich-brown/70 ml-0.5 align-middle"
              />
            )}
          </p>
        );
      })}
    </div>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", setDisplayValue);
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target]);
  return <span>{displayValue.toLocaleString("nl-NL")}</span>;
}

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
      setMousePosition({ x, y });
    },
    []
  );

  return (
    <section className="relative min-h-[90vh] flex items-center bg-cream overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm uppercase tracking-widest text-terracotta font-medium mb-4"
              >
                De toekomst van persoonlijke correspondentie
              </motion.p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-rich-brown leading-[1.1]">
                Handgeschreven kaarten op schaal
              </h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-warm-brown max-w-xl leading-relaxed"
            >
              Combineer de warmte van handgeschreven communicatie met het gemak
              van digitale technologie. Onze pennenrobots schrijven elke kaart
              met echte inkt, karakter voor karakter.
            </motion.p>
            <ul className="space-y-3">
              {trustPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-warm-brown"
                >
                  <CheckCircle className="h-5 w-5 text-sage flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                className="bg-terracotta hover:bg-terracotta-dark text-white text-base px-8 h-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Begin met ontwerpen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sand text-rich-brown hover:bg-parchment text-base px-8 h-12"
              >
                Bekijk voorbeelden
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex gap-12 pt-4 border-t border-sand"
            >
              <div>
                <p className="font-heading text-3xl text-rich-brown">
                  <AnimatedCounter target={12500} />+
                </p>
                <p className="text-sm text-warm-brown">Kaarten verstuurd</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-rich-brown">
                  <AnimatedCounter target={98} />%
                </p>
                <p className="text-sm text-warm-brown">Klanttevredenheid</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-rich-brown">
                  <AnimatedCounter target={6} />
                </p>
                <p className="text-sm text-warm-brown">Handschriftstijlen</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotateY: isHovered ? mousePosition.x : 0,
                  rotateX: isHovered ? -mousePosition.y : 0,
                }}
                transition={{ duration: 0.1 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <motion.div
                  className="absolute w-80 h-[420px] bg-warm-white rounded-lg shadow-card border border-sand/50"
                  animate={{
                    rotate: isHovered ? -8 : -6,
                    x: isHovered ? 20 : 16,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute w-80 h-[420px] bg-warm-white rounded-lg shadow-card border border-sand/50"
                  animate={{
                    rotate: isHovered ? 5 : 3,
                    x: isHovered ? -10 : -8,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="relative w-80 h-[420px] bg-warm-white rounded-lg border border-sand overflow-hidden"
                  animate={{
                    boxShadow: isHovered
                      ? "0 25px 50px -12px rgba(92, 64, 51, 0.25)"
                      : "0 8px 30px rgba(92, 64, 51, 0.12)",
                    y: isHovered ? -8 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="absolute inset-8 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 28px, #E8DDD0 28px, #E8DDD0 29px)",
                    }}
                  />
                  <div className="absolute left-10 top-8 bottom-8 w-px bg-terracotta-light/30" />
                  <div className="absolute inset-8 pt-4 pl-4">
                    <AnimatedHandwriting />
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-terracotta/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-sage/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
