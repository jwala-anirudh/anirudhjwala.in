import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import linkedInLogo from "@/public/svg/linkedin.svg";
import twitterLogo from "@/public/svg/twitter.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type SocialVariant = "twitter" | "linkedin" | "instagram" | "discord";

type SocialButton = {
  id: number;
  name: string;
  handle: string;
  link: string;
  logo: StaticImageData;
  variant: SocialVariant;
  label: string;
};

const SocialSection = () => {
  const socials: SocialButton[] = [
    {
      id: 1,
      name: "X (Twitter)",
      handle: "@niurdhuuu",
      link: "https://x.com/nirudhuuu",
      logo: twitterLogo,
      variant: "twitter",
      label: "Follow",
    },
    {
      id: 2,
      name: "LinkedIn",
      handle: "jwala-anirudh",
      link: "https://www.linkedin.com/in/jwala-anirudh/",
      logo: linkedInLogo,
      variant: "linkedin",
      label: "Connect",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8">
      {socials.map((social) => (
        <Card key={social.id} className="rounded-2xl w-full h-fit lg:w-48">
          <CardHeader className="pb-0 text-sm">
            <Image
              src={social.logo}
              alt={social.name}
              width={40}
              height={40}
              className="rounded-[10px] mb-2"
            />
            {social.name}
          </CardHeader>
          <CardContent>
            <CardDescription className="pb-3 text-sm font-[family-name:var(--font-departure-mono)]">
              {social.handle}
            </CardDescription>
            <Link href={social.link} target="_blank">
              <Button
                className="rounded-full text-xs font-semibold"
                variant={social.variant}
              >
                {social.label}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SocialSection;
