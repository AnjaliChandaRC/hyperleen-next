import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";
import { PenSvg } from "../common/Icons";

const AddLabel = () => {
  return (
    <div className="relative lg:pt-20 sm:pt-10 pt-4" id="label">
      <div className="absolute top-[-14%] right-[12%] lg:block hidden">
        <Image
          width={398}
          height={1313}
          src="/assets/images/home/png/label-ellipse.png"
          alt="label-ellipse"
          className="pointer-events-none"
        />
      </div>
      <div className="container xl:max-w-[1140px] mx-auto">
        <div className="flex flex-wrap flex-row mx-[-12px] items-center">
          <div className="lg:w-[50%] w-full px-3">
            <PrimaryHeading
              textName="Add"
              blueTextClass=" Label"
              blackTextClass=" of an Image"
              className="max-w-[478px] leading-lg max-lg:text-center max-lg:mx-auto"
            />
            <Paragraph
              textName="Efficient and Accurate Labeling on Image."
              className="md:mt-4 sm:mt-2 mt-0 max-lg:text-center"
            />
            <div className="lg:max-w-[462px] sm:max-w-[386px] max-w-[299px] rounded-2xl border-[0.5px] border-blue bg-white md:p-5 p-4 md:mt-6 mt-4 max-lg:mx-auto">
              <p className="font-semibold text-black">
                Upload Image and add label
              </p>
              <div className="max-w-[422px] w-full rounded-xl bg-light_grey p-5 mt-5">
                <Image
                  width={399}
                  height={359}
                  src="/assets/images/home/png/label_input_car.png"
                  alt="label_input_car"
                  className="pointer-events-none"
                />
              </div>
              <div className="max-w-[422px] w-full border-[0.5px] border-grey p-[12px_0px_45px_12px] rounded-xl mt-4">
                <div className="flex gap-2">
                  <Paragraph
                    textName="Car."
                    className="text-black opacity-40"
                  />
                  <PenSvg />
                </div>
              </div>
              <div className="flex gap-4 lg:mt-9 mt-5 justify-center">
                <CommonButton
                  text="Ok"
                  className="lg:max-w-[203px] max-w-[106px] w-full"
                />
                <button className="text-lg text-black py-3.5 lg:px-[69px] px-5 rounded-[100px] border border-black hover:bg-blue hover:text-white hover:border-transparent duration-300 ease-linear">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3 max-lg:flex max-lg:justify-center relative max-lg:flex-col max-lg:items-center lg:pt-0 md:pt-10 pt-5">
            <Image
              width={399}
              height={359}
              src="/assets/images/home/webp/label_project_overview.webp"
              alt="label-yellowJacketGirl"
              className="pointer-events-none"
            />
            {/* ====graph-image====== */}
            <div className="lg:absolute lg:top-[-3%] xl:left-[68%] top-[4%] left-[66%] max-w-48">
              <Image
                width={191}
                height={241}
                src="/assets/images/home/webp/label_graph.webp"
                alt="label-ratio"
                className="pointer-events-none"
              />
            </div>
            {/* ======jumping-girl-img */}
            <div className="lg:absolute lg:bottom-[-26%] bottom-[-38%] lg:left-[38%] left-[54%]">
              <Image
                width={353}
                height={216}
                src="/assets/images/home/webp/label_jumping_girl.webp"
                alt="label_jumping_girl"
                className="pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLabel;
