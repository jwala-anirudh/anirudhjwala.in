import type { Metadata } from "next";
import localFont from "next/font/local";

import { GoogleAnalytics } from "@next/third-parties/google";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anirudh Jwala",
  description:
    "Software Engineer with 4 years of software engineering experience in startups and MNCs, currently building accounting software at IRIS. Specialized in sports tech, banking (AML), and tax solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-G1BEZ46KNJ" />
      </body>
    </html>
  );
}
