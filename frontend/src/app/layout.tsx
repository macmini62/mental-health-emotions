import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["500", "400", "300", "100", "700"]
});

const interMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
  weight: ["500", "400", "300", "100", "700"]
});

export const metadata: Metadata = {
  icons: "public/eMOTIONS-small.png",
  title: "eMOTIONS"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className} ${interMono.className} antialiased bg-white text-black`}
      >
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}

