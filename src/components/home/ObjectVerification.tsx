import React from "react";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";

const ObjectVerification = () => {
  return (
    <div className="lg:pb-72 md:pb-16 pb-5">
      <div className="container">
        {/* =======verification======= */}
        <div className="flex flex-wrap flex-row mx-[-12px] items-center lg:pt-16 pt-16">
          <div className="lg:w-[50%] w-full px-3">
            <div className="relative border border-blue lg:max-w-[502px] sm:max-w-96 max-w-72 rounded-2xl max-lg:mx-auto">
              {/* =====verficationImg===== */}
              <Image
                width={502}
                height={483}
                src="/assets/images/home/webp/verification-img.webp"
                alt="segmentation-img"
                className="rounded-2xl"
              />
              {/* ====blueLayer==== */}
              <div className="absolute top-[-20px] left-[-20px] z-[-1] md:block hidden">
                <Image
                  width={395}
                  height={370}
                  src="/assets/images/home/webp/blue-verification-layer.webp"
                  alt="segmentation-img"
                />
              </div>
              {/* =====blue-box-content=== */}
              <div className="bg-blue max-w-[502px] rounded-t-2xl lg:p-4 p-2 absolute top-0 lg:w-[502px] !w-full">
                <p className="font_gilroy_regular font-semibold lg:text-2xxl sm:text-2xl text-lg lg:leading-md leading-6 text-white">
                  Is Previous Selected Object is Correct?
                </p>
              </div>
              {/* ====white-box==== */}
              <div className="absolute shadow bg-white lg:max-w-[339px] max-w-64 w-full lg:py-4 py-2 px-3 bottom-[-23%] left-[-21px] rounded-xl">
                <p className="font-Gilroy font-semibold lg:text-2xl sm:text-xl text-base text-center text-black pb-1">
                  Confirm your action
                </p>
                <Paragraph
                  textName="Confirm if the segmentation was performed correctly."
                  className="max-w-[293px] text-center lg:pb-9 pb-3 lg:text-base text-sm"
                />
                <div className="flex gap-4 justify-center">
                  <button className=" font-normal lg:text-lg lg:leading-7 text-base font-poppins rounded-full shadow-3xl text-white hover:text-black  bg-blue lg:py-3.5 py-2 hover:bg-white hover:border-black duration-300 ease-linear lg:px-[58px] px-10 border border-white">
                    Yes
                  </button>
                  <button className=" font-poppins font-normal text-lg text-black py-3.5 lg:px-[58px] px-10 rounded-[100px] border border-black hover:bg-blue hover:text-white hover:border-transparent duration-300 ease-linear">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3 lg:pt-24 sm:pt-24 pt-20">
            <h5 className="font_gilroy_regular font-semibold lg:text-2xxl text-2xl leading-md text-black lg:pb-4 sm-pb-1 pb-0 max-lg:text-center">
              Verification
            </h5>
            <Paragraph
              textName="Verification is a crucial step to ensure the accuracy of the labeled data. It involves reviewing the segmented image to confirm if the segmentation was performed correctly"
              className="lg:pb-12 sm:pb-5 pb-2 lg:max-w-[540px] max-lg:text-center"
            />
            <div className="max-lg:mx-auto max-lg:text-center">
              <CommonButton buttonName="Learn More" buttonClass="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectVerification;
