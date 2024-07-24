import Image from "next/image";
import { items } from "../common/Helper";
import CommonButton from "../common/CommonButton";

interface Item {
  id: number;
  label: string;
  maxWidth: string;
}

const Hero = () => {
  return (
    <div className='py-16 bg-header_bg headerSection bg-full bg-center bg-no-repeat max-w-[1920px] mx-auto'>
      <div className='container'>
        <div className='max-w-[824px] mx-auto'>
          <div className='flex items-center justify-center gap-4 pb-6'>
            <div className='w-[43px]'>
              <Image width={100} height={100} src={'/assets/images/home/png/header_line_1.png'} alt='line with a circle' />
            </div>
            <p className='font-poppins font-normal text-base text-blue'>AI Solutions</p>
            <div className='w-[43px]'>
              {/* image here */}
              <Image width={100} height={100} src={'/assets/images/home/png/header_line_2.png'} alt='line with a circle' />
            </div>
          </div>
          <div className='overflow-auto'>
            <div className='flex items-center md:justify-center justify-between md:gap-6 gap-3 max-lg:flex-wrap w-[824px] max-lg:pb-1'>
              {items.map(item => (
                <div key={item.id} className='rounded-[144px] border border-[#0A02EC] min-h-[44px] w-full bg-light_blue font-poppins font-normal text-base flex items-center justify-center' style={{ maxWidth: item.maxWidth }}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <p className='text-center xl:text-3xxl md:text-6xl sm:text-5xl text-3xl font_gilroy_medium md:leading-xl sm:leading-lg lg:pt-11 pt-8 pb-5'>Transform Your <span className='text-blue font_gilroy_medium'>Data into AI</span> Insights</p>
          <div className='flex items-center justify-center lg:pb-10 pb-6'>
            <p className='text-center max-w-[634px] font-poppins font-normal text-base text-grey'>Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.</p>
          </div>
          {/* common btn here */}
          <div className="flex items-center justify-center gap-3 xl:ps-11 lg:ps-6">
            <CommonButton buttonName='Get Started' />
            <CommonButton buttonClass='!bg-white !border-black !border !text-black hover:!bg-blue hover:!text-white hover:!border-transparent !shadow-none' buttonName='Try For Free' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero