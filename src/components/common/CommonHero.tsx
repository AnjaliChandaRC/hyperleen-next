import { Header_line, Header_line_2 } from "./Icons";
import Paragraph from "./Paragraph";
import PrimaryHeading from "./PrimaryHeading";

interface CommonHero {
  textHero: string;
  textHeading: string;
  blueTextHeading: string;
  blackTextHeading: string;
  textParagraph: string;
  className?: string;
}
const CommonHero = ({
  textHero,
  textHeading,
  blueTextHeading,
  blackTextHeading,
  textParagraph,
  className,
}: CommonHero) => {
  return (
    <div
      className="xl:py-[49px] py-20 max-sm:pt-16 bg-trainer_hero bg-full bg-center bg-no-repeat 2xl:max-w-[1536px] mx-auto"
      id="home"
    >
      <div className="container max-w-[1180px]">
        <div className={`mx-auto ${className}`}>
          <div className="flex items-center justify-center gap-4 lg:mb-6 sm:mb-5 mb-4">
            <div className="w-[43px]">
              <Header_line />
            </div>
            <Paragraph className="!text-blue" textName={textHero} />
            <div className="w-[43px]">
              <Header_line_2 />
            </div>
          </div>
          <PrimaryHeading
            className="lg:mb-6 mb-3 text-center"
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

export default CommonHero;
