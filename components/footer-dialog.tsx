import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type FooterDialogProps = {
  icon: string;
  iconDescription: string;
  actionTitle: string;
  source: string;
};

const FooterDialog = ({
  icon,
  iconDescription,
  actionTitle,
  source,
}: FooterDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          rel='noopener noreferrer'
        >
          <img
            aria-hidden
            src={icon}
            alt={iconDescription}
            width={16}
            height={16}
          />
          {actionTitle}
        </a>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-fit'>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>
            <iframe src={source} className='w-[800px] h-[500px]' />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FooterDialog;