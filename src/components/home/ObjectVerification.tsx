import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";

const ObjectVerification = () => {
  return (
    <div className="xl:pb-72 pb-16 lg:pb-40">
      <div className="container xl:max-w-[1180px] mx-auto">
        <div className="flex flex-wrap flex-row mx-[-12px] items-center pt-16">
          <div className="lg:w-[50%] w-full px-3">
            <div className="relative border border-blue lg:max-w-[502px] sm:max-w-96 max-w-72 rounded-2xl max-lg:mx-auto">
              <Image
                width={502}
                height={483}
                src="/assets/images/home/webp/verification-img.webp"
                alt="segmentation-img"
                className="rounded-2xl pointer-events-none"
              />
              <div className="absolute xl:top-[-20px] top-[-10px] xl:left-[-20px] left-[-10px] z-[-1] md:block hidden max-lg:max-w-72">
                <Image
                  width={395}
                  height={370}
                  src="/assets/images/home/webp/blue-verification-layer.webp"
                  alt="segmentation-img"
                  className="pointer-events-none"
                />
              </div>
              <div className="bg-blue max-w-[502px] rounded-t-2xl xl:p-4 lg:p-3 p-2 absolute top-0 lg:w-[502px] !w-full">
                <Paragraph
                  textName="Is Previous Selected Object is Correct?"
                  className="font_gilroy_regular font-semibold lg:text-2xxl sm:text-2xl text-lg lg:leading-md leading-6 text-white"
                />
              </div>
              <div className="absolute shadow-12xl bg-white lg:max-w-[339px] max-w-64 w-full lg:py-4 py-2 px-3 bottom-[-25%] xl:left-[-21px] left-[-9px] rounded-xl">
                <Paragraph
                  textName="Confirm your action"
                  className="font_gilroy_bold lg:text-2xl sm:text-xl text-base text-center !text-black pb-1"
                />
                <Paragraph
                  textName="Confirm if the segmentation was performed correctly."
                  className="max-w-[293px] text-center lg:pb-9 pb-3 lg:text-base text-sm"
                />
                <div className="flex gap-4 justify-center">
                  <CommonButton
                    text="Yes"
                    className="lg:px-[58px] sm:px-11 px-8 max-sm:py-2"
                  />
                  <button className="text-lg text-black lg:py-3.5 py-2 lg:px-[58px] px-3 sm:px-11 rounded-[100px] border border-black hover:bg-blue hover:text-white hover:border-transparent duration-300 ease-linear w-[96px] sm:w-[148px] sm:h-[55px] h-[50px]">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full px-3 lg:pt-24 sm:pt-28 pt-20">
            <h5 className="font_gilroy_regular font-semibold lg:text-2xxl text-2xl leading-md text-black lg:pb-4 sm-pb-1 pb-0 max-lg:text-center">
              Verification
            </h5>
            <div className="flex items-center lg:justify-start justify-center">
              <Paragraph
                textName="Verification is a crucial step to ensure the accuracy of the labeled data. It involves reviewing the segmented image to confirm if the segmentation was performed correctly"
                className="lg:pb-12 max-lg:max-w-[740px] sm:pb-5 pb-2 lg:max-w-[540px] max-lg:text-center"
              />
            </div>
            <div className="max-lg:mx-auto max-lg:text-center">
              <CommonButton text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectVerification;
