"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton, SignUpButton, SignInButton,SignedIn, SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "@/constants";
import MenuSvg from "@/public/svg/MenuSvg";
import { HamburgerMenu } from "@/components/designs/header";


const Header: React.FC = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={` top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-dark-1 lg:backdrop-blur-sm ${
        openNavigation ? "bg-dark-1" : "bg-dark-1 backdrop-blur-sm  flex flex-row"
      }`}
    >

      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="sapyge-logo" width={50} height={50} />
        <p className=" mr-44  text-heading3-bold text-light-1 max-xs:hidden">Sapyge</p>
      </Link>

      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          onClick={handleClick}
          className={` flex justify-center items-center  font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
            item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
          } lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
        >
          {item.title}
        </Link>
      ))}

      <HamburgerMenu />
      <SignedIn>
      <div className="ml-96 flex flex-row gap-4 justify-end">
        
        {/* <SignUpButton />
        <SignInButton /> */}

      <UserButton afterSignOutUrl="/" />
      <h1 className="flex items-center justify-center ">Profile</h1>
      <button
        className="ml-auto lg:hidden"
        onClick={toggleNavigation}
      >
        <MenuSvg openNavigation={openNavigation} />
      </button></div>
      </SignedIn>
      <SignedOut>
      <div className="ml-64 flex flex-row gap-4 justify-end">
        
        <SignUpButton ><button className="focus:outline-none mt-4 h-12 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign In</button>
        </SignUpButton >
        <SignInButton >
        <button  className="focus:outline-none  text-white mt-4 h-12 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Sign Up</button>
        </SignInButton >


      <button
        className="ml-auto lg:hidden"
        onClick={toggleNavigation}
      >
        <MenuSvg openNavigation={openNavigation} />
      </button></div>
      </SignedOut>
      
      
      
    </div>
  );
};

export default Header;
