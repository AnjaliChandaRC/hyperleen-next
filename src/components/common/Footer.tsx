"use client"
import Image from 'next/image';
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from './Icons';
import Link from 'next/link';
import { footerData } from './Helper';
import Paragraph from './Paragraph';
interface FooterLinks {
  label: string;
  href: string;
}
interface FooterColumns {
  title: string;
  links: FooterLinks[];
  className: string;
}
const Footer = () => {
  const date = new Date();
  return (
    <div className='bg-footer_section sm:bg-full max-sm:bg-cover bg-no-repeat bg-center'>
      <div className='max-w-[1180px] container mx-auto lg:pt-[160px] pt-[174px] w-full'>
        <div className='flex flex-row flex-wrap -mx-3  justify-between'>
          <div className='lg:w-4/12 xl:px-2 px-5'>
            <Link href="/">
              <Image
                width={117}
                height={30}
                src='/assets/images/home/svg/footer-logo.svg'
                alt='footer logo'
                className=' lg:w-[117px]  sm:w-20  w-16'
              />
            </Link>
            <Paragraph textName='Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.' className='lg:max-w-[279px] text-white opacity-70 md:pt-5 sm:pt-4 pt-3' />
            <div className='gap-3 lg:mt-5  sm:mt-4 mt-3 max-xl:flex hidden'>
              <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href="https://www.facebook.com/login/" target='_blank'>
                  <FacebookLogo />
                </Link>
              </div>
              <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href="https://twitter.com/login" target='_blank'> <TwitterLogo /></Link>
              </div>
              <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href="https://www.linkedin.com/login" target='_blank'> <LinkedinLogo /></Link>
              </div>
              <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'> <InstagramLogo /></Link>
              </div>
            </div>
          </div>
          <div className='xl:w-8/12 lg:w-8/12 px-3 w-full '>
            <div className='flex flex-row flex-wrap -mx-3 xl:justify-end lg:justify-evenly justify-between max-lg:pt-5 w-full'>
              {footerData.map((val: FooterColumns, index: number) => (
                <div key={index} className={`${val.className} w-1/2 px-5 lg:px-3 lg:pt-5 sm:pt-4 pt-3`}>
                  <ul>
                    <li className={`${index === 2 ? "mt-5 md:mt-0" : ""}`}>
                      <h2 className='text-lg text-white'>{val.title}</h2>
                    </li>
                    {val.links.map((link: FooterLinks, index: number) => (
                      <li key={index} className='lg:pt-5 pt-3 text-nowrap'>
                        <Link href={link.href} className='text-white opacity-70 hover:opacity-100 ease-in-out duration-300' >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className='md:w-4/12 w-full pt-5 px-5 max-xl:hidden'>
                <h2 className='text-lg text-white'>Follow us on</h2>
                <div className='gap-3 mt-5 flex'>
                  <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                    <Link href="https://www.facebook.com/login/" target='_blank'>
                      <FacebookLogo />
                    </Link>
                  </div>
                  <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl' >
                    <Link href="https://twitter.com/login" target='_blank'> <TwitterLogo /></Link>
                  </div>
                  <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                    <Link href="https://www.linkedin.com/login" target='_blank'> <LinkedinLogo /></Link>
                  </div>
                  <div className='size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                    <Link href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'> <InstagramLogo /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] [background:linear-gradient(180deg,#ffffff33_0%,#ffffff1a_100%)] lg:mt-14 md:mt-10 mt-7'></div>
      <p className='opacity-70 text-center text-white py-4 lg:pb-11 px-3'>© {date.getFullYear()} Hyperleen, All Rights reserved.</p>
    </div>
  );
};

export default Footer;
