import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import irisLogo from "@/public/svg/iris.svg";
import capgeminiLogo from "@/public/svg/capgemini.svg";
import sportsVisionLogo from "@/public/svg/sportsvision.svg";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "IRIS Software Group",
      logo: irisLogo,
      position: "Software Engineer",
      startDate: "Sep 2023",
      endDate: "Present",
      duration: "1 yr 3 mos",
    },
    {
      id: 2,
      company: "Capgemini",
      logo: capgeminiLogo,
      position: "Senior Software Engineer",
      startDate: "Mar 2021",
      endDate: "Sep 2023",
      duration: "2 yrs 7 mos",
    },
    {
      id: 3,
      company: "Sports Vision",
      logo: sportsVisionLogo,
      position: "Software Engineer",
      startDate: "Oct 2018",
      endDate: "Feb 2021",
      duration: "2 yrs 5 mos",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-left mb-3">Experience</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8">
        {experiences.map((experience) => (
          <Card key={experience.id} className="rounded-2xl w-full lg:w-52">
            <CardHeader className="pb-0 text-sm">
              <Image
                src={experience.logo}
                alt={experience.company}
                className="mb-2 w-10 h-10 object-contain"
              />
              <span className="text-slate-600">{experience.company}</span>
            </CardHeader>
            <CardContent>
              <CardDescription className="pb-1 text-base font-medium text-zinc-700">
                {experience.position}
              </CardDescription>
              <CardDescription className="pb-3 text-sm">
                {experience.startDate} - {experience.endDate} <br />{" "}
                {experience.duration}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
