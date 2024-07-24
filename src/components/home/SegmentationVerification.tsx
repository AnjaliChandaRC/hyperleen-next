import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";
const SegmentationVerification = () => {
  return (
    <div>
      <div className="container px-3 mx-auto">
        <PrimaryHeading
          textName="Image"
          textSpan=" Segmentation and "
          textSpan2="Verification"
          className="text-center max-w-[506px] mx-auto mb-4 font-poppins"
        />
        <Paragraph
          textName="In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results."
          className="text-center max-w-[740px] mx-auto pb-10"
        />
        <div className="flex flex-wrap flex-row mx-[-12px] items-center">
          <div className="w-[50%] px-3">
            <h5 className="font-Gilroy font-semibold text-2xxl leading-md text-black pb-4">
              Image Segmentation
            </h5>
            <Paragraph
              textName="Image segmentation is the process of partitioning an image into multiple segments to simplify its representation and make it more meaningful. This technique is essential for identifying and analyzing objects within an image, such as cars in autonomous driving applications."
              className="pb-12 max-w-[540px]"
            />
            <CommonButton buttonName="Learn More" buttonClass="" />
          </div>
          <div className="w-[50%] px-3">
            <div className="relative">
              <Image
                width={502}
                height={483}
                src="/assets/images/home/webp/segmentation-img.webp"
                alt="segmentation-img"
              />
              <div className="bg-blue max-w-[502px] rounded-t-2xl p-4 absolute top-0 w-[502px]">
                <p className="font-poppins font-normal text-lg text-white pb-2">
                  Selected All Squares With
                </p>
                <p className="font-Gilroy font-semibold text-2xxl leading-md text-white">
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
