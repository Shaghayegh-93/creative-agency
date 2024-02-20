import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="mt-10 ">
      <div className="flex gap-10 items-center  mb-10 md:mb-0">
        <div className="flex-1 hidden md:block relative h-96">
          <Image
            className="object-contain"
            src="/contact.png"
            fill
            alt="contactImage"
          />
        </div>
        <div className="flex-1">
          <form className="flex  flex-col gap-5">
            <input
              className="bg-bgSoft text-white p-4 border-none rounded-md"
              type="text"
              name="fullName"
              placeholder="Name and Surname"
            />
            <input
              className="bg-bgSoft text-white p-4 border-none rounded-md"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <input
              className="bg-bgSoft text-white p-4 border-none rounded-md"
              type="tel"
              name="phone"
              placeholder="Phone Number(Optional)"
            />
            <textarea
              className="bg-bgSoft text-white p-4 border-none rounded-md"
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            />
            <button
              className="border-none outline-none rounded-md bg-btn text-white p-2 font-bold"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
