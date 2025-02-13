"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";

import anirudhImage from "@/public/images/anirudh.webp";

const HeroImage = () => {
  const [isHoveringHeroImage, setIsHoveringHeroImage] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Set initial theme class on document
    document.documentElement.classList.add(theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    // Remove old theme class
    document.documentElement.classList.remove(theme);
    // Add new theme class
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <RoughNotation
      type="circle"
      color="#df8c4a"
      animationDelay={100}
      show={isHoveringHeroImage}
      padding={30}
    >
      <Image
        className="rounded-xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:shadow-xl hover:-rotate-3"
        src={anirudhImage}
        alt="Anirudh Jwala"
        width={250}
        height={56}
        onMouseEnter={() => setIsHoveringHeroImage(true)}
        onMouseLeave={() => setIsHoveringHeroImage(false)}
        onClick={toggleTheme}
        title={`Click to switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      />
    </RoughNotation>
  );
};

export default HeroImage;
