import ContactUs from "@/components/ai-trainer/ContactUs";
import CuttingEdge from "@/components/ai-trainer/CuttingEdge";
import GlobalWorkforce from "@/components/ai-trainer/GlobalWorkforce";
import TrainerHero from "@/components/ai-trainer/TrainerHero";
import TrainersFor from "@/components/ai-trainer/TrainersFor";
import EnsureHighQuality from "@/components/common/EnsureHighQuality";
import HowWorks from "@/components/common/HowWorks";

const page = () => {
  return (
    <>
      <TrainerHero />
      <TrainersFor />
      <CuttingEdge />
      <GlobalWorkforce showExperienceButton={true} />
      <div className="xl:py-[160px] md:pt-5 max-md:pt-16 pb-16 md:pb-[80px] lg:pt-[64px] lg:pb-[80px] 2xl:max-w-[1536px] mx-auto">
        <HowWorks />
      </div>
      <EnsureHighQuality />
      <div className="xl:py-[160px] md:py-20 py-16">
        <ContactUs />
      </div>
    </>
  );
};

export default page;
