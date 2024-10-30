import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

const Footer = () => {
  return (
    <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
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
        blogs
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
        <RoughNotation
          type='underline'
          color='#df8c4a'
          animationDelay={500}
          show
        >
          tweets
        </RoughNotation>
      </a>
      <a
        className='flex items-center gap-2 hover:underline hover:underline-offset-4'
        href='https://github.com/hiteshchoudhary/apihub'
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
        opensource
      </a>
      {/* <a
        className='flex items-center gap-2 hover:underline hover:underline-offset-4'
        href='https://www.npmjs.com/package/angular2-cookie-law-banner'
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
        interesting dependency
      </a> */}
    </footer>
  );
};

export default Footer;
