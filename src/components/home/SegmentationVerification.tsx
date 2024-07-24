import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";
const SegmentationVerification = () => {
  return (
    <div>
      <div className="container px-3 mx-auto">
        {/* =======segmentation======= */}
        <PrimaryHeading
          textName="Image"
          textSpan=" Segmentation and "
          textSpan2="Verification"
          className="text-center max-w-[506px] mx-auto sm:pb-4 pb-3"
        />
        <Paragraph
          textName="In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results."
          className="text-center max-w-[740px] mx-auto lg:pb-10 sm:pb-8 pb-5"
        />
        {/* ======row-col====== */}
        <div className="flex flex-wrap lg:flex-row flex-col-reverse mx-[-12px] items-center">
          <div className="lg:w-[50%] w-full px-3 lg:pt-0 sm:pt-5 pt-3">
            <h5 className="font-Gilroy font-semibold lg:text-2xxl text-2xl leading-md text-black lg:pb-4 sm-pb-1 pb-0 max-lg:text-center">
              Image Segmentation
            </h5>
            <Paragraph
              textName="Image segmentation is the process of partitioning an image into multiple segments to simplify its representation and make it more meaningful. This technique is essential for identifying and analyzing objects within an image, such as cars in autonomous driving applications."
              className="lg:pb-12 sm:pb-5 pb-2 lg:max-w-[540px] max-lg:text-center"
            />
            <div className="max-lg:mx-auto max-lg:text-center">
              <CommonButton buttonName="Learn More" buttonClass="" />
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3">
            <div className="relative lg:max-w-[502px] sm:max-w-96 max-w-72 max-lg:mx-auto">
              <Image
                width={502}
                height={483}
                src="/assets/images/home/webp/segmentation-img.webp"
                alt="segmentation-img"
              />
              <div className="bg-blue max-w-[502px] rounded-t-2xl lg:p-4 p-2 absolute top-0 lg:w-[502px] w-full">
                <p className="font-poppins font-normal sm:text-lg text-base text-white lg:pb-2 pb-0">
                  Selected All Squares With
                </p>
                <p className="font-Gilroy font-semibold lg:text-2xxl sm:text-2xl text-xl lg:leading-md text-white">
                  Car
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* =======verification======= */}
        <div className="flex flex-wrap lg:flex-row flex-col-reverse mx-[-12px] items-center pt-10 pb-40">
          <div className="w-[50%] px-3">
            <div className="relative border border-blue max-w-[502px] rounded-2xl">
              {/* =====verficationImg===== */}
              <Image
                width={502}
                height={483}
                src="/assets/images/home/png/verification-img.png"
                alt="segmentation-img"
              />
              {/* ====blueLayer==== */}
              <div className="absolute top-[-20px] left-[-20px] z-[-1]">
                <Image
                  width={395}
                  height={370}
                  src="/assets/images/home/png/blue-verification-layer.png"
                  alt="segmentation-img"
                />
              </div>
              {/* =====blue-box-content=== */}
              <div className="bg-blue max-w-[502px] rounded-t-2xl lg:p-4 p-2 absolute top-0 lg:w-[502px] w-full">
                <p className="font-Gilroy font-semibold lg:text-2xxl sm:text-2xl text-xl lg:leading-md text-white">
                  Is Previous Selected Object is Correct?
                </p>
              </div>
              <p className="font-Gilroy font-semibold text-2xl">
                Confirm your action
              </p>
              <Paragraph
                textName="Confirm if the segmentation was performed correctly."
              
              />
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3 lg:pt-0 sm:pt-5 pt-3">
            <h5 className="font-Gilroy font-semibold lg:text-2xxl text-2xl leading-md text-black lg:pb-4 sm-pb-1 pb-0 max-lg:text-center">
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

export default SegmentationVerification;
