import React from "react";
interface BUTTON {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CommonButton = ({ text, className, onClick }: BUTTON) => {
  return (
    <button
      onClick={onClick}
      className={`font-normal text-lg leading-7 rounded-full shadow-3xl text-white hover:text-black px-6 py-[14px] h-[55px] bg-blue hover:bg-white border border-white hover:border-black duration-300 ease-linear ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
