import React from "react";
import Image from "next/image";
import ContactImg from "../../../public/contact.png";

const Contact = () => {
  return (
    <div>
      <h1 className="text-5xl my-12 text-center font-bold ">
        Let's Keep in Touch
      </h1>
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="flex my-6 basis-1/2">
          <Image className="object-contain" src={ContactImg} alt={""}></Image>
        </div>
        <div className="flex flex-col basis-1/2">
          <input
            placeholder="Name"
            className="border-2 p-3 mb-8 border-gray-300"
            type="text"
          />
          <input
            placeholder="Email"
            className="border-2 p-3 mb-8 border-gray-300"
            type="text"
          />
          <textarea
            placeholder="Message"
            className="text-top border-2 p-3 mb-8 grow border-gray-300"
          />
          <button className="py-3 px-8 self-start bg-green-600  text-white rounded ">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
