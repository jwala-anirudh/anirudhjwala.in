import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Anirudh Jwala",
  description: "Uh oh! This page does not exist",
};

const NotFound = (): JSX.Element => (
  <div className='flex flex-col'>
    <h1>404 - Page not found</h1>
    <p className='text-secondary'>Uh oh! This page does not exists…</p>
    <div className='h-2' />
    <Link href='/'>Return home</Link>
  </div>
);

export default NotFound;
