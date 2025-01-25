"use client";

import { useEffect, useRef } from "react";

import HeroSection from "@/components/hero-section";
import BodySection from "@/components/body-section";

const Home = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const bodySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const bodySection = bodySectionRef.current;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const syncScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (bodySection) {
        bodySection.scrollTop += e.deltaY;
      }
    };

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        heroSection?.addEventListener("wheel", syncScroll, { passive: false });
      } else {
        heroSection?.removeEventListener("wheel", syncScroll);
      }
    };

    if (mediaQuery.matches) {
      heroSection?.addEventListener("wheel", syncScroll, { passive: false });
    }

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      heroSection?.removeEventListener("wheel", syncScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="flex font-[family-name:var(--font-pp-fragment-glare-light)]">
      <div className="flex flex-col lg:flex-row w-full">
        <div
          ref={heroSectionRef}
          className="lg:sticky lg:top-0 lg:h-screen lg:flex-none"
        >
          <HeroSection />
        </div>
        <div
          ref={bodySectionRef}
          className="flex-grow lg:h-screen overflow-auto"
        >
          <BodySection />
        </div>
      </div>
    </div>
  );
};

export default Home;
