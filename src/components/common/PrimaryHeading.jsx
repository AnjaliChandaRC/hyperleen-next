import React from "react";

const PrimaryHeading = ({
  className,
  textName,
  textSpan,
  spanClass,
  spanClass2,
  textSpan2,
}) => {
  return (
    <h2 className={`font-medium text-5xl text-black font-gilroy ${className}`}>
      {textName}
      <span className={`text-blue ${spanClass}`}>{textSpan}</span>
      <span className={`text-black ${spanClass2}`}>{textSpan2}</span>
    </h2>
  );
};

export default PrimaryHeading;
