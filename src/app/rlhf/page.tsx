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
      <Improve />
      <Mastering />
      <div className="xl:pt-[160px] lg:pt-20 pt-16">
        <HowWorks />
      </div>
      <EnsureHighQuality />
    </>
  );
};

export default page;
