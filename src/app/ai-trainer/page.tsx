import ContactUs from "@/components/ai-trainer/ContactUs";
import CuttingEdge from "@/components/ai-trainer/CuttingEdge";
import GlobalWorkforce from "@/components/ai-trainer/GlobalWorkforce";
import TrainerHero from "@/components/ai-trainer/TrainerHero";
import TrainersFor from "@/components/ai-trainer/TrainersFor";
import EnsureHighQuality from "@/components/common/EnsureHighQuality";
import HowWorks from "@/components/common/HowWorks";
import React from "react";

const page = () => {
  return (
    <>
      <TrainerHero />
      <TrainersFor />
      <CuttingEdge />
      <GlobalWorkforce showExperienceButton={true} />
      <div className="pt-16 md:pt-20 lg:pt-0">
        <HowWorks />
      </div>
      <EnsureHighQuality />
      <ContactUs />
    </>
  );
};

export default page;
