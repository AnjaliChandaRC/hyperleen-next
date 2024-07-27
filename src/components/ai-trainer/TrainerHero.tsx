import React from "react";
import { Header_line, Header_line_2 } from "../common/Icons";
import Paragraph from "../common/Paragraph";
import PrimaryHeading from "../common/PrimaryHeading";

const TrainerHero = () => {
  return (
    <div
      className="py-[49px] max-sm:pt-10 bg-trainer_hero bg-full bg-center bg-no-repeat max-w-[1440px] mx-auto"
      id="home"
    >
      <div className="container max-w-[1180px]">
        <div className="xl:max-w-[632px] md:max-w-[600px] max-w-[550px] mx-auto">
          <div className="flex items-center justify-center gap-4 md:mb-6 mb-5">
            <div className="w-[43px]">
              <Header_line />
            </div>
            <Paragraph className="!text-blue" textName="AI Trainer" />
            <div className="w-[43px]">
              <Header_line_2 />
            </div>
          </div>
          <PrimaryHeading
            className="md:mb-6 sm:mb-5 mb-4 text-center"
            textName="Elevate Your "
            blueText="Code with Expert "
            blackText="AI Training"
          />
          <Paragraph
            className="text-center"
            textName="Quality Code, Expert Evaluations, and Robust Test Cases"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainerHero;
