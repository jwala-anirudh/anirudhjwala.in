import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import OpenSourceSection from "@/components/opensource-section";
import SkillsSection from "@/components/skills-section";
import SocialSection from "@/components/social-section";

const BodySection = () => {
  return (
    <section className='px-6 py-4 lg:mt-8 xl:mt-10'>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <SocialSection />
    </section>
  );
};

export default BodySection;
