import React from "react";
type PARAGRAPH = {
  className?: string;
  textName: string;
};

const Paragraph = ({ className, textName }:PARAGRAPH) => {
  return (
    <p
      className={`font-poppins font-normal lg:text-base text-sm lg:leading-6 text-grey ${className}`}
    >
      {textName}
    </p>
  );
};

export default Paragraph;
