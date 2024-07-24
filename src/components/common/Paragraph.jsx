import React from "react";

const Paragraph = ({ className, textName }) => {
  return (
    <p
      className={`font-poppins font-normal text-base leading-6 text-gray ${className}`}
    >
      {textName}
    </p>
  );
};

export default Paragraph;
