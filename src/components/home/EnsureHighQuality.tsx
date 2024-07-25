import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";

const EnsureHighQuality = () => {
  return (
    <div className="2xl:max-w-[1920px] mx-auto">
      <div className="container 2xl:max-w-[1344px] xl:max-w-[1180px] xl:px-5 2xl:px-3 relative z-40">
        <div className="max-w-[674px] mx-auto">
          <PrimaryHeading
            className="text-center mb-4"
            textName="How We "
            textSpan="Ensure High Quality"
          />
          <Paragraph
            className="text-center"
            textName="Our rigorous quality assurance process ensures that our data labeling services provide accurate and reliable results. Here’s a breakdown of our process:"
          />
        </div>
        {/* cards */}
        <div className="flex lg:flex-row flex-col max-lg:items-center gap-5 justify-between xl:mt-[99px] lg:mt-20 sm:mt-10 mt-9">
          {/* card-1 */}
          <div className="lg:max-w-[326px] 2xl:max-w-[350px] max-w-[449px] h-full max-lg:h-fit xl:min-h-[384px] w-full p-5 border-[0.5px] rounded-2xl border-blue hover:shadow-7xl relative z-20">
            <h4 className="mb-2 font-semibold font_gilroy_bold text-xl sm:text-2xl leading-7 sm:leading-[34px] text-black">
              Step 01
            </h4>
            <h4 className="font-semibold font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey">
              Data Labeling
            </h4>
            <div className="flex lg:flex-col lg:gap-7 gap-3 mt-2">
              <div className="p-[11px] rounded-[7px] bg-off_white w-fit relative">
                <div className="flex flex-col absolute">
                  <div className="size-5">
                    <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                  </div>
                  <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                </div>
                <Image
                  src="/assets/images/home/webp/pizza3.webp"
                  alt="project-request-image"
                  width={239}
                  height={115}
                  className="rounded-[5.3px]"
                />
              </div>
              <div className="p-[11px] rounded-[7px] bg-off_white w-fit relative">
                <div className="flex flex-col absolute">
                  <div className="size-5">
                    <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                  </div>
                  <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                </div>
                <Image
                  src="/assets/images/home/webp/labeling_2.webp"
                  alt="project-request-image"
                  width={239}
                  height={115}
                  className="rounded-[5.3px]"
                />
              </div>
            </div>
            {/* ellips */}
            <Image
              src="/assets/images/home/webp/ensure_Ellips.webp"
              alt="project-request-image"
              width={272}
              height={83}
              className=" absolute xl:-top-[67px] lg:-top-[45px] max-xl:rotate-[13deg] max-lg:!hidden 2xl:-right-[77%] -right-[84%] -z-40"
            />
          </div>
          {/* card-2 */}
          <div className="max-w-[449px] 2xl:max-w-[500px] xl:h-full h-fit xl:min-h-[404px] w-full p-5 border-[0.5px] rounded-2xl border-blue hover:shadow-7xl lg:mt-[100px] xl:mt-[52px] relative z-40">
            <div className="flex gap-4 items-start justify-between">
              <div>
                <h4 className="mb-2 font-semibold font_gilroy_bold text-xl sm:text-2xl leading-7 sm:leading-[34px] text-black">
                  Step 02
                </h4>
                <h4 className="font-semibold font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey">
                  Verification
                </h4>
              </div>
              <div className="flex gap-[13px] items-center ">
                <div className="flex items-center gap-[3px] border-[0.5px] py-[6px] xl:px-3 px-2 bg-light_blue3 rounded-[12px] border-blue">
                  <h4 className="font-semibold font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-black">
                    90%
                  </h4>
                  <Image
                    src="/assets/images/home/svg/check.svg"
                    alt="project-request-image"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="flex items-center gap-[3px] border-[0.5px] py-[6px] xl:px-3 px-2 bg-light_blue3 rounded-[12px] border-blue">
                  <h4 className="font-semibold font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-black">
                    10%
                  </h4>
                  <Image
                    src="/assets/images/home/svg/cross.svg"
                    alt="project-request-image"
                    width={21}
                    height={21}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-[10px] mt-2 max-lg:w-full">
                <div className="p-[11px] rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/car2.webp"
                    alt="project-request-image"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full"
                  />
                  <div className="flex flex-col absolute">
                    <div className="size-5">
                      <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                    </div>
                    <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                  </div>
                </div>
                <div className="p-[11px] rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/vegitable.webp"
                    alt="project-request-image"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full"
                  />
                  <div className="flex flex-col absolute">
                    <div className="size-5">
                      <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                    </div>
                    <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                  </div>
                </div>
                <div className="p-[11px] rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/rider.webp"
                    alt="project-request-image"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full"
                  />
                  <div className="flex flex-col absolute">
                    <div className="size-5">
                      <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                    </div>
                    <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] mt-2 max-lg:w-full">
                <div className="p-[11px] rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/rider.webp"
                    alt="project-request-image"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full"
                  />
                  <div className="flex flex-col absolute">
                    <div className="size-5">
                      <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                    </div>
                    <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                  </div>
                </div>
                <div className="p-[11px] rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/car2.webp"
                    alt="project-request-image"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full"
                  />
                  <div className="flex flex-col absolute">
                    <div className="size-5">
                      <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                    </div>
                    <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                  </div>
                </div>
                <div className="p-[11px] rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/pizza2.webp"
                    alt="project-request-image"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full"
                  />
                  <div className="flex flex-col absolute">
                    <div className="size-5">
                      <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                    </div>
                    <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ellips */}
            <Image
              src="/assets/images/home/webp/ensure_Ellips2.webp"
              alt="project-request-image"
              width={272}
              height={83}
              className=" absolute -top-[94px] max-lg:hidden max-xl:-rotate-[8deg] xl:-top-[67px] 2xl:-right-[54%] xl:-right-[61%] -right-[85%] -z-30"
            />
          </div>
          {/* card-3 */}
          <div className="lg:max-w-[326px] 2xl:max-w-[350px] max-w-[449px] h-full max-lg:h-fit xl:min-h-[384px] w-full p-5 border-[0.5px] rounded-2xl border-blue hover:shadow-7xl lg:mt-[147px]">
            <h4 className="mb-2 font-semibold font_gilroy_bold text-xl sm:text-2xl leading-7 sm:leading-[34px] text-black">
              Step 03
            </h4>
            <h4 className="font-semibold font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey mb-[10px]">
              Relabeling
            </h4>
            <Paragraph textName="Incorrectly labeled data is reviewed and relabeled correctly" />
            <div className="flex lg:flex-col lg:gap-7 gap-3 mt-2">
              <div className="p-[11px] rounded-[7px] bg-off_white w-fit relative">
                <div className="flex flex-col absolute">
                  <div className="size-5">
                    <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                  </div>
                  <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                </div>
                <Image
                  src="/assets/images/home/webp/pizza2.webp"
                  alt="project-request-image"
                  width={239}
                  height={115}
                  className="rounded-[5.3px]"
                />
              </div>
              <div className="p-[11px] rounded-[7px] bg-off_white w-fit relative">
                <div className="flex flex-col absolute">
                  <div className="size-5">
                    <Image width={100} height={100} className="w-full h-full" src={"/assets/images/home/png/cursor_btn.png"} alt="cursor image" />
                  </div>
                  <p className="bg-blue w-[66px] h-[25px] text-center rounded-[17px]">Pie..</p>
                </div>
                <Image
                  src="/assets/images/home/webp/piza.webp"
                  alt="project-request-image"
                  width={239}
                  height={115}
                  className="rounded-[5.3px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsureHighQuality;
