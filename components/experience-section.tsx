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
  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>Experience</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8'>
        {/* IRIS Software Group */}
        <Card className='rounded-2xl w-full lg:w-48'>
          <CardHeader className='pb-0 text-sm font-medium'>
            <img
              src={irisLogo.src}
              alt='IRIS Software Group'
              className='mb-2 w-10 h-10 object-contain'
            />
            IRIS Software Group
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              Sep 2023 - Present <br /> 1 yr 3 mos
            </CardDescription>
          </CardContent>
        </Card>
        {/* Capgemini */}
        <Card className='rounded-2xl w-full lg:w-48'>
          <CardHeader className='pb-0 text-sm font-medium'>
            <img
              src={capgeminiLogo.src}
              alt='Capgemini'
              className='mb-2 w-6 h-10 object-contain'
            />
            Capgemini
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              Mar 2021 - Sep 2023 <br /> 2 yrs 7 mos
            </CardDescription>
          </CardContent>
        </Card>
        {/* Sports Vision */}
        <Card className='rounded-2xl w-full lg:w-48'>
          <CardHeader className='pb-0 text-sm font-medium'>
            <img
              src={sportsVisionLogo.src}
              alt='Sports Vision'
              className='mb-2 w-10 h-10 object-contain'
            />
            Sports Vision
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              Oct 2018 - Feb 2021 <br /> 2 yrs 5 mos
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
