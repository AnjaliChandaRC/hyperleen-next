import React from "react";
type PARAGRAPH = {
  className?: string;
  textName: string;
};

const Paragraph = ({ className, textName }: PARAGRAPH) => {
  return (
    <p
      className={`text-grey ${className}`}
    >
      {textName}
    </p>
  );
};

export default Paragraph;
