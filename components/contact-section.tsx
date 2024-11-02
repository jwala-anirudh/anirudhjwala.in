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
  return (
    <section>
      <h2 className='text-xl font-semibold text-left mb-3'>Contact</h2>
      <div className='flex flex-wrap gap-2 mb-8'>
        <Card className='rounded-2xl w-full lg:w-48'>
          <CardHeader className='pb-0 text-base font-semibold'>
            <img
              src={emailLogo.src}
              alt='email'
              width={40}
              height={40}
              className='mb-2 w-6 h-6'
            />
            Email
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              hi@anirudhjwala.in
            </CardDescription>
          </CardContent>
        </Card>
        <Card className='rounded-2xl w-full lg:w-48'>
          <CardHeader className='pb-0 text-base font-semibold'>
            <img
              src={addressLogo.src}
              alt='address'
              width={40}
              height={40}
              className='mb-2 w-6 h-6'
            />
            Address
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              3-6-750/6, Fourth Floor, Mataru Chaya, Landmark: Opposite Karur
              Vysya Bank, Hyderabad
            </CardDescription>
          </CardContent>
        </Card>
        <Card className='rounded-2xl w-full lg:w-48'>
          <CardHeader className='pb-0 text-base font-semibold'>
            <img
              src={phoneLogo.src}
              alt='phone'
              width={40}
              height={40}
              className='mb-2 w-6 h-6'
            />
            Phone Number
          </CardHeader>
          <CardContent>
            <CardDescription className='pb-3 text-sm'>
              +91-7981970397
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
