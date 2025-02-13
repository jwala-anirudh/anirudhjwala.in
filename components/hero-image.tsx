"use client";

import { useTheme } from "@/context/ThemeContext";
import anirudhImage from "@/public/images/anirudh.webp";
import Image from "next/image";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const HeroImage = () => {
  const [isHoveringHeroImage, setIsHoveringHeroImage] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleInteractionStart = () => {
    setIsHoveringHeroImage(true);
  };

  const handleInteractionEnd = () => {
    setIsHoveringHeroImage(false);
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
        className={`rounded-xl transition-all duration-300 cursor-pointer filter
          ${
            isHoveringHeroImage
              ? "grayscale-0 -rotate-3 shadow-xl"
              : "grayscale"
          }`}
        src={anirudhImage}
        alt="Anirudh Jwala"
        width={250}
        height={56}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onClick={toggleTheme}
        title={`Click to switch to ${theme === "dark" ? "light" : "dark"} mode`}
      />
    </RoughNotation>
  );
};

export default HeroImage;
