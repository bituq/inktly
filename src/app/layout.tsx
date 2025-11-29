import type { Metadata } from "next";
import {
  Bree_Serif,
  Inter,
  Dancing_Script,
  Patrick_Hand,
  Caveat,
  Kalam,
  Indie_Flower,
  Shadows_Into_Light,
} from "next/font/google";
import "./globals.css";

const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Handwriting fonts
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
});

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-indie-flower",
  display: "swap",
});

const shadowsIntoLight = Shadows_Into_Light({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shadows-into-light",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inktly - Handgeschreven Kaarten met een Persoonlijke Touch",
  description:
    "Verstuur prachtige handgeschreven kaarten geschreven door onze robots. Perfect voor bedankjes, verjaardagen en speciale momenten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${breeSerif.variable} ${inter.variable} ${dancingScript.variable} ${patrickHand.variable} ${caveat.variable} ${kalam.variable} ${indieFlower.variable} ${shadowsIntoLight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
