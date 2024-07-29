"use client";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";

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
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Handle input changes
  const Handle_Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Remove the error for the specific field being updated
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));

    setFormData({
      ...formData,
      [name as keyof FormData]: value,
    });
  };

  // Validate form data
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
  const Handle_Submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Validate()) {
      console.log("Form data submitted:", formData);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
      });
      setErrors({});
      // Show popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="xl:py-40 md:py-20 py-16">
      <div className="container xl:max-w-[1180px] mx-auto">
        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <p className="text-lg font-semibold mb-4">
                Form submitted successfully!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue text-white py-2 px-4 rounded-full border border-transparent hover:bg-transparent hover:text-blue hover:border-blue transition duration-300 ease-linear"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-wrap lg:flex-row flex-col-reverse mx-[-12px]">
          <div className="lg:w-[50%] w-full px-3 flex flex-col items-center lg:pt-0 pt-5">
            <div className="flex flex-col justify-center">
              <PrimaryHeading
                textName="Contact"
                blueText=" Us"
                className="lg:pb-4 pb-2"
              />
              <Paragraph
                className="max-w-[475px] opacity-70 lg:pb-6 pb-4"
                textName="Personalized Finance Tutoring Tailored assistance to meet your unique learning needs.  Expert Tutors Highly qualified tutors with extensive knowledge in finance and related subjects."
              />
              <form onSubmit={Handle_Submit}>
                <div className="lg:pb-4 pb-2">
                  <label htmlFor="fullName" className="text-lg text-black">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={Handle_Change}
                    className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-2 mt-0 ${errors.fullName ? "border-red-500" : ""
                      }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="lg:pb-4 pb-2">
                  <label htmlFor="email" className="text-lg text-black">
                    Active Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={Handle_Change}
                    className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-2 mt-0 ${errors.email ? "border-red-500" : ""
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="lg:pb-4 pb-2">
                  <label htmlFor="phone" className="text-lg text-black">
                    Phone Number*
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={Handle_Change}
                    className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 lg:mt-2 mt-0 ${errors.phone ? "border-red-500" : ""
                      }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div className="lg:pb-10 md:pb-8 pb-6">
                  <label htmlFor="subject" className="text-lg text-black">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={Handle_Change}
                    className={`border-[0.5px] border-grey rounded-2xl h-14 max-w-[475px] w-full outline-none p-3 mt-2 ${errors.subject ? "border-red-500" : ""
                      }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <CommonButton
                  text="Submit Now"
                  className="max-w-[475px] w-full"
                />
              </form>
            </div>
          </div>
          <div className="lg:w-[50%] w-full lg:px-3 pb-2 flex flex-col items-center">
            <div className="bg-light_blue5 rounded-2xl p-5 lg:max-w-[595px] sm:max-w-[482px] max-w-[360px]">
              <p className="font_gilroy_bold lg:text-2xl sm:text-xl text-lg lg:pb-8 pb-3 text-center">
                Choose a time that works for you.
              </p>
              <Image
                width={555}
                height={483}
                src="/assets/images/ai-trainer/svg/calendar.svg"
                alt="label_input_car"
                className="pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
