"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import {
  CommentSenderArrow,
  IconListLogo,
  LeftArrow,
  Pen,
  RightArrow,
  SmallFavIcon,
} from "../common/Icons";

const Mastering = () => {
  const [inputValue, setInputValue] = useState('');
  const ADD_COMMENT = () => {
    if (inputValue.trim() === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Input cannot be empty",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${inputValue} has been posted`,
      showConfirmButton: false,
      timer: 1500,
    });
    setInputValue('');
  };

  return (
    <div className="xl:pt-[160px] lg:pt-20 pt-16">
      <div className="px-5">
        <PrimaryHeading
          textName="Mastering"
          blueText=" Detailed"
          blackText=" Explanations"
          className="text-center"
        />
        <Paragraph
          textName="Providing In-Depth, Customized Solutions to Complex Queries"
          className="text-center pt-4"
        />
        <div className="container max-w-[1180px] mx-auto mt-10 bg-light_skyblue lg:py-11 py-8 md:px-6 px-4 rounded-2xl">
          <div className="flex justify-end items-center gap-4">
            <Pen />
            <div className="max-w-[690px] w-full lg:py-5 py-3 pl-3 lg:pl-5 border-[0.5px] border-grey rounded-xl bg-white">
              <h3 className="font-medium">
                What is data annotation, and why is it important?
              </h3>
            </div>
          </div>
          <div className="items-center flex justify-end gap-3 lg:pt-4 pt-3">
            <LeftArrow />
            <Paragraph
              textName="1/1"
              className="text-lg font_gilroy_medium"
            />
            <RightArrow />
          </div>
          <div className="flex items-start lg:gap-8 md:gap-6 gap-4 lg:pt-[6px] pt-3">
            <div className="max-w-9 min-h-9 h-full w-full rounded-full bg-light_blue3 items-center justify-center flex border border-transparent hover:border-blue ease-in-out duration-300">
              <SmallFavIcon />
            </div>
            <div>
              <Paragraph textName='   Data annotation is the process of labeling data to make it
                usable for machine learning algorithms. It&apos;s essential
                because accurately labeled data is critical for training
                models to understand and interpret real-world information.' className='text-grey max-w-[935px] md:text-xl font_gilroy_medium' />
              <Paragraph textName='  We specialize in annotating various data types, including
                text, images, audio, and video. Our services cover sentiment
                analysis, image segmentation, object detection, and more.' className='text-grey max-w-[935px] md:text-xl font_gilroy_medium lg:pt-5 sm:pt-3 pt-2' />
            </div>
          </div>
          <div className="flex sm:p-5 lg:p-7 p-2 border-grey border-[0.5px] rounded-xl gap-4 bg-white lg:mt-20 md:mt-10 mt-6">
            <div className="cursor-pointer">
              <IconListLogo />
            </div>
            <input
              type="text"
              placeholder="Message Hyperleen"
              className="font-medium text-grey opacity-40 outline-none w-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="cursor-pointer" onClick={ADD_COMMENT}>
              <CommentSenderArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mastering;
