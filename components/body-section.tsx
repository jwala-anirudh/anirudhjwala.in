import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import twitterLogo from "@/public/twitter.svg";
import linkedInLogo from "@/public/linkedin.svg";
import instagramLogo from "@/public/instagram.svg";
import githubLogo from "@/public/github.svg";

const BodySection = () => {
  return (
    <section className='px-6 py-4 lg:mt-8 xl:mt-10'>
      <h2 className='text-xl font-bold text-left mb-3'>Socials</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8'>
        {/* Twitter */}
        <Card className='rounded-3xl cursor-pointer w-full lg:w-48'>
          <CardHeader className='pb-0 text-sm'>
            <img
              src={twitterLogo.src}
              alt='twitter'
              width={40}
              height={40}
              className='rounded-[10px] mb-2'
            />
            Twitter
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              @niurdhuuu
            </CardDescription>
            <Link href={"https://x.com/nirudhuuu"} target='_blank'>
              <Button
                className='rounded-full text-xs font-semibold'
                variant='twitter'
              >
                Follow
              </Button>
            </Link>
          </CardContent>
        </Card>
        {/* LinkedIn */}
        <Card className='rounded-3xl cursor-pointer w-full lg:w-48'>
          <CardHeader className='pb-0 text-sm'>
            <img
              src={linkedInLogo.src}
              alt='twitter'
              width={40}
              height={40}
              className='rounded-[10px] mb-2'
            />
            LinkedIn
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              jwala-anirudh
            </CardDescription>
            <Link
              href={"https://www.linkedin.com/in/jwala-anirudh/"}
              target='_blank'
            >
              <Button
                className='rounded-full text-xs font-semibold'
                variant='linkedin'
              >
                Connect
              </Button>
            </Link>
          </CardContent>
        </Card>
        {/* Instagram */}
        <Card className='rounded-3xl cursor-pointer w-full lg:w-48'>
          <CardHeader className='pb-0 text-sm'>
            <img
              src={instagramLogo.src}
              alt='twitter'
              width={40}
              height={40}
              className='rounded-[10px] mb-2'
            />
            Instagram
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              anirudhjwala
            </CardDescription>
            <Link
              href={"https://www.instagram.com/anirudhjwala/"}
              target='_blank'
            >
              <Button
                className='rounded-full text-xs font-semibold'
                variant='instagram'
              >
                Follow
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <h2 className='text-xl font-bold text-left mb-3'>Work</h2>
      <div className='flex flex-wrap mb-8'>
        {/* GitHub */}
        <Card className='rounded-3xl cursor-pointer w-full'>
          <CardHeader className='pb-6 text-sm'>
            <div className='flex justify-between'>
              <section>
                <img
                  src={githubLogo.src}
                  alt='twitter'
                  width={40}
                  height={40}
                  className='rounded-[10px] mb-2'
                />
                Anirudh Jwala
              </section>
              <Link href={"https://github.com/jwala-anirudh"} target='_blank'>
                <Button
                  className='rounded text-xs font-bold mt-4'
                  variant='outline'
                >
                  Follow
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <GitHubCalendar
              username='jwala-anirudh'
              colorScheme='light'
              hideMonthLabels
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BodySection;
