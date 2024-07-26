import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="container xl:max-w-[1180px] mx-auto py-40">
      <div className="flex flex-wrap lg:flex-row flex-col-reverse mx-[-12px]">
        <div className="lg:w-[50%] w-full px-3 flex flex-col justify-center items-center lg:pt-0 pt-5">
          <div className="flex flex-col justify-center">
            <PrimaryHeading
              textName="Contact"
              blueText=" Us"
              className="lg:pb-4 pb-2"
            />
            <Paragraph
              className="max-w-[475px] opacity-70 lg:pb-6 pb-4"
              textName="Personalized Finance Tutoring Tailored assistance to meet your unique learning needs.  Expert Tutors Highly qualified tutors with extensive knowledge in finance and related subjects."
            />
            <div className="lg:pb-4 pb-2">
              <label htmlFor="fullName" className="text-lg text-black">
                Full Name*
              </label>
              <br />
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg-mt-3 mt-0"
              />
            </div>
            <div className="lg:pb-4 pb-2">
              <label htmlFor="email" className="text-lg text-black">
                Active Email*
              </label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-3 mt-0"
              />
            </div>
            <div className="lg:pb-4 pb-2">
              <label htmlFor="phone" className="text-lg text-black">
                Phone Number*
              </label>
              <br />
              <input
                type="number"
                id="phone"
                name="phone"
                className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-3 mt-0"
              />
            </div>
            <div className="lg:pb-10 md:pb-8 pb-6">
              <label htmlFor="email" className="text-lg text-black">
                Subject*
              </label>
              <br />
              <input
                type="text"
                id="subject"
                name="subject"
                className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-3 mt-0"
              />
            </div>
            <CommonButton text="Submit Now" className="max-w-[475px] w-full" />
          </div>
        </div>
        <div className="lg:w-[50%] w-full lg:px-3 pb-2 flex flex-col justify-center items-center">
          <div className="bg-light_blue5 rounded-2xl p-5 lg:max-w-[595px] sm:max-w-[482px] max-w-[400px]">
            <p className="font_gilroy_bold lg:text-2xl sm:text-xl text-lg lg:pb-8 pb-3 text-center">
              Choose a time that works for you.
            </p>
            <Image
              width={555}
              height={483}
              src="/assets/images/ai-trainer/svg/calendar.svg"
              alt="label_input_car"
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
