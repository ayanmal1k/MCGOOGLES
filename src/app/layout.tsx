import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

const sora = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "McGoogles — The Burger Empire Meme Token",
  description: "Meet McGoogles, the legendary frog who made it big in crypto and launched a global restaurant empire. Join the movement, secure the burger, and swap SOL for $MCGOOGLES.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  keywords: ["McGoogles", "Meme Coin", "Solana", "Crypto Restaurant", "Burger Empire", "SOL Meme Token", "Raydium", "Jupiter Swap"],
  openGraph: {
    title: "McGoogles — The Burger Empire Meme Token",
    description: "The official token of the McGoogles restaurant franchise on Solana. Swaps, utilities, and free burgers for holders.",
    url: "https://mcgoogles.fun",
    siteName: "McGoogles",
    images: [
      {
        url: "/hero mcgoogles.png",
        width: 1200,
        height: 630,
        alt: "McGoogles Burger Empire",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "McGoogles — The Burger Empire Meme Token",
    description: "The official token of the McGoogles restaurant franchise on Solana. Swaps, utilities, and free burgers for holders.",
    images: ["/hero mcgoogles.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${syne.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Script
          src="https://cdn.zanderio.ai/widget/loader.js"
          data-id="wdg_UgdrBA01NcJsOMixYiBJCO0w"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
