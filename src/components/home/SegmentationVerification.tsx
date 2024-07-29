import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";
const SegmentationVerification = () => {
  return (
    <div
      className="xl:pt-40 lg:pt-[100px] md:pt-[100px] pt-20 2xl:max-w-[1536px]"
      id="about"
    >
      <div className="container xl:max-w-[1180px] mx-auto">
        <PrimaryHeading
          textName="Image"
          blueText=" Segmentation and "
          blackText="Verification"
          className="text-center max-w-[506px] mx-auto sm:pb-4 pb-3 lg:leading-lg"
        />
        <Paragraph
          textName="In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results."
          className="text-center max-w-[740px] mx-auto lg:pb-14 sm:pb-8 pb-5"
        />
        <div className="flex flex-wrap lg:flex-row flex-col-reverse mx-[-12px] items-center">
          <div className="lg:w-[50%] w-full px-3 lg:pt-0 sm:pt-5 pt-3">
            <h5 className="font_gilroy_regular font-semibold lg:text-2xxl text-2xl leading-md text-black lg:pb-4 sm-pb-1 pb-0 max-lg:text-center">
              Image Segmentation
            </h5>
            <div className="flex items-center lg:justify-start justify-center">
              <Paragraph
                textName="Image segmentation is the process of partitioning an image into multiple segments to simplify its representation and make it more meaningful. This technique is essential for identifying and analyzing objects within an image, such as cars in autonomous driving applications."
                className="lg:pb-12 max-lg:max-w-[740px] sm:pb-5 pb-2 lg:max-w-[540px] max-lg:text-center"
              />
            </div>
            <div className="max-lg:mx-auto max-lg:text-center">
              <CommonButton text="Learn More" />
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3">
            <div className="relative lg:max-w-[502px] sm:max-w-96 max-w-72 max-lg:mx-auto">
              <Image
                width={502}
                height={483}
                src="/assets/images/home/webp/segmentation-img.webp"
                alt="segmentation-img"
                className="pointer-events-none"
              />
              <div className="bg-blue xl:max-w-[502px] max-w-[488px] rounded-t-2xl lg:p-4 p-2 absolute top-0 w-full">
                <Paragraph
                  textName="Selected All Squares With"
                  className="sm:text-lg text-base text-white lg:pb-2 pb-0"
                />
                <p className="font_gilroy_bold lg:text-2xxl sm:text-2xl text-xl lg:leading-md text-white">
                  Car
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentationVerification;
