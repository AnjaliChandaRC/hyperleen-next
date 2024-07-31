"use client";
import Link from "next/link";

interface BUTTON {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement | HTMLButtonElement>;
  href?: string;
  mobileAction?: () => void;
}

const CommonButton = ({
  text,
  className,
  onClick,
  href,
  mobileAction,
}: BUTTON) => {
  const buttonClasses = `font-normal text-lg leading-7 rounded-full shadow-3xl text-white hover:text-black px-6 py-2 sm:py-[14px] h-[50px] sm:h-[55px] bg-blue hover:bg-white border border-transparent hover:border-black duration-300 ease-linear ${className}`;

  const HANDLE_CLICK = (
    event: React.MouseEvent<HTMLParagraphElement | HTMLButtonElement>
  ) => {
    if (window.innerWidth <= 1024 && mobileAction) {
      mobileAction();
    } else if (onClick) {
      onClick(event);
    }
  };

  if (href) {
    return (
      <Link href={href}>
        <p className={buttonClasses} onClick={HANDLE_CLICK}>
          {text}
        </p>
      </Link>
    );
  }
  return (
    <button onClick={HANDLE_CLICK} className={buttonClasses}>
      {text}
    </button>
  );
};

export default CommonButton;
