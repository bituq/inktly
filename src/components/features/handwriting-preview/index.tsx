"use client";

import { useState } from "react";
import { TextInput } from "./text-input";
import { StyleSelector } from "./style-selector";
import { PreviewCanvas } from "./preview-canvas";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import handwritingStylesData from "@/data/handwriting-styles.json";
import type { HandwritingStyle } from "@/types";

const handwritingStyles = handwritingStylesData as HandwritingStyle[];

const DEFAULT_TEXT = `Lieve vriend,

Bedankt voor alles wat je voor me doet. Je vriendschap betekent zoveel voor me.

Met liefde,
Jouw naam`;

export function HandwritingPreview() {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [selectedStyle, setSelectedStyle] = useState(handwritingStyles[0]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Input Side */}
      <div className="space-y-6">
        <TextInput value={text} onChange={setText} maxLength={500} />
        <StyleSelector
          styles={handwritingStyles}
          selectedStyle={selectedStyle}
          onStyleSelect={setSelectedStyle}
        />
      </div>

      {/* Preview Side */}
      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-lg text-rich-brown mb-4">
            Preview
          </h3>
          <PreviewCanvas text={text} fontFamily={selectedStyle.fontFamily} />
        </div>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-terracotta hover:bg-terracotta-dark text-white shadow-button"
          >
            Maak Deze Kaart
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
