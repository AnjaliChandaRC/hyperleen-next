"use client";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Swal from "sweetalert2";

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
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
  const HANDLE_CHANGE = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    setFormData({
      ...formData,
      [name as keyof FormData]: value,
    });
  };

  const Validate = (): boolean => {
    const newErrors: FormErrors = {};
    // Validate full name
    const nameRegex = /^[A-Za-zÀ-ÿ-'\s]{6,}$/;
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    else if (!nameRegex.test(formData.fullName))
      newErrors.fullName = "At least 6 characters required";
    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    // Validate phone number: exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone Number must be exactly 10 digits";
    }
    // Validate subject
    if (!formData.subject) newErrors.subject = "Subject is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Handle form submission
  const HANDLE_SUBMIT = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Validate()) {
      console.log("Form data submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
      });
      setErrors({});
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Form Submitted Successfully",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  return (
    <div className="2xl:max-w-[1536px] mx-auto">
      <div className="container xl:max-w-[1180px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-6 sm:gap-10 lg:gap-[69px] justify-center">
          <div className="flex flex-col items-center max-w-[330px] sm:max-w-none">
            <div className="flex flex-col justify-center max-w-[740px] mx-auto w-full">
              <PrimaryHeading
                textName="Contact"
                blueText=" Us"
                className="lg:pb-4 pb-2 text-center lg:text-start"
              />
              <div className="flex justify-center lg:justify-start">
                <Paragraph
                  className="opacity-70 lg:pb-6 pb-4 text-center lg:text-start max-w-[475px]"
                  textName="Personalized Finance Tutoring Tailored assistance to meet your unique learning needs. Expert Tutors Highly qualified tutors with extensive knowledge in finance and related subjects."
                />
              </div>
              <div className="flex justify-center lg:justify-start">
                <form
                  onSubmit={HANDLE_SUBMIT}
                  className="max-w-[475px] w-full"
                >
                  <div className="lg:pb-4 pb-2 mt-1 lg:mt-0">
                    <label htmlFor="fullName" className="text-lg text-black">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={HANDLE_CHANGE}
                      className={`border-[0.5px] border-grey rounded-lg lg:rounded-2xl sm:h-14 h-[50px] sm:p-3 p-2 w-full outline-none mt-2  ${
                        errors.fullName && "border-red-500"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="lg:pb-4 pb-2 mt-1 lg:mt-0">
                    <label htmlFor="email" className="text-lg text-black">
                      Active Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={HANDLE_CHANGE}
                      className={`border-[0.5px] border-grey rounded-lg lg:rounded-2xl sm:h-14 h-[50px] sm:p-3 p-2 w-full outline-none mt-2  ${
                        errors.email && "border-red-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>
                  <div className="lg:pb-4 pb-2 mt-1 lg:mt-0">
                    <label htmlFor="phone" className="text-lg text-black">
                      Phone Number*
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={HANDLE_CHANGE}
                      className={`border-[0.5px] border-grey rounded-lg lg:rounded-2xl sm:h-14 h-[50px] sm:p-3 p-2 w-full outline-none mt-2 ${
                        errors.phone && "border-red-500"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                    )}
                  </div>
                  <div className="lg:pb-10 md:pb-8 pb-6 mt-1 lg:mt-0">
                    <label htmlFor="subject" className="text-lg text-black">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={HANDLE_CHANGE}
                      className={`border-[0.5px] border-grey rounded-lg lg:rounded-2xl sm:h-14 h-[50px] sm:p-3 p-2 w-full outline-none mt-2  ${
                        errors.subject && "border-red-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <CommonButton text="Submit Now" className="w-full" />
                </form>
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="bg-alice_blue rounded-lg lg:rounded-2xl px-3 pb-3 pt-4 lg:p-5 max-w-[475px] md:max-w-none">
              <p className="font_gilroy_bold lg:text-2xl sm:text-xl text-lg lg:pb-8 pb-3 text-center">
                Choose a time that works for you.
              </p>
              <Image
                width={555}
                height={483}
                src="/assets/images/ai-trainer/svg/calendar.svg"
                alt="calendar.svg"
                className="pointer-events-none max-w-[313px] sm:max-w-[555px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
