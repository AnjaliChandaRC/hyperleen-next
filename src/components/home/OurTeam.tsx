import React from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { TeamMember, teamMembers } from "../common/Helper";
import {
  Facebook_Icon,
  Instagram_Icon,
  LinkedIn_Icon,
  Mail_Icon,
  Phone_Icon,
} from "../common/Icons";

const OurTeam = () => {
  interface SocialLink {
    url: string;
    icon: string;
  }
  return (
    <div className="py-[183px] bg-ourTeam bg-full bg-no-repeat bg-center relative z-30 overflow-hidden">
      <div className="container 2xl:max-w-[1368px] xl:max-w-[1188px]">
        <div className="mx-auto max-w-[411px] mb-[58px]">
          <PrimaryHeading
            textName="Our Team"
            className="!text-white text-center mb-4"
          />
          <Paragraph
            className="!text-white opacity-70 text-center"
            textName="Meet our dedicated team of experts ensuring precision and quality in every data labeling task."
          />
        </div>
        <div className="flex flex-row flex-wrap -mx-[10px]">
          {/* using map-method */}
          {teamMembers.map((member: TeamMember, index: number) => (
            <div
              key={index}
              className="px-[10px] w-full md:w-1/2 flex justify-center mb-12
               md:mb-0"
            >
              <div className="max-w-[560px] w-full h-full rounded-2xl bg-white">
                <div className="relative">
                  <Image
                    src={member.image}
                    width={560}
                    height={393}
                    alt={`${member.name}-Image`}
                    className="rounded-t-xl"
                  />
                  <div className="flex flex-col items-center gap-4 absolute right-0 top-0 py-4 px-2 bg-smoke_grey2 shadow-4xl rounded-tr-2xl">
                    <Link
                      href="https://www.linkedin.com/login"
                      className="min-w-8 h-8 bg-blue rounded-full flex justify-center items-center  hover:shadow-3xl duration-300 ease-linear"
                    >
                      <LinkedIn_Icon />
                    </Link>
                    <Link
                      href="https://www.facebook.com/login/"
                      className="min-w-8 h-8 bg-blue rounded-full flex justify-center items-center  hover:shadow-3xl duration-300 ease-linear"
                    >
                      <Facebook_Icon />
                    </Link>
                    <Link
                      href="https://www.instagram.com/accounts/login/?hl=en"
                      className="min-w-8 h-8 bg-blue rounded-full flex justify-center items-center  hover:shadow-3xl duration-300 ease-linear"
                    >
                      <Instagram_Icon />
                    </Link>
                  </div>
                </div>
                <div className="p-4 flex flex-col xl:gap-6 lg:gap-4 md:gap-4">
                  <div className="flex flex-col xl:flex-row gap-2 justify-between">
                    <div className=" flex xl:flex-col flex-row-reverse max-xl:items-center justify-between">
                      <h3 className="font-semibold text-nowrap text-2xl leading-8 text-black mb-1 font_gilroy_bold">
                        {member.name}
                      </h3>
                      <h4 className="font-poppins text-nowrap font-normal text-lg leading-7 text-grey">
                        {member.role}
                      </h4>
                    </div>
                    <div className="flex xl:flex-col flex-row justify-between max-xl:items-center gap-2 ">
                      <Link
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-3"
                      >
                        <span>
                          <Phone_Icon />
                        </span>
                        <span className="font-normal text-base font-poppins leading-6 text-blue">
                          {member.phone}
                        </span>
                      </Link>
                      <Link
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3"
                      >
                        <span>
                          <Mail_Icon />
                        </span>
                        <span className="font-normal text-base font-poppins leading-6 text-blue">
                          {member.email}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Paragraph textName={member.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ellips */}
      <Image
        className=" absolute -z-30 -left-[62px] -top-[57px] min-h-full -rotate-[16] pointer-events-none"
        src="/assets/images/home/webp/team_Layer.webp"
        height="1548"
        width="313"
        alt="layer"
      />
    </div>
  );
};

export default OurTeam;
