"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./assets/logo.svg";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const menu = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];

  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14 ">
      <Link href="/">
        <Image src={Logo} priority alt="Glitch logo" width={150} />
      </Link>
      <ul className="flex space-x-6">
        {menu.map((route) => {
          return (
            <li
              key={route.href}
              className={classNames({
                "text-orange-500": route.href == currentPath,
                "text-zinc-400": route.href !== currentPath,
                "hover:text-orange-500 text-lg transition-colors duration-300":
                  true,
              })}
            >
              <Link href={route.href}>{route.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
