import ContactUs from "@/components/ai-trainer/ContactUs";
import { ContactUsEllipse } from "@/components/common/Icons";
import ContactHero from "@/components/contact-us/ContactHero";
import React from "react";

const page = () => {
  return (
    <>
      <ContactHero />
      <div className="relative xl:pt-3 xl:pb-[60px] max-w-[1560px] mx-auto">
        <div className="absolute right-0 !top-[18%] pointer-events-none lg:block hidden">
          <ContactUsEllipse />
        </div>
        <ContactUs />
      </div>
    </>
  );
};

export default page;
