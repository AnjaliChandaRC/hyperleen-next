import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "../common/Helper";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "../common/Icons";
import Paragraph from "../common/Paragraph";

const OurTeam = () => {
  interface TeamMember {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
    columnClass: string;
  }

  return (
    <div className="xl:py-[183px] py-[160px] 2xl:max-w-[1920px] mx-auto bg-ourTeam bg-cover md:bg-full bg-no-repeat bg-center relative z-30 overflow-hidden">
      <div className="container 2xl:max-w-[1344px] xl:max-w-[1180px] xl:px-5 2xl:px-3">
        <div className="mx-auto xl:max-w-[411px] xl:mb-[58px] lg:mb-9 mb-8">
          <PrimaryHeading
            textName="Our Team"
            className="!text-white text-center sm:mb-4 mb-3"
          />
          <Paragraph
            className="!text-white opacity-70 text-center"
            textName="Meet our dedicated team of experts ensuring precision and quality in every data labeling task."
          />
        </div>
        <div className="flex flex-row flex-wrap -mx-[10px] 2xl:-mx-5">
          {/* using map-method */}
          {teamMembers.map((member: TeamMember, index: number) => (
            <div key={index} className={member.columnClass}>
              <div className="md:max-w-[560px] max-w-[520px] 2xl:max-w-full w-full h-full rounded-2xl bg-white flex justify-between flex-col">
                <div className="relative">
                  <Image
                    src={member.image}
                    width={560}
                    height={393}
                    alt={`${member.name}-Image`}
                    className="rounded-t-xl w-full"
                  />
                  <div className="flex flex-col items-center gap-4 absolute right-0 top-0 py-4 px-2 bg-smoke_grey2 shadow-4xl rounded-tr-2xl">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/login"
                      className="min-w-8 h-8 bg-blue hover:bg-white group/social rounded-full flex justify-center items-center  hover:shadow-3xl duration-300 ease-linear"
                    >
                      <LinkedInIcon />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/login/"
                      className="min-w-8 h-8 bg-blue hover:bg-white group/social rounded-full flex justify-center items-center  hover:shadow-3xl duration-300 ease-linear"
                    >
                      <FacebookIcon />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/accounts/login/?hl=en"
                      className="min-w-8 h-8 bg-blue hover:bg-white group/social rounded-full flex justify-center items-center  hover:shadow-3xl duration-300 ease-linear"
                    >
                      <InstagramIcon />
                    </Link>
                  </div>
                </div>
                {/* member-data */}
                <div className="p-4">
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 justify-between xl:mb-6 sm:mb-4 mb-3 max-xl:items-center max-lg:items-start">
                    <div>
                      <h3 className="font-semibold font_gilroy_bold text-nowrap md:text-2xl text-[22px] leading-[26px] md:leading-[33.6px] text-black mb-1">
                        {member.name}
                      </h3>
                      <h4 className="text-nowrap font-normal text-lg leading-7 text-grey">
                        {member.role}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2 h-fit">
                      <Link
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-3 hover:scale-95 duration-300 ease-linear"
                      >
                        <span>
                          <PhoneIcon />
                        </span>
                        <span className="font-normal text-base leading-6 text-blue duration-300 ease-linear">
                          {member.phone}
                        </span>
                      </Link>
                      <Link
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 hover:scale-95 duration-300 ease-linear"
                      >
                        <span>
                          <MailIcon />
                        </span>
                        <span className="font-normal text-base leading-6 text-blue duration-300 ease-linear">
                          {member.email}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Paragraph textName="Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified." />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ellips */}
      <Image
        className="absolute -z-30 -left-[32px] -top-[57px] min-h-full -rotate-[16deg] pointer-events-none"
        src="/assets/images/home/webp/team_Layer.webp"
        height="1548"
        width="313"
        alt="layer"
      />
    </div>
  );
};

export default OurTeam;
