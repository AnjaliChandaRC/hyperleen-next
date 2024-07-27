type PRIMARY_HEADING_PROPS = {
  className: string;
  textName: string;
  blueTextClass?: string;
  blackTextClass?: string;
  blueText?: string;
  blackText?: string;
};
const PrimaryHeading = ({
  className,
  textName,
  blackText,
  blackTextClass,
  blueTextClass,
  blueText,
}: PRIMARY_HEADING_PROPS) => {
  return (
    <h2
      className={`xl:text-5xl lg:text-[44px] md:text-[40px] sm:text-4xl text-[28px] xl:!leading-[57.6px] md:!leading-[52px] sm:!leading-[48px] !leading-[35px] text-black font_gilroy_medium ${className}`}
    >
      {textName}
      <span className={`text-blue ${blueTextClass}`}>{blueText}</span>
      <span className={`text-black ${blackTextClass}`}>{blackText}</span>
    </h2>
  );
};

export default PrimaryHeading;
