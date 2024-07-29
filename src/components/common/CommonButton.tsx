import React from 'react';
import Link from 'next/link';

interface BUTTON {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

const CommonButton = ({ text, className, onClick, href }: BUTTON) => {
  const buttonClasses = `font-normal text-lg leading-7 rounded-full shadow-3xl text-white hover:text-black px-6 py-[14px] h-[55px] bg-blue hover:bg-white border border-white hover:border-black duration-300 ease-linear ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <p className={buttonClasses}>{text}</p>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default CommonButton;
