import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { GlobalWorkforceData, Global_Language } from "../common/Helper";

interface GlobalWorkforceProps {
  showExperienceButton?: boolean;
}

const GlobalWorkforce: React.FC<GlobalWorkforceProps> = ({
  showExperienceButton = true,
}) => {
  interface GlobalData {
    img: string;
  }
  interface GlobalLanguage {
    text: string;
  }

  return (
    <div className="md:bg-global_bg max-md:bg-blue xl:bg-full bg-cover xl:pt-[164px] xl:pb-[249px] lg:py-32 md:py-28 py-16 2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px] mx-auto">
        <PrimaryHeading
          textName="Global Workforce"
          className="!text-white lg:pb-5 pb-3 max-xl:mx-auto max-xl:text-center"
        />
        <Paragraph
          className="!text-white opacity-70 lg:pb-10 pb-5 lg:max-w-[606px] max-xl:mx-auto max-xl:text-center"
          textName="Our expertise lies in a global workforce of highly skilled professionals, each with over 5 years of industry experience. With proficiency in a wide array of programming languages and technologies, our experts can seamlessly scale to meet the demands of any project, ensuring high-quality, robust solutions across various domains."
        />
        <div className="flex flex-wrap gap-3 max-xl:justify-center">
          {GlobalWorkforceData.map((obj: GlobalData, index: number) => (
            <div key={index}>
              <div className="bg-white shadow-8xl max-w-[218px] lg:py-[10px] lg:px-2 p-2 rounded-xl border border-transparent hover:shadow-9xl transition duration-300 ease-linear">
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
                <p className="font_gilroy_light text-xs leading-3 text-grey pb-[10px]">
                  HTML Developer
                </p>
                <div className="flex items-center gap-2">
                  {Global_Language.map((obj: GlobalLanguage, index: number) => (
                    <div key={index}>
                      <p className="font_gilroy_medium text-xxs leading-3 text-grey bg-transparent border-[0.5px] border-grey py-1 px-[10px] rounded-full">
                        {obj.text}
                      </p>
                    </div>
                  ))}
                </div>
                {showExperienceButton && (
                  <button className="font-semibold text-sm text-white bg-blue rounded-full py-[6px] px-4 border border-transparent hover:bg-white hover:border-grey hover:text-grey transition-all duration-300 ease-linear text-nowrap sm:mt-4 mt-3">
                    5 Years Experience
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalWorkforce;
