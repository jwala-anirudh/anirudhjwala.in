import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import emailLogo from "@/public/svg/email.svg";
import phoneLogo from "@/public/svg/phone.svg";
import addressLogo from "@/public/svg/address.svg";

const ContactSection = () => {
  const contacts = [
    {
      id: 1,
      title: "Email",
      description: "hi@anirudhjwala.in",
      logo: emailLogo,
    },
    {
      id: 2,
      title: "Address",
      description:
        "3-6-750/6, Fourth Floor, Mataru Chaya, Landmark: Opposite Karur Vysya Bank, Hyderabad",
      logo: addressLogo,
    },
    {
      id: 3,
      title: "Phone Number",
      description: "+91-7981970397",
      logo: phoneLogo,
    },
  ];

  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>Contact</h2>
      <div className='flex flex-wrap gap-2 mb-8'>
        {contacts.map((contact) => (
          <Card key={contact.id} className='rounded-2xl w-full lg:w-48'>
            <CardHeader className='pb-0 text-base font-semibold'>
              <Image
                src={contact.logo}
                alt={contact.title}
                width={40}
                height={40}
                className='mb-2 w-6 h-6'
              />
              {contact.title}
            </CardHeader>
            <CardContent>
              <CardDescription className='pb-3 text-sm'>
                {contact.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
