import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

// Components
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

const Home = () => {
  return (
    <div className='grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start mb-4'>
        <HeroSection />
        <h1 className='text-4xl xl:text-5xl font-semibold'>Anirudh Jwala</h1>
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

        <div className='flex gap-4 items-center flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='https://github.com/jwala-anirudh'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='invert dark:invert-0'
              src='https://www.svgrepo.com/show/303615/github-icon-1-logo.svg'
              alt='Github logomark'
              width={20}
              height={20}
            />
            Github
          </a>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='https://www.linkedin.com/in/jwala-anirudh/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='invert-0 dark:invert'
              src='https://www.svgrepo.com/show/512419/linkedin-161.svg'
              alt='LinkedIn logomark'
              width={16}
              height={18}
            />
            LinkedIn
          </a>
          {/* <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='https://x.com/nirudhuuu'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='invert-0 dark:invert'
              src='https://www.svgrepo.com/show/513008/twitter-154.svg'
              alt='Twitter logomark'
              width={16}
              height={18}
            />
            Twitter
          </a> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
