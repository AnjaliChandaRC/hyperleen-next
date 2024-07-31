import ContactUs from "@/components/ai-trainer/ContactUs";
import CuttingEdge from "@/components/ai-trainer/CuttingEdge";
import GlobalWorkforce from "@/components/ai-trainer/GlobalWorkforce";
import TrainerHero from "@/components/ai-trainer/TrainerHero";
import TrainersFor from "@/components/ai-trainer/TrainersFor";
import EnsureHighQuality from "@/components/common/EnsureHighQuality";
import HowWorks from "@/components/common/HowWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperleen | Ai-Trainer",
  description: "Elevate Your Code with Expert AI Training",
  metadataBase: new URL("https://hyperleen-next.vercel.app/ai-trainer"),
  openGraph: {
    title: "Hyperleen",
    description: "Elevate Your Code with Expert AI Training",
    images: "/meta-img.png",
  },
};

const page = () => {
  return (
    <>
      <TrainerHero />
      <TrainersFor />
      <CuttingEdge />
      <GlobalWorkforce showExperienceButton={true} />
      <div className="xl:py-[160px] md:py-20 py-16 lg:pt-[64px] lg:pb-[80px] 2xl:max-w-[1536px] mx-auto">
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
