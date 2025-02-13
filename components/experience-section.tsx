'use client';

import { differenceInMonths, differenceInYears, parse } from 'date-fns';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

import capgeminiLogo from '@/public/svg/capgemini.svg';
import irisLogo from '@/public/svg/iris.svg';
import sportsVisionLogo from '@/public/svg/sportsvision.svg';
import { useEffect, useState } from 'react';

const calculateDuration = (startDate: string, endDate: string) => {
  const start = parse(startDate, 'MMM yyyy', new Date());
  const end =
    endDate === 'Present' ? new Date() : parse(endDate, 'MMM yyyy', new Date());

  const years = differenceInYears(end, start);
  const months = (differenceInMonths(end, start) % 12) + 1;

  return `${years} yr${years !== 1 ? 's' : ''} ${months} mo${
    months !== 1 ? 's' : ''
  }`;
};

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: 'IRIS Software Group',
      logo: irisLogo,
      position: 'Software Engineer',
      startDate: 'Sep 2023',
      endDate: 'Present',
    },
    {
      id: 2,
      company: 'Capgemini',
      logo: capgeminiLogo,
      position: 'Senior Software Engineer',
      startDate: 'Mar 2021',
      endDate: 'Sep 2023',
    },
    {
      id: 3,
      company: 'Sports Vision',
      logo: sportsVisionLogo,
      position: 'Software Engineer',
      startDate: 'Oct 2018',
      endDate: 'Feb 2021',
    },
  ];

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Optional: Setup observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <h2 className='text-2xl font-semibold text-foreground mb-3 font-[family-name:var(--font-departure-mono)]'>
        Experience
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8'>
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            className={`rounded-2xl w-full lg:w-52 ${
              theme === 'dark' && 'bg-gray-600 border-gray-500'
            }`}
          >
            <CardHeader className='pb-0 text-sm'>
              <Image
                src={experience.logo}
                alt={experience.company}
                className={`mb-2 w-10 h-10 object-contain ${
                  theme === 'light' &&
                  experience.company === 'IRIS Software Group' &&
                  'invert'
                }`}
              />
              <span
                className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
                }`}
              >
                {experience.company}
              </span>
            </CardHeader>
            <CardContent>
              <CardDescription
                className={`pb-1 text-base font-semibold font-[family-name:var(--font-departure-mono)] ${
                  theme === 'dark' ? 'text-gray-100' : 'text-zinc-700'
                }`}
              >
                {experience.position}
              </CardDescription>
              <CardDescription
                className={`pb-3 text-sm ${
                  theme === 'dark' && 'text-gray-300'
                }`}
              >
                {experience.startDate} - {experience.endDate} <br />{' '}
                {calculateDuration(experience.startDate, experience.endDate)}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
