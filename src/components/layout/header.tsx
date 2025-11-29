"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Hoe het werkt", href: "#hoe-het-werkt" },
  { name: "Kaarten", href: "#kaarten" },
  { name: "Handschriften", href: "#handschriften" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <PenLine className="h-8 w-8 text-terracotta" />
          <span className="font-heading text-2xl text-rich-brown">Inktly</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-warm-brown hover:text-terracotta transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-terracotta hover:bg-terracotta-dark text-white">
            Begin met ontwerpen
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-rich-brown" />
              <span className="sr-only">Menu openen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-cream">
            <div className="flex flex-col gap-6 mt-8">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <PenLine className="h-8 w-8 text-terracotta" />
                <span className="font-heading text-2xl text-rich-brown">
                  Inktly
                </span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-warm-brown hover:text-terracotta transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Button className="mt-4 bg-terracotta hover:bg-terracotta-dark text-white">
                Begin met ontwerpen
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
