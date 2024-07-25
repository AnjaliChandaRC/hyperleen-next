import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { PenSvg } from "../common/Icons";

const AddLabel = () => {
  return (
    <div>
      <div className="container mx-auto px-3">
        <div className="flex flex-wrap flex-row mx-[-12px] items-center">
          <div className="lg:w-[50%] w-full px-3 flex items-center justify-center">
            <div className="blank">
              <PrimaryHeading
                textName="Add"
                textSpan=" Lable"
                textSpan2=" of an Image"
                className="max-w-[478px] leading-lg"
              />
              <Paragraph
                textName="Efficient and Accurate  Labeling on Image."
                className=" font-poppins text-base md:mt-4 sm:mt-2 mt-0"
              />
              <div className=" lg:max-w-[462px] sm:max-w-[386px] max-w-[299px] rounded-2xl border-[0.5px] border-blue bg-white md:p-5 p-4 md:mt-6 mt-4 max-lg:mx-auto">
                <p className=" font-semibold text-base text-black">
                  Upload Image and add label
                </p>
                <div className="max-w-[422px] w-full rounded-xl bg-light_grey p-5 mt-5">
                  {/* =======car-img===== */}
                  <Image
                    width={399}
                    height={359}
                    src="/assets/images/home/png/label-inputCar.png"
                    alt="label-jumpingGirl"
                  />
                </div>
                <div className="max-w-[422px] w-full border-[0.5px] border-grey p-[12px_0px_45px_12px] rounded-xl mt-4">
                  <div className="flex gap-2">
                    <p className=" font-normal text-base text-black opacity-40">
                      Car.
                    </p>
                    <span>
                      <PenSvg />
                    </span>
                  </div>
                </div>
                <div className=""></div>
                <div className="flex gap-4 lg:mt-9 mt-5 max-lg:justify-center">
                  <button className=" font-normal text-lg leading-7 font-poppins rounded-full shadow-3xl text-white hover:text-black  bg-blue py-3.5 hover:bg-white hover:border-black duration-300 ease-linear lg:px-[89.5px] px-10 border border-white">
                    Ok
                  </button>
                  <button className=" font-poppins font-normal text-lg text-black py-3.5 lg:px-[69px] px-5 rounded-[100px] border border-black hover:bg-blue hover:text-white hover:border-transparent duration-300 ease-linear">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3 max-lg:flex max-lg:justify-center relative max-md:flex-col max-sm:items-center max-md:items-center lg:pt-0 md:pt-10 pt-5">
            <Image
              width={399}
              height={359}
              src="/assets/images/home/png/label-yellowJacketGirl.png"
              alt="label-jumpingGirl"
            />
            {/* ====ratio-image====== */}
            <div className="md:absolute lg:top-[-3%] lg:left-[55%] top-[4%] lg:right-[-40%] right-[14%]">
              <Image
                width={191}
                height={241}
                src="/assets/images/home/png/label-ratio.png"
                alt="label-jumpingGirl"
              />
            </div>
            {/* ======jumoing-girl-img */}
            <div className="md:absolute lg:bottom-[-26%] bottom-[-38%] lg:left-[38%] left-[54%]">
              <Image
                width={353}
                height={216}
                src="/assets/images/home/png/label-jumpingGirl.png"
                alt="label-jumpingGirl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLabel;
