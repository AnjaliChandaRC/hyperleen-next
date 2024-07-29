import ContactUs from "@/components/ai-trainer/ContactUs";
import GlobalWorkforce from "@/components/ai-trainer/GlobalWorkforce";
import EnsureHighQuality from "@/components/common/EnsureHighQuality";
import HowWorks from "@/components/common/HowWorks";
import Improve from "@/components/rlhf/Improve";
import Mastering from "@/components/rlhf/Mastering";
import RlhfHero from "@/components/rlhf/RlhfHero";

const page = () => {
  return (
    <>
      <RlhfHero />
      <Improve />
      <GlobalWorkforce showExperienceButton={false} />
      <Mastering />
      <HowWorks />
      <EnsureHighQuality />
      <div className="xl:py-[60px]">
        <ContactUs />
      </div>
    </>
  );
};

export default page;
