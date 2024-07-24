"use client";
import header_logo from '../../../public/assets/images/home/png/header_logo.png'
import Image from 'next/image';
import { useState } from 'react';
import CommonButton from './CommonButton'

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
      <nav className='border-b border-dark-green'>
        <div className='container max-sm:px-5 flex items-center justify-between w-full pt-5'>
          <div className='md:w-[54px] w-[56px] md:h-[40px] h-[40px]'>
            <a href="#">
              <Image width={50} height={50} src={header_logo} alt='header logo image' />
            </a>
          </div>
          <div className='flex lg:hidden flex-col items-center justify-between w-[30px] h-[20px] z-10' onClick={handleNvaBar}>
            <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "rotate-45 relative top-[8px]" : "rotate-0"}`}></span>
            <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "hidden" : "block"}`}></span>
            <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "-rotate-45 relative bottom-[10px]" : "rotate-0"}`}></span>
          </div>
          <div className={`flex ease-in-out duration-300 ${active ? "max-lg:left-[-100%]" : "max-lg:start-0"} max-lg:bg-white max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 items-center justify-center xl:gap-[30px] gap-[20px]`}>
            {navLink.map((obj, index) => (
              <a key={index} href={obj.href} className='font-normal font-poppins text-base text-grey hover:text-blue ease-in-out duration-300' onClick={removeNavBar}>
                {obj.tabText}
              </a>
            ))}
            <div className={`flex items-center justify-center gap-[14px] ${!active ? "max-lg:flex-col" : "flex-row"}`}>
              {/* common button here */}
            </div>
          </div>
        </div>
      </nav>
      <div className='py-16'>
        <div className='container'>
          <div className='max-w-[824px] mx-auto'>
            <div className='flex items-center justify-center gap-4 pb-6'>
              <div className='w-[43px]'>
                {/* image here */}
              </div>
              <p>AI Solutions</p>
              <div className='w-[43px]'>
                {/* image here */}
              </div>
            </div>
            <div className='overflow-auto'>
              <div className='flex items-center justify-center gap-[24px] max-lg:flex-wrap w-[824px]'>
                {items.map(item => (
                  <div key={item.id} className='rounded-[144px] border border-[#0A02EC] min-h-[44px] w-full' style={{ maxWidth: item.maxWidth }}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <p className='text-center text-[80px] font-poppins leading-[80px] pt-11 pb-5'>Transform Your Data into AI Insights</p>
            <div className='flex items-center justify-center pb-10'>
              <p className='text-center max-w-[634px] font-poppins font-normal text-base'>Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.</p>
            </div>
            <div className={`flex items-center justify-center gap-[14px] ${!active ? "max-lg:flex-col" : "flex-row"}`}>
              {/* common btn here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
