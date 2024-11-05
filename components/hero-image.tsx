"use client";

import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

import anirudhImage from "@/public/images/anirudh.webp";

const HeroImage = () => {
  const [isHoveringHeroImage, setIsHoveringHeroImage] = useState(false);

  return (
    <RoughNotation
      type='circle'
      color='#df8c4a'
      animationDelay={100}
      show={isHoveringHeroImage}
      padding={30}
    >
      <img
        className='rounded-xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:shadow-xl hover:-rotate-3'
        src={anirudhImage.src}
        alt='Anirudh Jwala'
        width={250}
        height={56}
        onMouseEnter={() => setIsHoveringHeroImage(true)}
        onMouseLeave={() => setIsHoveringHeroImage(false)}
      />
    </RoughNotation>
  );
};

export default HeroImage;
