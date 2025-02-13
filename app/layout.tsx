import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/ThemeContext"; // Import ThemeProvider
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppFragmentGlareLight = localFont({
  src: "./fonts/pp-fragment-glare-light.ttf",
  variable: "--font-pp-fragment-glare-light",
});
const departureMono = localFont({
  src: "./fonts/departure-mono.woff",
  variable: "--font-departure-mono",
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
        className={`${ppFragmentGlareLight.variable} ${departureMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
          <GoogleAnalytics gaId="G-G1BEZ46KNJ" />
        </ThemeProvider>
      </body>
    </html>
  );
}
