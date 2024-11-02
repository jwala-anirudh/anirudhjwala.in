import Link from "next/link";

import twitterLogo from "@/public/svg/twitter.svg";
import linkedInLogo from "@/public/svg/linkedin.svg";
import instagramLogo from "@/public/svg/instagram.svg";
import discordLogo from "@/public/svg/discord.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>Socials</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8'>
        {/* Twitter */}
        <Card className='rounded-2xl w-full lg:w-48'>
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
        <Card className='rounded-2xl w-full lg:w-48'>
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
        <Card className='rounded-2xl w-full lg:w-48'>
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
        {/* Discord */}
        <Card className='rounded-2xl w-full lg:w-48'>
          <CardHeader className='pb-0 text-sm'>
            <img
              src={discordLogo.src}
              alt='twitter'
              width={40}
              height={40}
              className='rounded-[10px] mb-2'
            />
            Discord
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              anirudhjwala
            </CardDescription>
            <Link href={"https://discord.gg/6vYVwNAR"} target='_blank'>
              <Button
                className='rounded-full text-xs font-semibold'
                variant='discord'
              >
                Add Friend
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialSection;
