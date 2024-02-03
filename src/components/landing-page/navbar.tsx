"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LogoNav from "../../../public/images/logo-navbar.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [path, setPath] = useState("/");
  const [open, setOpen] = useState(false);

  const links: { title: string; href: string; description?: string }[] = [
    {
      title: "Home",
      href: "",
    },
    {
      title: "Sobre nós",
      href: "#biografia",
    },
    { title: "Aulas", href: "#aulas" },
    { title: "Relatos", href: "#relatos" },
    { title: "Loja Oficial", href: "/loja" },
  ];

  return (
    <div className="block mb-16">
      <nav
        className={`
  fixed 
  z-50  
  top-0
  w-full
  sm:flex
  sm:items-center
  sm:justify-between
  px-4
  sm:border-b border-gray-700
  pb-8
  pt-2
  sm:pb-1
  sm:backdrop-blur-lg
  transition-all  duration-500 ease-in
${open ? "h-screen sm:h-auto backdrop-blur-lg" : "h-auto"}
  `}>
        <div className="mb-4 sm:mb-0 w-full flex justify-between items-center ">
          <Link href="/">
            <Image
              src={LogoNav}
              alt="Karasu Logo"
              width={110}
              height={100}
              className="w-full h-auto"
            />
          </Link>
          <div
            className="sm:hidden cursor-pointer text-black bg-primary p-1 rounded-lg"
            onClick={() => setOpen(!open)}>
            {open ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
          </div>
        </div>
        <div>
          <NavigationMenu className="flex-col sm:flex-row items-start sm:flex">
            <NavigationMenuList
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 absolute sm:static sm:z-auto z-[-1] left-0 w-full sm:w-auto transition-all  duration-500 ease-in ${
                open ? "left-1 " : "left-[-950px]"
              }`}>
              {links.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      onClick={() => setPath("")}
                      className={cn(navigationMenuTriggerStyle(), {
                        "text-white/60": path === link.href,
                        "text-white": path !== link.href,
                        "font-normal": true,
                        "lg:text-md": true,
                        "md:text-base": true,
                        "text-base": true,
                        "font-bold": true,
                        "sm:bg-transparent": true,
                        "bg-black/30": true,
                      })}>
                      {link.title.toLocaleUpperCase()}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <div className="flex flex-col-reverse items-start sm:flex-row md:items-center gap-4   w-[30rem] sm:w-52 md:w-64 mt-2 sm:mt-0">
                <Link href="/" target="_blank" className="w-[70%] sm:w-full">
                  <Button className="w-full text-lg  hover:text-white  border-2 border-primary hover:border-white hover:bg-transparent  duration-300   ">
                    Contato
                  </Button>
                </Link>
                <Link href="/" target="_blank">
                  <div className="bg-primary border-2 border-primary hover:border-white rounded-xl p-2 hover:bg-transparent hover:-translate-y-[15%] duration-300  hover:text-white ease-out sm:block flex items-center">
                    <span className="sm:hidden mr-1">Instagram </span>
                    {"  "}
                    <FaInstagram size={22} />
                  </div>
                </Link>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
