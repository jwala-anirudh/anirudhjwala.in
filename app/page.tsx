"use client";

import { useEffect, useRef } from "react";

import HeroSection from "@/components/hero-section";
import BodySection from "@/components/body-section";
import Footer from "@/components/footer";

const Home = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const bodySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const bodySection = bodySectionRef.current;

    if (heroSection && bodySection) {
      const syncScroll = (e: WheelEvent) => {
        e.preventDefault();
        bodySection.scrollTop += e.deltaY;
      };

      heroSection.addEventListener("wheel", syncScroll, { passive: false });

      return () => {
        heroSection.removeEventListener("wheel", syncScroll);
      };
    }
  }, []);

  return (
    <div className='flex font-[family-name:var(--font-geist-sans)]'>
      <div className='flex flex-col lg:flex-row w-full'>
        <div
          ref={heroSectionRef}
          className='lg:sticky lg:top-0 lg:h-screen lg:flex-none'
        >
          <HeroSection />
        </div>
        <div
          ref={bodySectionRef}
          className='flex-grow lg:h-screen overflow-auto'
        >
          <BodySection />
        </div>
        <div className='block md:hidden'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
