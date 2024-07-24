import React from "react";

const CommonButton = ({ buttonName, buttonClass }) => {
  return (
    <button
      className={` font-normal text-lg leading-7 font-poppins rounded-full shadow-3xl text-white hover:text-black  bg-blue py-[13px] hover:bg-white hover:border-black duration-300 ease-linear px-6 border border-white ${buttonClass}`}
    >
      {buttonName}
    </button>
  );
};

export default CommonButton;
