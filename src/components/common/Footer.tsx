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
      <div className='max-w-[1140px] container mx-auto pt-[160px] w-full'>
        <div className='flex flex-row flex-wrap -mx-3  justify-between'>
          <div className='lg:w-3/12 px-3'>
            <Link href="/">
              <Image
                width={117}
                height={30}
                src='/assets/images/home/png/footer-logo.png'
                alt='footer logo'
              />
            </Link>
            <Paragraph textName='Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.' className='lg:max-w-[279px] text-white opacity-70 pt-5' />
            <div className='gap-3 mt-5 max-xl:flex hidden'>
              <div className=' size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href={"https://www.facebook.com/login/"} target='_blank'>
                  <FacebookLogo />
                </Link>
              </div>
              <div className=' size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href={"https://twitter.com/login"} target='_blank'> <TwitterLogo /></Link>
              </div>
              <div className=' size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href={"https://www.linkedin.com/login"} target='_blank'> <LinkedinLogo /></Link>
              </div>
              <div className=' size-8 rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                <Link href={"https://www.instagram.com/accounts/login/?hl=en"} target='_blank'> <InstagramLogo /></Link>
              </div>
            </div>
          </div>
          <div className='xl:w-7/12 lg:w-8/12 w-full '>
            <div className='flex flex-row flex-wrap -mx-3 lg:justify-end justify-between max-lg:pt-5 w-full'>
              {footerData.map((section: FooterColumns, index: number) => (
                <div key={index} className={`${section.className} w-1/2 px-5 lg:px-3 pt-5`}>
                  <ul>
                    <li>
                      <h2 className='text-lg text-white'>{section.title}</h2>
                    </li>
                    {section.links.map((link: FooterLinks, index: number) => (
                      <li key={index} className='lg:pt-5 pt-3 max-lg:text-nowrap'>
                        <a href={link.href} className='text-white opacity-70 hover:opacity-100 ease-in-out duration-300' >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className='md:w-3/12 w-full pt-5 px-5 max-xl:hidden'>
                <h2 className='text-lg text-white'>Follow us on</h2>
                <div className='gap-3 mt-5 flex'>
                  <div className='p-2 w-full rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                    <Link href={"https://www.facebook.com/login/"} target='_blank'>
                      <FacebookLogo />
                    </Link>
                  </div>
                  <div className='p-2 w-full rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl' >
                    <Link href={"https://twitter.com/login"} target='_blank'> <TwitterLogo /></Link>
                  </div>
                  <div className='p-2 w-full rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                    <Link href={"https://www.linkedin.com/login"} target='_blank'> <LinkedinLogo /></Link>
                  </div>
                  <div className='p-2 w-full rounded-full bg-white flex items-center justify-center border border-white ease-in-out duration-300 hover:border-blue cursor-pointer hover:shadow-3xl'>
                    <Link href={"https://www.instagram.com/accounts/login/?hl=en"} target='_blank'> <InstagramLogo /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-light_grey lg:mt-14 md:pt-10 pt-7'></div>
      <p className='opacity-70 text-center text-white pt-5 pb-11 px-3'>© {date.getFullYear()} Hyperleen, All Rights reserved.</p>
    </div>
  );
};

export default Footer;
