import React from "react";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (category: "applications" | "websites" | "illustrations") => {
  const data = items[category];
  if (!data) {
    return notFound();
  }
  return data;
};

const PortfolioCategory = ({
  params,
}: {
  params: { category: "applications" | "websites" | "illustrations" };
}) => {
  const data = getData(params.category);
  return (
    <>
      <h1 className="text-2xl text-green-600 font-bold">{params.category}</h1>
      {data.map((item) => {
        if (item.id % 2 == 1) {
          return (
            <div
              key={item.id}
              className="flex mb-12 gap-8 h-full flex-col md:flex-row"
            >
              <div className="flex mt-24 mb-24 flex-col basis-1/2">
                <h1 className="text-4xl mb-4 font-bold">{item.title}</h1>
                <p className="text-lg mb-4">{item.desc}</p>
                <button className="cursor-pointer text-white bg-green-600 px-3 py-2 rounded self-start">
                  See More
                </button>
              </div>
              <div className="flex relative basis-1/2">
                <Image
                  src={item.image}
                  alt={""}
                  className="rounded-2xl object-cover"
                  fill={true}
                ></Image>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={item.id}
              className="flex mb-12 gap-8 h-full flex-col md:flex-row"
            >
              <div className="flex relative basis-1/2">
                <Image
                  src={item.image}
                  alt={""}
                  className="rounded-2xl object-cover"
                  fill={true}
                ></Image>
              </div>
              <div className="flex mt-24 mb-24 flex-col basis-1/2">
                <h1 className="text-4xl mb-4 font-bold">{item.title}</h1>
                <p className="text-lg mb-4">{item.desc}</p>
                <button className="cursor-pointer text-white bg-green-600 px-3 py-2 rounded self-start">
                  See More
                </button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default PortfolioCategory;
