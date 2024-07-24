import React from "react";

const CommonButton = ({ buttonName, buttonClass }) => {
  return (
    <button
      className={` font-normal text-lg leading-7 font-poppins text-white hover:text-black shadow-3xl bg-blue py-[14px] px-6 border border-white ${buttonClass}`}
    >
      {buttonName}
    </button>
  );
};

export default CommonButton;
