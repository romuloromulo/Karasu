"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LogoNav from "../../../public/images/logo-navbar.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [path, setPath] = useState("/");

  return (
    <div className="hidden sm:block">
      <nav
        className="backdrop-blur-lg 
  fixed 
  z-50  
  top-0
  w-full
  flex
  items-center
  justify-between
  py-2
  px-4
  border-b border-gray-700
  ">
        <div>
          <Link href="/">
            <Image src={LogoNav} alt="Karasu Logo" width={100} height={100} />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink
                  onClick={() => setPath("")}
                  className={cn(navigationMenuTriggerStyle(), {
                    "text-white/60": path === "",
                    "text-white": path !== "",
                    "font-normal": true,
                    "text-lg": true,
                  })}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#biografia">
                <NavigationMenuLink
                  onClick={() => setPath("#biografia")}
                  className={cn(navigationMenuTriggerStyle(), {
                    "text-white/60": path === "#biografia",
                    "text-white": path !== "#biografia",
                    "font-normal": true,
                    "text-lg": true,
                  })}>
                  Sobre nós
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#aulas">
                <NavigationMenuLink
                  onClick={() => setPath("#aulas")}
                  className={cn(navigationMenuTriggerStyle(), {
                    "text-white/60": path === "#aulas",
                    "text-white": path !== "#aulas",
                    "font-normal": true,
                    "text-lg": true,
                  })}>
                  Aulas
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#relatos">
                <NavigationMenuLink
                  onClick={() => setPath("#relatos")}
                  className={cn(navigationMenuTriggerStyle(), {
                    "text-white/60": path === "#relatos",
                    "text-white": path !== "#relatos",
                    "font-normal": true,
                    "text-lg": true,
                  })}>
                  Relatos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={cn(navigationMenuTriggerStyle(), {
                "text-white": true,
                "text-lg": true,
              })}>
              <Link href="/loja">
                <NavigationMenuLink>Loja Oficial</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Link href="/" target="_blank">
            <Button>Contato</Button>
          </Link>
          <Link href="/" target="_blank">
            <div className="bg-primary border-2 border-primary hover:border-white rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300  hover:text-white ease-out">
              <FaInstagram size={22} />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
