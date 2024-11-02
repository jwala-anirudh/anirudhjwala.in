"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesSection = () => {
  const servicePayNow = () => {
    toast("Coming soon", {
      description:
        "We are working with our payment gateway partner, soon you will be able to pay online.",
      action: {
        label: "Close",
        onClick: () => console.log("Thank you for your interest"),
      },
    });
  };

  return (
    <section className='mb-4'>
      <h2 className='text-xl font-semibold text-left mb-3'>Services</h2>
      <div className='flex flex-wrap gap-2 mb-2'>
        <Card className='flex-1 w-full md:min-w-[300px]'>
          <CardHeader>
            <CardTitle>Web App Development</CardTitle>
            <CardDescription>
              Full-stack web application development in MERN stack / Next.js /
              MEAN stack
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-lg font-semibold'>₹48,000</p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button onClick={servicePayNow}>Pay now</Button>
          </CardFooter>
        </Card>
        <Card className='flex-1 w-full md:min-w-[300px]'>
          <CardHeader>
            <CardTitle>Mobile App Development</CardTitle>
            <CardDescription>
              Mobile application development in React Native
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-lg font-semibold'>₹36,000</p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button onClick={servicePayNow}>Pay now</Button>
          </CardFooter>
        </Card>
        <Card className='flex-1 w-full md:min-w-[300px]'>
          <CardHeader>
            <CardTitle>Consultation</CardTitle>
            <CardDescription>
              60-min consultation with roadmap, strategy, and action plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-lg font-semibold'>₹3,500</p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button onClick={servicePayNow}>Pay now</Button>
          </CardFooter>
        </Card>
        <Card className='flex-1 w-full md:min-w-[300px]'>
          <CardHeader>
            <CardTitle>Quick Connect</CardTitle>
            <CardDescription>
              If you are not sure about the service, book a consultation first
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-lg font-semibold'>₹500</p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button onClick={servicePayNow}>Pay now</Button>
          </CardFooter>
        </Card>
      </div>
      <p className='text-sm text-gray-500'>
        * Price may vary based on the complexity
      </p>
    </section>
  );
};

export default ServicesSection;
