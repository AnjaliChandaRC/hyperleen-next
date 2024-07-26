// import React from "react";
// import PrimaryHeading from "../common/PrimaryHeading";
// import Paragraph from "../common/Paragraph";
// import CommonButton from "../common/CommonButton";
// import Image from "next/image";

// const ContactUs = () => {
//   return (
//     <div className="container xl:max-w-[1180px] mx-auto py-40">
//       <div className="flex flex-wrap lg:flex-row flex-col-reverse mx-[-12px]">
//         <div className="lg:w-[50%] w-full px-3 flex flex-col justify-center items-center lg:pt-0 pt-5">
//           <div className="flex flex-col justify-center">
//             <PrimaryHeading
//               textName="Contact"
//               blueText=" Us"
//               className="lg:pb-4 pb-2"
//             />
//             <Paragraph
//               className="max-w-[475px] opacity-70 lg:pb-6 pb-4"
//               textName="Personalized Finance Tutoring Tailored assistance to meet your unique learning needs.  Expert Tutors Highly qualified tutors with extensive knowledge in finance and related subjects."
//             />
//             <form action="">
//               <div className="lg:pb-4 pb-2">
//                 <label htmlFor="fullName" className="text-lg text-black">
//                   Full Name*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg-mt-3 mt-0"
//                 />
//               </div>
//               <div className="lg:pb-4 pb-2">
//                 <label htmlFor="email" className="text-lg text-black">
//                   Active Email*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-3 mt-0"
//                 />
//               </div>
//               <div className="lg:pb-4 pb-2">
//                 <label htmlFor="phone" className="text-lg text-black">
//                   Phone Number*
//                 </label>
//                 <br />
//                 <input
//                   type="number"
//                   id="phone"
//                   name="phone"
//                   className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-3 mt-0"
//                 />
//               </div>
//               <div className="lg:pb-10 md:pb-8 pb-6">
//                 <label htmlFor="email" className="text-lg text-black">
//                   Subject*
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   className="border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-3 mt-0"
//                 />
//               </div>
//             </form>
//             <CommonButton text="Submit Now" className="max-w-[475px] w-full" />
//           </div>
//         </div>
//         <div className="lg:w-[50%] w-full lg:px-3 pb-2 flex flex-col items-center">
//           <div className="bg-light_blue5 rounded-2xl p-5 lg:max-w-[595px] sm:max-w-[482px] max-w-[400px]">
//             <p className="font_gilroy_bold lg:text-2xl sm:text-xl text-lg lg:pb-8 pb-3 text-center">
//               Choose a time that works for you.
//             </p>
//             <Image
//               width={555}
//               height={483}
//               src="/assets/images/ai-trainer/svg/calendar.svg"
//               alt="label_input_car"
//               className="pointer-events-none"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client"; // Add this directive for client-side hooks

import React, { useState } from "react";
import Image from "next/image";

// Define interfaces directly in the component file
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
}

const ContactUs: React.FC = () => {
  // Initialize state with FormData and FormErrors types
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as keyof FormData]: value,
    });
  };

  // Validate form data
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container xl:max-w-[1180px] mx-auto py-40">
      <div className="flex flex-wrap lg:flex-row flex-col-reverse mx-[-12px]">
        <div className="lg:w-[50%] w-full px-3 flex flex-col justify-center items-center lg:pt-0 pt-5">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">
              Contact <span className="text-blue-500">Us</span>
            </h1>
            <p className="max-w-[475px] opacity-70 mb-4">
              Personalized Finance Tutoring Tailored assistance to meet your
              unique learning needs. Expert Tutors Highly qualified tutors with
              extensive knowledge in finance and related subjects.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-lg text-black">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 mt-2 ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-black">
                  Active Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 mt-2 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-lg text-black">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 mt-2 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-lg text-black">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 mt-2 ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-2xl py-3 px-6 hover:bg-blue-600 transition duration-300"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-[50%] w-full lg:px-3 pb-2 flex flex-col items-center">
          <div className="bg-light_blue5 rounded-2xl p-5 lg:max-w-[595px] sm:max-w-[482px] max-w-[400px]">
            <p className="font-bold lg:text-2xl sm:text-xl text-lg lg:pb-8 pb-3 text-center">
              Choose a time that works for you.
            </p>
            <Image
              width={555}
              height={483}
              src="/assets/images/ai-trainer/svg/calendar.svg"
              alt="Calendar"
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

