type PRIMARY_HEADING_PROPS = {
  className?: string;
  textName: string;
  spanClass?: string;
  spanClass2?: string;
  textSpan?: string;
  textSpan2?: string;
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
    <h2 className={`text-5xl text-black font_gilroy_medium ${className}`}>
      {textName}
      <span className={`text-blue ${spanClass}`}>{textSpan}</span>
      <span className={`text-black ${spanClass2}`}>{textSpan2}</span>
    </h2>
  );
};

export default PrimaryHeading;
