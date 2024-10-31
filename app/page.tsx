import HeroSection from "@/components/hero-section";
import BodySection from "@/components/body-section";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className='flex font-[family-name:var(--font-geist-sans)]'>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='lg:sticky lg:top-0 lg:h-screen lg:flex-none'>
          <HeroSection />
        </div>
        <div className='flex-grow lg:h-screen overflow-auto'>
          <BodySection />
        </div>
        <div className='block md:hidden'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
