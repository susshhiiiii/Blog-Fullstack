"use client";
import React from "react";
import Image from "next/image";
import Illustrations from "../../../public/illustration.png";
import Applications from "../../../public/apps.jpg";
import Websites from "../../../public/websites.jpg";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="text-2xl font-bold mb-32">Choose a gallery</h1>
      <div className="flex grow gap-5 flex-col md:flex-row">
        <div className="cursor-pointer flex relative border-2 border-gray-300 basis-1/5 ">
          <Image
            onClick={() => router.push(`portfolio/illustrations`)}
            className="object-cover object-right"
            src={Illustrations}
            alt={""}
          ></Image>
          <h1 className="absolute font-bold text-3xl bottom-0 right-0 m-1 me-2">
            Illustrations
          </h1>
        </div>
        <div className="cursor-pointer flex relative border-2 border-gray-300 basis-1/5 ">
          <Image
            onClick={() => router.push(`portfolio/websites`)}
            className="object-cover object-left"
            src={Websites}
            alt={""}
          ></Image>
          <h1 className="absolute font-bold text-3xl bottom-0 right-0 m-1 me-2">
            Websites
          </h1>
        </div>
        <div className="cursor-pointer flex relative border-2 border-gray-300 basis-1/5 ">
          <Image
            onClick={() => router.push(`portfolio/applications`)}
            className="object-cover object-left"
            src={Applications}
            alt={""}
          ></Image>
          <h1 className="absolute font-bold text-3xl bottom-0 right-0 m-1 me-2">
            Applications
          </h1>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
