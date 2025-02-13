"use client";

import { useTheme } from "@/context/ThemeContext";
import anirudhImage from "@/public/images/anirudh.webp";
import Image from "next/image";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const HeroImage = () => {
  const [isHoveringHeroImage, setIsHoveringHeroImage] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
