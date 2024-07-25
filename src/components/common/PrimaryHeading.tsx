type PRIMARY_HEADING_PROPS = {
  className: string;
  textName: string;
  spanClass: string;
  spanClass2: string;
  textSpan: string;
  textSpan2: string;
};
const PrimaryHeading = ({
  className,
  textName,
  textSpan,
  spanClass,
  spanClass2,
  textSpan2,
}: PRIMARY_HEADING_PROPS) => {
  return (
    <h2
      className={`xl:text-5xl lg:text-[44px] md:text-[40px] sm:text-4xl text-[32px] !leading-[42px] md:!leading-[52px] sm:!leading-[48px] xl:!leading-[57.6px]  text-black font_gilroy_medium ${className}`}
    >
      {textName}
      <span className={`text-blue ${spanClass}`}>{textSpan}</span>
      <span className={`text-black ${spanClass2}`}>{textSpan2}</span>
    </h2>
  );
};

export default PrimaryHeading;
