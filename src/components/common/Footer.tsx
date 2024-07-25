"use client"
import { useState } from 'react';
import Image from 'next/image';
import CommonButton from './CommonButton';
import { FacebookLogo, InstagramLogo, LinkdinLogo, TwitterLogo } from './Icons';
import Link from 'next/link';

interface Link {
  label: string;
  href: string;
}

interface Section {
  title: string;
  links: Link[];
}

const footerData: Section[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'FAQ', href: '#faq' },
      { label: 'How It Works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Links',
    links: [
      { label: 'Team', href: '#team' },
      { label: 'Label', href: '#label' },
    ],
  },
  {
    title: 'Policy',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Privacy Policy', href: '#privacy-policy' },
      { label: 'Terms and conditions', href: '#terms-conditions' },
    ],
  },
];

const Footer = () => {

  return (
    <>
      <section className='pt-20'>
        <div className='container'>
          <div className='flex items-center justify-center flex-col'>
            <h1 className='font-manrope font-medium text-3xl text-center font_gilroy_medium'>
              Get in touch with <span className='text-blue'>Hyperleen</span>
            </h1>
            <p className='max-w-[731px] opacity-70 font-poppins font-normal text-base text-center pt-4'>
              Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events, and more. We’d hate to be annoying, please unsubscribe anytime!
            </p>
            <form className='flex items-center gap-[14px] mt-6 max-md:flex-wrap justify-center'>
              <input
                type="email"
                placeholder='Your e-mail'
                className='w-[323px] px-4  rounded-2xl bg-light_black min-h-[55px] placeholder:text-black font-poopins text-base font-normal text-grey outline-blue'
                required
              />
              <CommonButton buttonName='Submit Now' />
            </form>
          </div>
        </div>
      </section>
      <footer className='bg-footerSection sm:bg-full max-sm:bg-cover bg-no-repeat bg-center'>
        <div className='container pt-[160px] pb-[116px] w-full'>
          <div className='flex flex-row flex-wrap -mx-3  justify-between'>
            <div className='lg:w-3/12 px-3'>
              <Link href="#home">
                <Image
                  width={117}
                  height={30}
                  src='/assets/images/home/png/footer-logo.png'
                  alt='footer logo'
                />
              </Link>
              <p className='font-poopins font-normal text-base text-white pt-5 opacity-70 lg:max-w-[279px]'>
                Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.
              </p>
              <div className='gap-3 mt-5 max-lg:flex hidden'>
                <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                  <Link href={"https://www.facebook.com/login/"} target='_blank'>
                    <FacebookLogo />
                  </Link>
                </div>
                <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                  <Link href={"https://twitter.com/login"} target='_blank'> <TwitterLogo /></Link>
                </div>
                <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                  <Link href={"https://www.linkedin.com/login"} target='_blank'> <LinkdinLogo /></Link>
                </div>
                <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                  <Link href={"https://www.instagram.com/accounts/login/?hl=en"} target='_blank'> <InstagramLogo /></Link>
                </div>
              </div>
            </div>
            <div className='lg:w-7/12 w-full'>
              <div className='flex flex-row flex-wrap -mx-3 lg:justify-end max-lg:pt-5'>
                {footerData.map((section, index) => (
                  <div key={index} className='md:w-3/12 w-1/2 px-5 lg:px-3 pt-5'>
                    <ul>
                      <li>
                        <h2 className='font-poopins text-lg text-white font-normal'>{section.title}</h2>
                      </li>
                      {section.links.map((link, idx) => (
                        <li key={idx} className='lg:pt-5 pt-3 text-nowrap'>
                          <a href={link.href} className='text-white opacity-70 hover:opacity-100 ease-in-out duration-300' >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className='md:w-3/12 w-full max-lg:hidden'>
                  <h2 className='text-lg font-poopins text-white font-normal'>Follow us on</h2>
                  <div className='gap-3 mt-5 flex'>
                    <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                      <Link href={"https://www.facebook.com/login/"} target='_blank'>
                        <FacebookLogo />
                      </Link>
                    </div>
                    <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                      <Link href={"https://twitter.com/login"} target='_blank'> <TwitterLogo /></Link>
                    </div>
                    <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                      <Link href={"https://www.linkedin.com/login"} target='_blank'> <LinkdinLogo /></Link>
                    </div>
                    <div className=' w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer'>
                      <Link href={"https://www.instagram.com/accounts/login/?hl=en"} target='_blank'> <InstagramLogo /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-light_grey lg:mt-14 md:pt-10 pt-7'></div>
        <p className='font-poppins opacity-70 text-center text-base text-white pt-5 pb-11 px-3'>© 2024 Hyperleen, All Rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
