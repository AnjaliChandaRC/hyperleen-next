import Image from 'next/image';
import footerLogo from '../../../public/assets/images/home/png/footer-logo.png'

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
      <section>
        <div className='container'>
          <div className='flex items-center justify-center flex-col'>
            <h1 className='font-manrope font-medium text-3xl text-center font_gilroy_medium'>
              Get in touch with <span className='text-blue'>Hyperleen</span>
            </h1>
            <p className='max-w-[731px] opacity-70 font-poppins font-normal text-base text-center pt-4'>
              Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events, and more. We’d hate to be annoying, please unsubscribe anytime!
            </p>
            <div className=' flex items-center gap-[14px] mt-6'>
              <input type="email" placeholder='Your e-mail' className=' w-[323px] pl-4 rounded-2xl bg-light_black min-h-[55px] placeholder:text-black font-poopins text-base font-normal text-grey outline-blue' />              
            </div>
          </div>
        </div>
      </section>
      <footer className=' bg-footerSection bg-full bg-no-repeat bg-center'>
        <div className='container pt-[160px] pb-[116px] w-full'>
          <div className='flex flex-row flex-wrap -mx-3  justify-between'>
            <div className='lg:w-3/12 px-3'>
              <a href=" #home">
                <Image
                  width={117}
                  height={30}
                  src={footerLogo}
                  alt='footer logo'
                />
              </a>
              <p className=' font-poopins font-normal text-base text-white pt-5 opacity-70 max-w-[279px]'>
                Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.
              </p>
            </div>
            <div className='lg:w-8/12'>
              <div className='flex flex-row flex-wrap -mx-3 justify-end'>
                {footerData.map((section, index) => (
                  <div key={index} className='md:w-3/12 px-3'>
                    <ul>
                      <li>
                        <h2 className='font-poopins text-lg text-white font-normal'>{section.title}</h2>
                      </li>
                      {section.links.map((link, idx) => (
                        <li key={idx} className=' pt-5'>
                          <a href={link.href} className='font-poopins text-base text-white opacity-70 pt-5'>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className='md:w-3/12 px-3'>
                  <h2 className='text-lg font-poopins text-white font-normal'>Follow us on</h2>
                  <div className='flex gap-3'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' w-full h-[1px] bg-light_grey mt-14'></div>
        <p className=' font-poppins opacity-70 text-center text-base text-white  pt-5 pb-11 px-3'>© 2024 Hyperleen, All Rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
