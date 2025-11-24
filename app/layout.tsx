import type { Metadata } from "next";
import {
  Playfair_Display,
  Lato,
  Dancing_Script,
  Cormorant_Garamond,
  Crimson_Pro,
  Great_Vibes,
  Allura,
  Satisfy,
  Montserrat,
  Raleway,
  Libre_Baskerville,
  Yeseva_One,
  Sahitya
} from "next/font/google";
import "./globals.css";

// Elegant Serif Options
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Script/Calligraphy Options
const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
});

// Modern/Clean Options
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Bohemian/Decorative
const yesevaOne = Yeseva_One({
  variable: "--font-yeseva",
  subsets: ["latin"],
  weight: ["400"],
});

const sahitya = Sahitya({
  variable: "--font-sahitya",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cholman Wedding RSVP",
  description: "Wedding RSVP",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${crimson.variable} ${libreBaskerville.variable} ${dancing.variable} ${greatVibes.variable} ${allura.variable} ${satisfy.variable} ${lato.variable} ${montserrat.variable} ${raleway.variable} ${yesevaOne.variable} ${sahitya.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-sahitya)' }}
      >
        {children}
      </body>
    </html>
  );
}
