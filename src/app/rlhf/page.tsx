import ContactUs from "@/components/ai-trainer/ContactUs";
import GlobalWorkforce from "@/components/ai-trainer/GlobalWorkforce";
import EnsureHighQuality from "@/components/common/EnsureHighQuality";
import HowWorks from "@/components/common/HowWorks";
import Improve from "@/components/rlhf/Improve";
import Mastering from "@/components/rlhf/Mastering";
import RlhfHero from "@/components/rlhf/RlhfHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperleen | RLHF",
  description: "Enhance Your LLM with Human-in-the-Loop Training",
  metadataBase: new URL("https://hyperleen-next.vercel.app/rlhf"),
  openGraph: {
    title: "Hyperleen | RLHF",
    description: "Enhance Your LLM with Human-in-the-Loop Training",
    images: "/rlhf-meta-img.png",
  },
};

const page = () => {
  return (
    <>
      <RlhfHero />
      <Improve />
      <GlobalWorkforce showExperienceButton={false} />
      <Mastering />
      <div className="xl:py-[160px] md:py-20 py-16 2xl:max-w-[1536px] mx-auto">
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
