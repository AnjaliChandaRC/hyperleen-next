import ContactUs from "@/components/ai-trainer/ContactUs";
import { ContactUsEllipse } from "@/components/common/Icons";
import ContactHero from "@/components/contact-us/ContactHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperleen | Contact-Us",
  description: "We're Here to Assist You With Any Questions or Concerns",
  metadataBase: new URL("https://hyperleen-next.vercel.app/contact-us"),
  openGraph: {
    title: "Hyperleen | Contact-Us",
    description: "We're Here to Assist You With Any Questions or Concerns",
    images: "/contact-us-meta-img.png",
  },
};
const page = () => {
  return (
    <>
      <ContactHero />
      <div className="relative xl:pt-[111px] xl:pb-[160px] md:pb-20 pb-16 max-w-[1536px] mx-auto pt-4">
        <div className="absolute right-0 !top-[18%] pointer-events-none lg:block hidden">
          <ContactUsEllipse />
        </div>
        <ContactUs />
      </div>
    </>
  );
};

export default page;
