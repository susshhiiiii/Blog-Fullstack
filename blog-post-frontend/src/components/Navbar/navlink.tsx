"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const Navlink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname();

  const isActive =
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

  console.log(pathname,href)
  return (
    <Link className={`ms-2 ${isActive?"text-green-300":""}`} href={href}>
      {children}
    </Link>
  );
};

export default Navlink;
