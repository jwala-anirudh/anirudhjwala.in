"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>About</h2>
      <div className='pr-4'>
        <p
          className={`text-base text-left md:text-justify mb-2 ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
        >
          Hey there! I&apos;m a software engineer with a knack for building
          efficient, intuitive digital experiences and a passion for turning
          complex challenges into elegant solutions. With nearly four years of
          hands-on experience, I&apos;ve had the privilege of working on
          projects that make a real difference. At IRIS Software Group, I&apos;m
          part of the team shaping IRIS Elements, a cloud-based platform
          that&apos;s simplifying life for accountants everywhere. From building
          AML dashboards for secure client assessments to crafting a reusable
          signup flow that reduced onboarding drop-offs by 60%, I&apos;m all
          about creating solutions that work, scale, and delight.
        </p>
        {isExpanded && (
          <>
            <p className='text-base text-left md:text-justify mb-2'>
              Before IRIS, I dove deep into the world of finance tech at
              Capgemini, collaborating with DBS Bank to develop an Anti-Money
              Laundering system that helped analysts detect and track suspicious
              activities. I’m proud of leading the charge to streamline
              multi-regional codebases and building custom CI/CD pipelines that
              brought real efficiency to our workflows. Each project has honed
              my skills and broadened my perspective on what tech can do.
            </p>
            <p className='text-base text-left md:text-justify mb-2'>
              Beyond the 9-to-5, you&apos;ll find me contributing to open-source
              projects, sharing my experiences through blogs, and continually
              tinkering with new tech. Whether I&apos;m mastering API
              integrations or crafting visualizations, I&apos;m constantly
              learning, exploring, and pushing the boundaries of what&apos;s
              possible.
            </p>
          </>
        )}
        <Button
          onClick={toggleExpand}
          variant='link'
          className='p-0 mb-2 text-blue-500'
        >
          {isExpanded ? "Read less" : "Read more"}
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
