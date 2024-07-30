import AddLabel from "@/components/home/AddLabel";
import Hero from "../components/home/Hero";
import SegmentationVerification from "@/components/home/SegmentationVerification";
import ObjectVerification from "@/components/home/ObjectVerification";
import OurTeam from "@/components/home/OurTeam";
import ToolsPlatforms from "@/components/home/ToolsPlatforms";
import HowWorks from "@/components/common/HowWorks";
import EnsureHighQuality from "@/components/common/EnsureHighQuality";

export default function Home() {
  return (
    <>
      <Hero />
      <AddLabel />
      <SegmentationVerification />
      <ObjectVerification />
      <OurTeam />
      <div className="xl:py-[160px] md:py-20 py-16 lg:pt-[64px] lg:pb-[80px] 2xl:max-w-[1536px] mx-auto">
        <HowWorks />
      </div>
      <EnsureHighQuality />
      <ToolsPlatforms />
    </>
  );
}
