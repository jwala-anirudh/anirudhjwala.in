import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import githubLogo from "@/public/svg/github.svg";
import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

const OpenSourceSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]'>
        Opensource
      </h2>
      <div className='flex flex-wrap mb-8'>
        <Card className='rounded-3xl cursor-pointer w-full 2xl:w-fit'>
          <CardHeader className='pb-6 text-sm'>
            <div className='flex justify-between'>
              <section>
                <Image
                  src={githubLogo}
                  alt='twitter'
                  width={40}
                  height={40}
                  className='rounded-[10px] mb-2'
                />
                Anirudh Jwala
              </section>
              <Link href={"https://github.com/jwala-anirudh"} target='_blank'>
                <Button
                  className='rounded text-xs font-bold mt-4 font-[family-name:var(--font-departure-mono)]'
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

export default OpenSourceSection;
