import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import GallerySection from "@/components/gallery-section";
import OpenSourceSection from "@/components/opensource-section";
import ServicesSection from "@/components/services-section";
import SkillsSection from "@/components/skills-section";
import SocialSection from "@/components/social-section";

const BodySection = () => {
  return (
    <section className='px-6 py-4 lg:mt-8 xl:mt-10'>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <ServicesSection />
      <SocialSection />
      <GallerySection />
      <ContactSection />
    </section>
  );
};

export default BodySection;
