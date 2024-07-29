import ContactUs from "@/components/ai-trainer/ContactUs";
import { ContactUsEllipse } from "@/components/common/Icons";
import ContactHero from "@/components/contact-us/ContactHero";
import React from "react";

const page = () => {
  return (
    <>
      <ContactHero />
      <div className="relative xl:pt-[111px] xl:pb-[160px] md:pb-20 pb-16 max-w-[1560px] mx-auto pt-4">
        <div className="absolute right-0 !top-[18%] pointer-events-none lg:block hidden">
          <ContactUsEllipse />
        </div>
        <ContactUs />
      </div>
    </>
  );
};

export default page;
