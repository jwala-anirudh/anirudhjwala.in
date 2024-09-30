import { ModeToggle } from "./mode-toggle";

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center w-full row-start-1'>
      <div className='ml-auto'>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
