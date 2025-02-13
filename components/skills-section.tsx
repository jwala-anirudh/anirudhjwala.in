"use client";

import { Badge } from "@/components/ui/badge";
import { JSX, useState } from "react";
// Skill icons
import {
  FaJava,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaJenkins,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiNgrx,
  SiRedux,
  SiPagekit,
  SiStencil,
  SiJasmine,
  SiJest,
  SiMongodb,
  SiTeamcity,
} from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillsList: Skill[] = [
    { name: "Java", icon: <FaJava /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Spring Boot", icon: <BiLogoSpringBoot /> },
    { name: "React Native", icon: <TbBrandReactNative /> },
    { name: "NgRx", icon: <SiNgrx /> },
    { name: "Redux toolkit", icon: <SiRedux /> },
    { name: "RESTful APIs", icon: <AiOutlineApi /> },
    { name: "Single SPA", icon: <SiPagekit /> },
    { name: "Stencil", icon: <SiStencil /> },
    { name: "Jasmine", icon: <SiJasmine /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "SQL", icon: <BiLogoPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "TeamCity", icon: <SiTeamcity /> },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {skillsList.map((skill, index) => (
          <Badge
            key={index}
            variant={hoveredIndex === index ? "secondary" : "outline"}
            className="rounded-full font-normal text-sm cursor-pointer flex items-center gap-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
