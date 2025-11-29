"use client";

import type { HandwritingStyle } from "@/types";
import { cn } from "@/lib/utils";

interface StyleSelectorProps {
  styles: HandwritingStyle[];
  selectedStyle: HandwritingStyle;
  onStyleSelect: (style: HandwritingStyle) => void;
}

export function StyleSelector({
  styles,
  selectedStyle,
  onStyleSelect,
}: StyleSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg text-rich-brown">
        Kies Een Handschrift
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleSelect(style)}
            className={cn(
              "p-4 rounded-xl border-2 transition-all text-left hover:border-terracotta hover:shadow-sm",
              selectedStyle.id === style.id
                ? "border-terracotta bg-terracotta/5 shadow-sm"
                : "border-sand bg-warm-white"
            )}
          >
            <span
              className="block text-xl text-rich-brown truncate mb-1"
              style={{ fontFamily: style.fontFamily }}
            >
              {style.name}
            </span>
            <span className="text-xs text-warm-brown line-clamp-2">
              {style.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
