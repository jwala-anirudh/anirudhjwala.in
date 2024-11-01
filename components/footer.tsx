import FooterDialog from "@/components/footer-dialog";

const Footer = () => {
  return (
    <footer className='flex gap-6 flex-wrap items-center justify-center mx-12'>
      <FooterDialog
        icon='https://nextjs.org/icons/file.svg'
        iconDescription='File'
        actionTitle='Terms and Conditions'
        source='https://www.termsfeed.com/live/9697d379-f518-471c-9612-57ee4e1bafe2'
      />
      <FooterDialog
        icon='https://nextjs.org/icons/globe.svg'
        iconDescription='Globe'
        actionTitle='Privacy Policy'
        source='https://www.termsfeed.com/live/b4163d8b-add7-455c-97b4-f81553de43e6'
      />
      <FooterDialog
        icon='https://nextjs.org/icons/window.svg'
        iconDescription='Window'
        actionTitle='Refunds/Cancellations'
        source='https://www.termsfeed.com/live/37a45dc7-1713-403c-8f28-c9d9b84bd7f6'
      />
    </footer>
  );
};

export default Footer;
