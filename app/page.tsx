import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

import anirudhImage from "../public/anirudh.png";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <nav className='flex justify-between items-center p-4 w-full'>
        <div className='ml-auto'>
          <ModeToggle />
        </div>
      </nav>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image
          className='rounded-xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:shadow-xl'
          src={anirudhImage}
          alt='Anirudh Jwala'
          width={250}
          height={56}
          priority
        />
        <h1 className='text-4xl xl:text-5xl font-semibold'>Anirudh Jwala</h1>
        <ol className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>
            I work on all things{"\u00A0"}
            <RoughNotation type='underline' color='#df8c4a' show>
              Frontend
            </RoughNotation>
            {"\u00A0"}at <br className='block md:hidden' />
            <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
              IRIS Software Group
            </code>
          </li>
          <li className='mb-2'>Truly love working on Web</li>
        </ol>

        <div className='flex gap-4 items-center flex-col sm:flex-row'>
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
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        {/* <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          Examples
        </a> */}
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://blog.learncodeonline.in/razorpay-integration-in-react'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          latest blog
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://x.com/nirudhuuu'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/globe.svg'
            alt='Globe icon'
            width={16}
            height={16}
          />
          <RoughNotation type='highlight' color='#df8c4a' show>
            read tweets
          </RoughNotation>
        </a>
      </footer>
    </div>
  );
}
