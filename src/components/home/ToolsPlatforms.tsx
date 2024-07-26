import React from 'react'
import Image from 'next/image'
import PrimaryHeading from '../common/PrimaryHeading'


const ToolsPlatforms = () => {
  return (
    <div className="container py-16 md:py-[80px] xl:py-[160px] xl:max-w-[1180px]">
      <div className="flex flex-col items-center">
        <PrimaryHeading
          textName="Tools and "
          blueText=" Platforms for Polygon "
          blackText="Annotations"
          className="max-w-[652px] text-center"
        />
        <div>
          <Image
            src="/assets/images/home/png/tools-img1.png"
            width={1140}
            height={107}
            alt="tools-img1"
            className="mt-4 xl:mt-16"
          />
          <Image
            src="/assets/images/home/png/tools-img2.png"
            width={1140}
            height={107}
            alt="tools-img1"
            className="mt-4 xl:mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default ToolsPlatforms