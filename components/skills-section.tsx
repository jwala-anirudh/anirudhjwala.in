"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillsList = [
    "Java",
    "TypeScript",
    "React.js",
    "Angular",
    "Next.js",
    "Express.js",
    "Spring Boot",
    "React Native",
    "NgRx",
    "Redux toolkit",
    "RESTful APIs",
    "Single SPA",
    "Stencil",
    "Jasmine",
    "Jest",
    "SQL",
    "MongoDB",
    "Git",
    "Jenkins",
    "TeamCity",
  ];

  return (
    <section>
      <h2 className='text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]'>
        Skills
      </h2>
      <div className='flex flex-wrap gap-2 mb-8'>
        {skillsList.map((skill, index) => (
          <Badge
            key={index}
            variant={hoveredIndex === index ? "secondary" : "outline"}
            className='rounded-full font-normal text-sm cursor-pointer'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
