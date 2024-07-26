import AddLabel from "@/components/home/AddLabel";
import Hero from "../components/home/Hero";
import SegmentationVerification from "@/components/home/SegmentationVerification";
import ObjectVerification from "@/components/home/ObjectVerification";
import OurTeam from "@/components/home/OurTeam";
import HowWorks from "@/components/home/HowWorks";
import EnsureHighQuality from "@/components/home/EnsureHighQuality";
import ToolsPlatforms from "@/components/home/ToolsPlatforms";
import BackToTopButton from "@/components/common/BackToTopButton";

export default function Home() {
  return (
    <>
      <Hero />
      <AddLabel />
      <SegmentationVerification />
      <ObjectVerification />
      <OurTeam />
      <HowWorks />
      <EnsureHighQuality />
      <ToolsPlatforms />
      <BackToTopButton/>
    </>
  );
}
