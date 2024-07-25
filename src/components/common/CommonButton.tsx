import React from "react";
interface BUTTON {
  buttonName: string;
  buttonClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CommonButton = ({ buttonName, buttonClass, onClick }: BUTTON) => {
  return (
    <button
      onClick={onClick}
      className={`font-normal text-lg leading-7 rounded-full shadow-3xl text-white hover:text-black  bg-blue py-3 hover:bg-white hover:border-black duration-300 ease-linear px-6 border border-white ${buttonClass}`}
    >
      {buttonName}
    </button>
  );
};

export default CommonButton;
