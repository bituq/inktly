"use client";

import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export function TextInput({
  value,
  onChange,
  maxLength = 500,
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="font-heading text-lg text-rich-brown">
        Jouw Bericht
      </label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        placeholder="Schrijf hier je persoonlijke bericht..."
        className="min-h-[200px] bg-warm-white border-sand focus:border-terracotta focus:ring-terracotta resize-none text-rich-brown"
      />
      <div className="text-right text-sm text-warm-brown">
        {value.length}/{maxLength} karakters
      </div>
    </div>
  );
}
