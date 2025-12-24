import React from "react";
import Link from "next/link";
import Navlink from "./navlink";
import DarkModeToggle from "../darkMode";

const Navbar = () => {
  const navList = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dasboard",
      url: "/dashboard",
    },
  ];
  return (
    <div className="flex py-6 justify-between">
      <div className="font-bold">
        <Link href={"/"}>lamamia</Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <DarkModeToggle/>
        {navList.map((data) => (
          <Navlink key={data.id} href={data.url}>
            {data.title}
          </Navlink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
