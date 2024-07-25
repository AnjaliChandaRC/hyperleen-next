"use client";
import { useState } from 'react';
import CommonButton from './CommonButton';
import Link from 'next/link';
import { navLink } from './Helper';
import { Header_logo } from './Icons';
interface NavLink {
  tabText: string;
  href: string;
}
const Header = () => {
  const [active, setActive] = useState(true);
  // for navbar toggling
  const HANDLE_NAVBAR = () => {
    setActive(!active);
    let body = document.body;
    if (active) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }
  //removing the nav menu when clicked on nav link 
  const REMOVE_NAVBAR = () => {
    let body = document.body;
    setActive(true);
    body.classList.remove("overflow-hidden");
  }
  return (
    <nav className='border-b-[0.1px] border-grey py-4'>
      <div className='max-w-[1140px] mx-auto container flex items-center justify-between w-full'>
        <div className='w-[54px] h-[56px]'>
          <Link href={'/'}>
            <Header_logo />
          </Link>
        </div>
        <div className='flex lg:hidden flex-col items-center justify-between w-[30px] h-[22px] z-30 cursor-pointer' onClick={HANDLE_NAVBAR}>
          <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "rotate-45 relative top-[8px] -right-px" : "rotate-0"}`}></span>
          <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "hidden" : "block"}`}></span>
          <span className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${!active ? "-rotate-45 relative bottom-[11px] -right-px" : "rotate-0"}`}></span>
        </div>
        <div className={`flex ease-in-out duration-300 ${active ? "max-lg:left-[-100%]" : "max-lg:start-0"} max-lg:bg-white max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 items-center justify-center xl:gap-5 gap-4 z-20`}>
          {navLink.map((obj: NavLink, index: number) => (
            <Link
              key={index}
              href={obj.href}
              className='relative p-2.5 text-grey hover:text-blue ease-in-out duration-300 after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 max-lg:after:-bottom-1.5 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue after:transition-all after:duration-300'
              onClick={REMOVE_NAVBAR}
            >
              {obj.tabText}
            </Link>
          ))}
          <div className={`flex items-center justify-center gap-3 lg:ps-[14px] ps-0 ${!active ? "max-lg:flex-col" : "flex-row"}`}>
            <CommonButton buttonClass='!bg-white !shadow-none !border-black !border !text-black hover:!bg-blue hover:!text-white hover:!border-transparent' buttonName='Sign Up' />
            <CommonButton buttonName='Contact Us' />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;