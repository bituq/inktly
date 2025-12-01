"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Hoe het werkt", href: "#hoe-het-werkt", id: "hoe-het-werkt" },
  { name: "Gelegenheden", href: "#gelegenheden", id: "gelegenheden" },
  { name: "Handschriften", href: "#handschriften", id: "handschriften" },
  { name: "Veelgestelde vragen", href: "#faq", id: "faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navigation.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
          },
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <PenLine className="h-8 w-8 text-terracotta transition-transform group-hover:rotate-[-10deg]" />
          <span className="font-heading text-2xl text-rich-brown">Inktly</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "relative px-4 py-2 text-warm-brown hover:text-terracotta transition-colors font-medium rounded-lg",
                activeSection === item.id && "text-terracotta",
              )}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-terracotta rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-terracotta hover:bg-terracotta-dark text-white transition-all hover:scale-[1.02] hover:shadow-md">
            Verstuur een kaart
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-sand/50">
              <Menu className="h-6 w-6 text-rich-brown" />
              <span className="sr-only">Menu openen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-cream border-sand">
            <div className="flex flex-col gap-6 mt-8">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <PenLine className="h-8 w-8 text-terracotta" />
                <span className="font-heading text-2xl text-rich-brown">
                  Inktly
                </span>
              </Link>
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "text-left text-lg text-warm-brown hover:text-terracotta transition-colors font-medium py-2 px-3 rounded-lg hover:bg-sand/30",
                      activeSection === item.id &&
                        "text-terracotta bg-terracotta/5",
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              <Button className="mt-4 bg-terracotta hover:bg-terracotta-dark text-white">
                Verstuur een kaart
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
