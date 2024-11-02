import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
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
      <h2 className='text-xl font-semibold text-left mb-3'>Skills</h2>
      <div className='flex flex-wrap gap-2 mb-8'>
        {skillsList.map((skill, index) => (
          <Badge
            key={index}
            variant='outline'
            className='rounded-full font-normal text-sm cursor-pointer'
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
