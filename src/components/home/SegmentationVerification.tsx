import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
const SegmentationVerification = () => {
  return (
    <div>
      <div className="container px-3">
        <PrimaryHeading
          textName="Image"
          textSpan="Segmentation and "
          textSpan2="Verification"
        />
        <Paragraph textName="In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results." />
      </div>
    </div>
  );
};

export default SegmentationVerification;
