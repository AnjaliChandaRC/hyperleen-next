import React from "react";
import { Header_line, Header_line_2 } from "../common/Icons";
import Paragraph from "../common/Paragraph";
import PrimaryHeading from "../common/PrimaryHeading";

interface CommonHero {
  textHero: string;
  textHeading: string;
  blueTextHeading: string;
  blackTextHeading: string;
  textParagraph: string;
  className?: string;
}
const Hero = ({
  textHero,
  textHeading,
  blueTextHeading,
  blackTextHeading,
  textParagraph,
  className,
}: CommonHero) => {
  return (
    <div
      className="py-[49px] max-sm:pt-10 bg-trainer_hero bg-full bg-center bg-no-repeat max-w-[1440px] mx-auto"
      id="home"
    >
      <div className="container max-w-[1180px]">
        <div className={`mx-auto ${className}`}>
          <div className="flex items-center justify-center gap-4 lg:mb-6 mb-5">
            <div className="w-[43px]">
              <Header_line />
            </div>
            <Paragraph className="!text-blue" textName={textHero} />
            <div className="w-[43px]">
              <Header_line_2 />
            </div>
          </div>
          <PrimaryHeading
            className="lg:mb-6 mb-4 text-center"
            textName={textHeading}
            blueText={blueTextHeading}
            blackText={blackTextHeading}
          />
          <Paragraph className="text-center" textName={textParagraph} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
