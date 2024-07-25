import React from "react";
interface BUTTON {
  className?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CommonButton = ({ className, text, onClick }: BUTTON) => {
  return (
    <button
      onClick={onClick}
      className={` font-normal text-lg leading-7 font-poppins rounded-full shadow-3xl text-white hover:text-black  bg-blue py-3 hover:bg-white hover:border-black duration-300 ease-linear px-6 border border-white ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
