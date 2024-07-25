import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { DownArrow } from "../common/Icons";

const EnsureHighQuality = () => {
  return (
    <div className="2xl:max-w-[1920px] mx-auto">
      <div className="container 2xl:max-w-[1360px] xl:max-w-[1180px] relative z-40">
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
          <div className="ensure_card lg:max-w-[326px] 2xl:max-w-[350px] max-w-[449px] h-full max-lg:h-fit xl:min-h-[384px] relative z-20">
            <h4 className="mb-2 font_gilroy_bold text-xl sm:text-2xl leading-7 sm:leading-[34px] text-black">
              Step 01
            </h4>
            <p className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey">
              Data Labeling
            </p>
            <div className="flex lg:flex-col lg:gap-7 gap-3 mt-2">
              <div className="p-3 rounded-[7px] bg-off_white w-fit relative">
                <Image
                  src="/assets/images/home/webp/pizza.webp"
                  alt="pizza"
                  width={239}
                  height={115}
                  className="rounded-[5.3px] pointer-events-none"
                />
                {/* cursor-ellipse */}
                <div className="flex flex-col absolute -right-7 top-[33px] max-lg:hidden">
                  <div className="size-5">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full pointer-events-none"
                      src={"/assets/images/home/png/cursor_btn.png"}
                      alt="cursor image"
                    />
                  </div>
                  <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                    Pie..
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-[7px] bg-off_white w-fit relative">
                <div className="flex flex-col absolute -right-7 top-[33px] max-lg:hidden">
                  <div className="size-5">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full pointer-events-none"
                      src={"/assets/images/home/png/cursor_btn.png"}
                      alt="cursor image"
                    />
                  </div>
                  <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                    car
                  </p>
                </div>
                <Image
                  src="/assets/images/home/webp/car.webp"
                  alt="car"
                  width={239}
                  height={115}
                  className="rounded-[5.3px] pointer-events-none"
                />
              </div>
            </div>
            {/* ellipse */}
            <Image
              src="/assets/images/home/webp/ensure_ellipse.webp"
              alt="project-request-image"
              width={272}
              height={83}
              className="pointer-events-none absolute xl:-top-[67px] lg:-top-[45px] max-xl:rotate-[13deg] max-lg:!hidden 2xl:-right-[77%] -right-[84%] -z-40"
            />
          </div>
          {/* card-2 */}
          <div className="ensure_card max-w-[449px] 2xl:max-w-[500px] xl:h-full h-fit xl:min-h-[404px] lg:mt-[100px] xl:mt-[52px] relative z-40">
            <div className="flex gap-4 items-start justify-between">
              <div>
                <h4 className="mb-2 font_gilroy_bold text-xl sm:text-2xl leading-7 sm:leading-[34px] text-black">
                  Step 02
                </h4>
                <p className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey">
                  Verification
                </p>
              </div>
              <div className="flex gap-[13px] items-center ">
                <div className="flex items-center gap-[3px] border-[0.5px] py-[6px] xl:px-3 px-2 bg-light_blue3 rounded-[12px] border-blue">
                  <h4 className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-black">
                    90%
                  </h4>
                  <Image
                    src="/assets/images/home/svg/check.svg"
                    alt="project-request-image"
                    width={21}
                    height={21}
                    className="pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-[3px] border-[0.5px] py-[6px] xl:px-3 px-2 bg-light_blue3 rounded-[12px] border-blue">
                  <h4 className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-black">
                    10%
                  </h4>
                  <Image
                    src="/assets/images/home/svg/cross.svg"
                    alt="project-request-image"
                    width={21}
                    height={21}
                    className="pointer-events-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-[10px] mt-2 max-lg:w-full">
                <div className="p-3 rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/car.webp"
                    alt="car"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full pointer-events-none"
                  />
                  <div className="flex flex-col absolute bottom-4 left-3 max-lg:hidden">
                    <div className="size-5">
                      <Image
                        width={100}
                        height={100}
                        className="w-full h-full pointer-events-none"
                        src={"/assets/images/home/png/cursor_btn.png"}
                        alt="cursor image"
                      />
                    </div>
                    <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                      Car
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/vegetable.webp"
                    alt="vegetable"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full pointer-events-none"
                  />
                  <div className="flex flex-col absolute right-9 bottom-5 max-lg:hidden">
                    <div className="size-5">
                      <Image
                        width={100}
                        height={100}
                        className="w-full h-full pointer-events-none"
                        src={"/assets/images/home/png/cursor_btn.png"}
                        alt="cursor image"
                      />
                    </div>
                    <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                      Tomato
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/rider.webp"
                    alt="rider"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full pointer-events-none"
                  />
                  <div className="flex flex-col absolute bottom-5 left-6 max-lg:hidden">
                    <div className="size-5">
                      <Image
                        width={100}
                        height={100}
                        className="w-full h-full pointer-events-none"
                        src={"/assets/images/home/png/cursor_btn.png"}
                        alt="cursor image"
                      />
                    </div>
                    <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                      Man
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] mt-2 max-lg:w-full">
                <div className="p-3 rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/rider.webp"
                    alt="rider"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full pointer-events-none"
                  />
                  <div className="flex flex-col absolute top-7 left-6 max-lg:hidden">
                    <div className="size-5">
                      <Image
                        width={100}
                        height={100}
                        className="w-full h-full pointer-events-none"
                        src={"/assets/images/home/png/cursor_btn.png"}
                        alt="cursor image"
                      />
                    </div>
                    <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                      Men
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/car.webp"
                    alt="car"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full pointer-events-none"
                  />
                  <div className="flex flex-col absolute top-7 left-6 max-lg:hidden">
                    <div className="size-5">
                      <Image
                        width={100}
                        height={100}
                        className="w-full h-full pointer-events-none"
                        src={"/assets/images/home/png/cursor_btn.png"}
                        alt="cursor image"
                      />
                    </div>
                    <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                      Car
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded-[7px] bg-off_white w-full lg:w-fit relative">
                  <Image
                    src="/assets/images/home/webp/pizza.webp"
                    alt="pizza"
                    width={163}
                    height={70}
                    className="rounded-[4px] max-lg:!min-w-full pointer-events-none"
                  />
                  <div className="flex flex-col absolute right-[30px] bottom-[18px] max-lg:hidden">
                    <div className="size-5">
                      <Image
                        width={100}
                        height={100}
                        className="w-full h-full pointer-events-none"
                        src={"/assets/images/home/png/cursor_btn.png"}
                        alt="cursor image"
                      />
                    </div>
                    <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                      Pie..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ellips */}
            <Image
              src="/assets/images/home/webp/ensure_ellipse2.webp"
              alt="project-request-image"
              width={272}
              height={83}
              className=" absolute -top-[94px] max-lg:hidden max-xl:-rotate-[8deg] xl:-top-[67px] 2xl:-right-[54%] xl:-right-[61%] -right-[85%] -z-30 pointer-events-none"
            />
          </div>
          {/* card-3 */}
          <div className="ensure_card lg:max-w-[326px] 2xl:max-w-[350px] max-w-[449px] h-full max-lg:h-fit xl:min-h-[384px] lg:mt-[147px]">
            <h4 className="mb-2 font_gilroy_bold text-xl sm:text-2xl leading-7 sm:leading-[34px] text-black">
              Step 03
            </h4>
            <p className="font_gilroy_bold text-lg sm:text-xl leading-6 sm:leading-[29px] text-grey mb-[10px]">
              Relabeling
            </p>
            <Paragraph textName="Incorrectly labeled data is reviewed and relabeled correctly" />
            <div className="flex lg:flex-col lg:gap-7 gap-3 mt-2 relative w-fit">
              <div className="p-3 rounded-[7px] bg-off_white w-fit relative">
                <div className="flex flex-col absolute -right-10 top-[40px] max-lg:hidden">
                  <div className="size-5">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full"
                      src={"/assets/images/home/png/cursor_btn.png"}
                      alt="cursor image"
                    />
                  </div>
                  <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                    Pie..
                  </p>
                </div>
                <Image
                  src="/assets/images/home/webp/pizza.webp"
                  alt="pizza"
                  width={163}
                  height={70}
                  className="rounded-[5.3px] pointer-events-none"
                />
                {/* check - icon */}
                <span className="absolute top-3 right-2">
                  <Image
                    src="/assets/images/home/svg/cross.svg"
                    alt="cross"
                    width={21}
                    height={21}
                    className="pointer-events-none"
                  />
                </span>
              </div>
              <div className="p-3 rounded-[7px] bg-off_white w-fit !relative">
                <div className="flex flex-col absolute -right-10 top-[40px] max-lg:hidden">
                  <div className="size-5">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full pointer-events-none"
                      src={"/assets/images/home/png/cursor_btn.png"}
                      alt="cursor image"
                    />
                  </div>
                  <p className="text-white bg-blue w-[66px] h-[25px] text-center rounded-[17px]">
                    Quiche.
                  </p>
                </div>
                <Image
                  src="/assets/images/home/webp/pizza.webp"
                  alt="pizza"
                  width={163}
                  height={70}
                  className="rounded-[5.3px] pointer-events-none"
                />
                {/* check - svg */}
                <span className="absolute top-3 right-2">
                  <Image
                    src="/assets/images/home/svg/check.svg"
                    alt="check-icon"
                    width={21}
                    height={21}
                    className="pointer-events-none"
                  />
                </span>
              </div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:-rotate-90">
                <DownArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsureHighQuality;
