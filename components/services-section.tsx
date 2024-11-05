"use client";

import { useCallback } from "react";
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
  const services = [
    {
      id: 1,
      title: "Web App Development",
      description:
        "Full-stack web application development in MERN stack / Next.js / MEAN stack",
      price: 48000,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Mobile application development in React Native",
      price: 36000,
    },
    {
      id: 3,
      title: "Consultation",
      description:
        "60-min consultation with roadmap, strategy, and action plan",
      price: 3500,
    },
    {
      id: 4,
      title: "Quick Connect",
      description:
        "If you are not sure about the service, book a consultation first",
      price: 500,
    },
  ];

  const servicePayNow = useCallback(() => {
    toast("Coming soon", {
      description:
        "We are working with our payment gateway partner, soon you will be able to pay online.",
      action: {
        label: "Close",
        onClick: () => console.log("Thank you for your interest"),
      },
    });
  }, []);

  return (
    <section className='mb-4'>
      <h2 className='text-xl font-semibold text-left mb-3'>Services</h2>
      <div className='flex flex-wrap gap-4 mb-2'>
        {services.map((service) => (
          <Card key={service.id} className='flex-1 w-full md:min-w-[300px]'>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-lg font-semibold'>₹{service.price}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button onClick={servicePayNow}>Pay now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className='text-sm text-gray-500'>
        * Price may vary based on the complexity
      </p>
    </section>
  );
};

export default ServicesSection;
