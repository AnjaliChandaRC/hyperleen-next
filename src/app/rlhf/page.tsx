import ContactUs from "@/components/ai-trainer/ContactUs";
import GlobalWorkforce from "@/components/ai-trainer/GlobalWorkforce";
import EnsureHighQuality from "@/components/common/EnsureHighQuality";
import HowWorks from "@/components/common/HowWorks";
import Improve from "@/components/rlhf/Improve";
import Mastering from "@/components/rlhf/Mastering";
import RlhfHero from "@/components/rlhf/RlhfHero";
import React from "react";

const page = () => {
  return (
    <>
      <RlhfHero />
      <div className=" pb-16 md:pb-20 xl:pb-[180px]">
        <Improve />
      </div>
      <GlobalWorkforce showExperienceButton={false} />
      <Mastering />
      <div className=" py-16 md:py-20 lg:py-0">
        <HowWorks />
      </div>
      <EnsureHighQuality />
      <ContactUs />
    </>
  );
};

export default page;
