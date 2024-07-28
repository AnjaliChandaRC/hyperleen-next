import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { GlobalWorkforceData } from "../common/Helper";

const GlobalWorkforce = () => {
  interface GlobalData {
    img: string;
  }
  return (
    <div className="bg-global_bg lg:bg-full bg-cover lg:pt-[164px] lg:pb-[249px] sm:py-20 py-16">
      <div className="container xl:max-w-[1180px] mx-auto">
        <PrimaryHeading
          textName="Global Workforce"
          className="!text-white lg:pb-5 pb-3 max-lg:mx-auto max-lg:text-center"
        />
        <Paragraph
          className="!text-white opacity-70 lg:pb-10 pb-5 lg:max-w-[606px] max-lg:mx-auto max-lg:text-center"
          textName="Our expertise lies in a global workforce of highly skilled professionals, each with over 5 years of industry experience. With proficiency in a wide array of programming languages and technologies, our experts can seamlessly scale to meet the demands of any project, ensuring high-quality, robust solutions across various domains."
        />
        <div className="flex flex-wrap gap-3 max-lg:justify-center">
          {GlobalWorkforceData.map((obj: GlobalData, index: number) => (
            <div key={index}>
              <div className="bg-white shadow-8xl max-w-[218px] lg:py-3 lg:px-2 p-2 rounded-xl border border-transparent hover:shadow-9xl">
                <Image
                  src={obj.img}
                  width={203}
                  height={125}
                  alt="global-img"
                  className="max-lg:w-[175px] pointer-events-none"
                />
                <h5 className="font_gilroy_medium leading-5 text-black pt-3 pb-1">
                  Wade Warren
                </h5>
                <p className="font_gilroy_light text-xs leading-3 text-grey pb-3">
                  HTML Developer
                </p>
                <div className="flex items-center gap-2 pb-3">
                  <button className="font_gilroy_medium text-xxs leading-3 text-grey bg-transparent border-[0.5px] border-grey py-1 px-2 rounded-full hover:shadow-3xl">
                    HTML
                  </button>
                  <button className="font_gilroy_medium text-xxs leading-3 text-grey bg-transparent border-[0.5px] border-grey py-1 px-2 rounded-full hover:shadow-3xl">
                    Bootstrap
                  </button>
                  <button className="font_gilroy_medium text-xxs leading-3 text-grey bg-transparent border-[0.5px] border-grey py-1 px-2 rounded-full hover:shadow-3xl">
                    CSS
                  </button>
                </div>
                <button className="font-inter font-semibold text-sm text-white bg-blue rounded-full py-2 px-5 max-w-[162px] w-full border border-transparent hover:bg-white hover:border-grey hover:text-grey transition-all duration-300 ease-linear">
                  5 Years Experince
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalWorkforce;
