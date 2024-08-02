"use client";
import React, { useState, ChangeEvent, useCallback, useEffect } from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";
import { LabelSvg, PenSvg } from "../common/Icons";

const DEFAULT_IMAGE_URL = "/assets/images/home/webp/label-input-car.webp";
const DEFAULT_IMAGE_NAME = "Car";

const AddLabel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    DEFAULT_IMAGE_URL
  );
  const [imageName, setImageName] = useState<string>(DEFAULT_IMAGE_NAME);

  const HANDLE_FILE_CHANGE = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && file.type.startsWith("image/")) {
        setSelectedImage(URL.createObjectURL(file));
        setImageName(file.name);
      } else {
        alert("Please select a valid image file.");
      }
    },
    []
  );

  const HANDLE_OK_CLICK = () => {
    setSelectedImage(DEFAULT_IMAGE_URL);
    setImageName(DEFAULT_IMAGE_NAME);
  };

  useEffect(() => {
    return () => {
      if (selectedImage && selectedImage !== DEFAULT_IMAGE_URL) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  return (
    <div className="relative xl:pt-20 2xl:max-w-[1536px] mx-auto" id="label">
      <div className="absolute lg:block hidden right-0 -top-[80%] opacity-10 pointer-events-none">
        <LabelSvg />
      </div>
      <div className="container xl:max-w-[1180px] mx-auto">
        <div className="flex flex-wrap flex-row mx-[-12px] items-center">
          <div className="lg:w-[50%] w-full px-3 z-10">
            <PrimaryHeading
              textName="Add"
              blueText=" Label"
              blackText=" of an Image"
              className="max-w-[478px] leading-lg max-lg:text-center max-lg:mx-auto"
            />
            <Paragraph
              textName="Efficient and Accurate Labeling on Image."
              className="md:mt-4 sm:mt-2 mt-0 max-lg:text-center"
            />
            <div className="lg:max-w-[462px] sm:max-w-[386px] max-w-[400px] rounded-2xl border-[0.5px] border-blue bg-white md:p-5 p-4 md:mt-6 mt-4 max-lg:mx-auto">
              <p className="font-semibold text-black">
                Upload Image and add label
              </p>
              <div className="max-w-[422px] w-full rounded-xl bg-light_grey p-5 mt-5">
                <input
                  type="file"
                  accept="image/*"
                  aria-label="search-file"
                  onChange={HANDLE_FILE_CHANGE}
                  className="cursor-pointer mb-4 px-4 py-2 border border-gray-300 rounded w-full absolute z-[1] max-w-[261px] lg:max-w-[380px] h-[180px]"
                />
                <Image
                  width={382}
                  height={180}
                  src={selectedImage as string}
                  alt={imageName}
                  className="pointer-events-none rounded h-[180px] relative z-[2]"
                />
                <div className="max-w-[422px] w-full border-[0.5px] border-grey p-[12px_0px_45px_12px] rounded-xl mt-4">
                  <div className="flex gap-2">
                    <Paragraph
                      textName={imageName}
                      className="text-black opacity-40"
                    />
                    <PenSvg />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 lg:mt-9 mt-5 justify-center">
                <CommonButton
                  text="Ok"
                  className="lg:max-w-[203px] max-w-[106px] w-full"
                  onClick={HANDLE_OK_CLICK}
                />
                <button className="text-lg text-black py-2 sm:py-3.5 lg:px-[69px] px-5 rounded-[100px] border border-black hover:bg-blue hover:text-white hover:border-transparent duration-300 ease-linear sm:h-[55px] h-[50px]">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3 max-lg:flex max-lg:justify-center z-10 max-lg:items-center lg:pt-0 pt-10">
            <div className="relative">
              {/* ======project-overview-img===== */}
              <Image
                width={399}
                height={359}
                src="/assets/images/home/webp/label-yellow-jacket-girl.webp"
                alt="label-yellowJacketGirl"
                className="pointer-events-none max-sm:max-w-full xl:w-[475px] max-lg:relative max-lg:-left-[71px] max-sm:left-0 max-lg:max-w-full xl:relative xl:-left-[71px]"
              />
              {/* ====graph-image====== */}
              <div className="absolute xl:left-[69%] lg:left-[70%] max-lg:w-full md:left-[79%] left-[77%] max-sm:w-auto xl:-top-[1px] -top-[1%] xl:max-w-[191px] max-w-36 max-sm:max-w-[160px] lg:w-full lg:shadow-13xl shadow-14xl rounded-2xl">
                <Image
                  width={191}
                  height={241}
                  src="/assets/images/home/webp/label-graph-img.webp"
                  alt="label-ratio"
                  className="pointer-events-none max-sm:max-w-full"
                />
              </div>
              {/* ======jumping-girl-img */}
              <div className="absolute lg:left-[39%] max-lg:w-full max-sm:w-auto lg:!-bottom-[17%] left-[50%]  bottom-[-8%] max-lg:max-w-[300px] xl:w-[353px] lg:shadow-13xl shadow-14xl rounded-2xl">
                <Image
                  width={353}
                  height={216}
                  src="/assets/images/home/webp/label-jumping-girl.webp"
                  alt="label_jumping_girl"
                  className="pointer-events-none max-sm:max-w-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLabel;
