import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

import githubLogo from "@/public/github.svg";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const OpenSourceSection = () => {
  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>Opensource</h2>
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

export default OpenSourceSection;
