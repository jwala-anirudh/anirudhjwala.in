import { RoughNotation } from "react-rough-notation";

import HeroImage from "@/components/hero-image";
import Footer from "@/components/footer";

const HeroSection = () => {
  return (
    <div className='flex flex-col lg:min-h-screen'>
      <main className='flex flex-col gap-6 items-center sm:items-start pl-0 sm:px-14 md:pl-20 flex-grow'>
        <div className='mt-16'>
          <HeroImage />
        </div>
        <h1 className='text-4xl xl:text-5xl font-bold'>Anirudh Jwala</h1>
        <ol className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>
            I work on all things{" "}
            <RoughNotation
              type='highlight'
              color='#df8c4a'
              animationDelay={150}
              show
            >
              Frontend
            </RoughNotation>{" "}
            at <br className='block md:hidden' />
            IRIS Software
          </li>
          <li className='mb-2'>Truly love working on Web</li>
        </ol>
      </main>
      <div className='hidden lg:block lg:mx-8 lg:mb-16'>
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
