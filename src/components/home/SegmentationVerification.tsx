import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
const SegmentationVerification = () => {
  return (
    <div>
      <div className="container px-3 mx-auto">
        <PrimaryHeading
          textName="Image"
          textSpan="Segmentation and "
          textSpan2="Verification"
          className="text-center max-w-[506px] mx-auto mb-4 font-poppins"
        />
        <Paragraph
          textName="In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results."
          className="text-center max-w-[740px] mx-auto pb-10"
        />
        <div className="flex flex-wrap flex-row mx-[-12px]">
          <div className="w-[50%] px-3">
            <h3 className="font-gilroy  pb-4">Image Segmentation</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentationVerification;
