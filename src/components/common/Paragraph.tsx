import React from "react";
interface PARAGRAPH {
  className: string;
  textName: string;
}

const Paragraph = ({ className, textName }: PARAGRAPH) => {
  return <p className={`leading-6 text-grey ${className}`}>{textName}</p>;
};

export default Paragraph;
