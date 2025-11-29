"use client";

import { cn } from "@/lib/utils";

interface PreviewCanvasProps {
  text: string;
  fontFamily: string;
  className?: string;
}

export function PreviewCanvas({
  text,
  fontFamily,
  className,
}: PreviewCanvasProps) {
  return (
    <div
      className={cn(
        "relative bg-warm-white rounded-2xl p-8 min-h-[350px] shadow-card border border-sand",
        className
      )}
    >
      {/* Paper Lines */}
      <div
        className="absolute inset-8 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, #E8DDD0 31px, #E8DDD0 32px)",
        }}
      />

      {/* Red Margin Line */}
      <div className="absolute left-12 top-8 bottom-8 w-px bg-terracotta-light/40" />

      {/* Handwritten Text */}
      <div className="relative z-10 pl-6">
        <p
          className="text-2xl leading-[32px] text-rich-brown whitespace-pre-wrap"
          style={{ fontFamily }}
        >
          {text || "Begin met typen om je handschrift te zien..."}
        </p>
      </div>
    </div>
  );
}
