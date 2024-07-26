import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";
import { PenSvg } from "../common/Icons";

const AddLabel = () => {
  return (
<<<<<<< HEAD
    <div id="label" className="relative lg:pt-20 sm:pt-10 pt-4">
=======
    <div className="relative lg:pt-20 sm:pt-10 pt-4" id="label">
>>>>>>> 2524152047ebaa63f4f46fd7e42824a9862a2753
      <div className="absolute top-[-14%] right-[12%] lg:block hidden">
        <Image
          width={398}
          height={1313}
          src="/assets/images/home/png/label-ellipse.png"
          alt="label-ellipse"
          className="pointer-events-none"
        />
      </div>
      <div className="container xl:max-w-[1180px] mx-auto">
        <div className="flex flex-wrap flex-row mx-[-12px] items-center">
          <div className="lg:w-[50%] w-full px-3">
            <PrimaryHeading
              textName="Add"
              blueText=" Label"
              blackText=" of an Image"
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
                <button className="text-lg text-black py-3.5 lg:px-[69px] px-5 rounded-[100px] border border-black hover:bg-blue hover:text-white hover:border-transparent duration-300 ease-linear h-14">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3 max-lg:flex max-lg:justify-center relat max-lg:items-center lg:pt-0 pt-10">
            {/* ======project-overview-img===== */}
            <Image
              width={399}
              height={359}
              src="/assets/images/home/webp/label_project_overview.webp"
              alt="label-yellowJacketGirl"
              className="pointer-events-none max-sm:max-w-[170px]"
            />
            {/* ====graph-image====== */}
            <div className="absolute 2xl:left-[70%] xl:left-[77%] xl:top-[27%] lg:top-[27%] lg:left-[82%] sm:top-[60%] sm:left-[68%] top-[74%] left-[62%] max-w-48">
              <Image
                width={191}
                height={241}
                src="/assets/images/home/webp/label_graph.webp"
                alt="label-ratio"
                className="pointer-events-none max-sm:max-w-[72px]"
              />
            </div>
            {/* ======jumping-girl-img */}
            <div className="absolute xl:bottom-[8%] xl:left-[68%] lg:bottom-[4%] lg:left-[68%] sm:left-[54%] left-[52%] bottom-[-4%]">
              <Image
                width={353}
                height={216}
                src="/assets/images/home/webp/label_jumping_girl.webp"
                alt="label_jumping_girl"
                className="pointer-events-none max-sm:max-w-[132px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLabel;
