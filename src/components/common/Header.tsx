"use client";
import header_logo from '../../../public/assets/images/home/png/header_logo.png'
import header_line_1 from '../../../public/assets/images/home/png/header_line_1.png'
import header_line_2 from '../../../public/assets/images/home/png/header_line_2.png'

import Image from 'next/image';
import { useState } from 'react';
import CommonButton from './CommonButton';

interface Item {
  id: number;
  label: string;
  maxWidth: string;
}

interface NavLink {
  tabText: string;
  href: string;
}

const Header = () => {
  const navLink: NavLink[] = [
    { tabText: "Home", href: "#home" },
    { tabText: "Label", href: "#label" },
    { tabText: "About Us", href: "#about" },
    { tabText: "How it Works", href: "#work" },
    { tabText: "Team", href: "#team" },
    { tabText: "FAQs", href: "#faq" },
  ];

  const items: Item[] = [
    { id: 1, label: 'Accurate', maxWidth: '121px' },
    { id: 2, label: 'Scalable', maxWidth: '118px' },
    { id: 3, label: 'Secure Data', maxWidth: '147px' },
    { id: 4, label: 'Labeling Solutions', maxWidth: '193px' },
    { id: 5, label: 'Quality Work', maxWidth: '149px' }
  ];

  const [active, setActive] = useState(true);

  const handleNvaBar = () => {
    setActive(!active);
    let body = document.body;
    if (active) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }

  const removeNavBar = () => {
    let body = document.body;
    setActive(true);
    body.classList.remove("overflow-hidden");
  }

  return (
    <div className={`${!active ? "min-h-screen" : ""}`}>
      <nav className='border-b-[0.1px] border-grey py-4'>
        <div className='container flex items-center justify-between w-full'>
          <div className=' w-[54px] h-[56px]'>
            <a href="#">
              <Image width={100} height={100} src={header_logo} alt='header logo image' />
            </a>
          </div>
          <div className='flex lg:hidden flex-col items-center justify-between w-[30px] h-[22px] z-10 cursor-pointer' onClick={handleNvaBar}>
            <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "rotate-45 relative top-[8px] -right-px" : "rotate-0"}`}></span>
            <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "hidden" : "block"}`}></span>
            <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "-rotate-45 relative bottom-[11px] -right-px" : "rotate-0"}`}></span>
          </div>
          <div className={`flex ease-in-out duration-300 ${active ? "max-lg:left-[-100%]" : "max-lg:start-0"} max-lg:bg-white max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 items-center justify-center xl:gap-5 gap-4`}>
            {navLink.map((obj, index) => (
              <a
                key={index}
                href={obj.href}
                className='relative font-normal font-poppins text-base text-grey hover:text-blue ease-in-out duration-300 after:content-[""] after:absolute after:left-0 after:-bottom-2.5 max-lg:after:-bottom-1.5 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue after:transition-all after:duration-300'
                onClick={removeNavBar}
              >
                {obj.tabText}
              </a>
            ))}
            <div className={`flex items-center justify-center gap-3 ps-6 ${!active ? "max-lg:flex-col" : "flex-row"}`}>
              <CommonButton buttonClass='!bg-white !shadow-none !border-black !border !text-black hover:!bg-blue hover:!text-white hover:!border-transparent' buttonName='Sign Up' />
              <CommonButton buttonName='Contact Us' />
            </div>
          </div>
        </div>
      </nav>
      <div className='py-16 bg-header_bg headerSection bg-full bg-center bg-no-repeat max-w-[1536px] mx-auto'>
        <div className='container'>
          <div className='max-w-[824px] mx-auto'>
            <div className='flex items-center justify-center gap-4 pb-6'>
              <div className='w-[43px]'>
                <Image width={100} height={100} src={header_line_1} alt='line with a circle' />
              </div>
              <p className='font-poppins font-normal text-base text-blue'>AI Solutions</p>
              <div className='w-[43px]'>
                {/* image here */}
                <Image width={100} height={100} src={header_line_2} alt='line with a circle' />
              </div>
            </div>
            <div className='overflow-auto'>
              <div className='flex items-center md:justify-center justify-between md:gap-6 gap-3 max-lg:flex-wrap w-[824px]'>
                {items.map(item => (
                  <div key={item.id} className='rounded-[144px] border border-[#0A02EC] min-h-[44px] w-full bg-light_blue font-poppins font-normal text-base flex items-center justify-center' style={{ maxWidth: item.maxWidth }}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <p className='text-center xl:text-3xxl md:text-6xl sm:text-5xl text-3xl font_gilroy_bold md:leading-xl sm:leading-lg lg:pt-11 pt-8 pb-5'>Transform Your <span className='text-blue font_gilroy_medium'>Data into AI</span> Insights</p>
            <div className='flex items-center justify-center lg:pb-10 pb-6'>
              <p className='text-center max-w-[634px] font-poppins font-normal text-base text-grey'>Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.</p>
            </div>
            <div className={`flex items-center justify-center gap-[14px] ${!active ? "max-lg:flex-col" : "flex-row"}`}>
              {/* common btn here */}
              <div className="flex items-center justify-center gap-3 xl:ps-11 lg:ps-6">
                <CommonButton buttonName='Get Started' />
                <CommonButton buttonClass='!bg-white !border-black !border !text-black hover:!bg-blue hover:!text-white hover:!border-transparent !shadow-none' buttonName='Try For Free' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
