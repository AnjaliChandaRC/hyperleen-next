import React from "react";
type PARAGRAPH = {
  className?: string;
  textName: string;
};

const Paragraph = ({ className, textName }:PARAGRAPH) => {
  return (
    <p
      className={`font-poppins font-normal text-base leading-6 text-gray ${className}`}
    >
      {textName}
    </p>
  );
};

export default Paragraph;
