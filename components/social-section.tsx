import Image, { StaticImageData } from "next/image";
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
  type SocialVariant = "twitter" | "linkedin" | "instagram" | "discord";

  const socials: {
    id: number;
    name: string;
    handle: string;
    link: string;
    logo: StaticImageData;
    variant: SocialVariant;
  }[] = [
    {
      id: 1,
      name: "Twitter",
      handle: "@niurdhuuu",
      link: "https://x.com/nirudhuuu",
      logo: twitterLogo,
      variant: "twitter",
    },
    {
      id: 2,
      name: "LinkedIn",
      handle: "jwala-anirudh",
      link: "https://www.linkedin.com/in/jwala-anirudh/",
      logo: linkedInLogo,
      variant: "linkedin",
    },
    {
      id: 3,
      name: "Instagram",
      handle: "anirudhjwala",
      link: "https://www.instagram.com/anirudhjwala/",
      logo: instagramLogo,
      variant: "instagram",
    },
    {
      id: 4,
      name: "Discord",
      handle: "anirudhjwala",
      link: "https://discord.gg/6vYVwNAR",
      logo: discordLogo,
      variant: "discord",
    },
  ];

  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>Socials</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8'>
        {socials.map((social) => (
          <Card key={social.id} className='rounded-2xl w-full lg:w-48'>
            <CardHeader className='pb-0 text-sm'>
              <Image
                src={social.logo}
                alt={social.name}
                width={40}
                height={40}
                className='rounded-[10px] mb-2'
              />
              {social.name}
            </CardHeader>
            <CardContent>
              <CardDescription className='pb-3 text-sm'>
                {social.handle}
              </CardDescription>
              <Link href={social.link} target='_blank'>
                <Button
                  className='rounded-full text-xs font-semibold'
                  variant={social.variant}
                >
                  {social.name === "Discord" ? "Add Friend" : "Connect"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
