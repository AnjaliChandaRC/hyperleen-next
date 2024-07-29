'use client';
import { FormEvent, useState } from 'react';
import Paragraph from './Paragraph';
import PrimaryHeading from './PrimaryHeading';
import Swal from 'sweetalert2';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const ON_SUBMIT = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mail Submitted",
        showConfirmButton: true,
        timer: 1500
      });
      setEmail('');
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Email field is empty",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="md:pt-[80px] xl:pt-[180px] max-md:py-16 md:pb-8" id='contact'>
      <div className="container max-w-[1180px] mx-auto">
        <div className="flex items-center justify-center flex-col">
          <PrimaryHeading
            textName="Get in touch with"
            blueText=" Hyperleen"
            className=" text-center"
          />
          <Paragraph
            textName="
            Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events, and more. We’d hate to be annoying, please unsubscribe anytime!"
            className="max-w-[731px] text-center pt-4"
          />
          <form
            className="flex items-center gap-[14px] mt-6 max-md:flex-wrap justify-center"
            onSubmit={ON_SUBMIT}
          >
            <input
              type="email"
              placeholder="Your e-mail"
              className="sm:w-[323px] w-full px-4 rounded-2xl bg-light_black min-h-[55px] placeholder:text-black text-grey outline-blue"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-lg leading-7 rounded-full shadow-3xl text-white hover:text-black bg-blue py-[13px] hover:bg-white hover:border-black duration-300 ease-linear px-6 border border-white"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
