import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  UserButton,
  SignUpButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Navbar from "./Navbar";
import Hamburgerbar from "./Hamburgerbar";


const Header = () => {
  return (
    <nav>
      <SignedIn>
        <div className="flex flex-row border-b border-n-6 lg:h-16 lg:backdrop-blur-sm">
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center gap-2 py-2">
              <Image src="/logo.svg" alt="sapyge-logo" width={50} height={50} />
              <p className="text-heading3-bold text-light-1 max-xs:hidden">
                Sapyge.
              </p>
            </Link>
          </div>
          <div className="hidden md-980:flex flex-1 items-center space-x-4 py-4">
            <Navbar />
          </div>

          <div className="flex-1 text-right flex items-center justify-end">
            <div className="flex flex-row gap-4 py-4 px-8">
              <UserButton />
              <h1 className="hidden md-980:block pt-2 hover:text-color-1 cursor-pointer">
                Profile
              </h1>
              <Sheet>
                <SheetTrigger>
                  <Image
                    src="/hamburger-menu.svg"
                    alt="Hamburger-Menu"
                    width={36}
                    height={36}
                    className="cursor-pointer  md-980:hidden"
                  />
                </SheetTrigger>
                <SheetContent className="bg-dark-1 p-4 border-color-1">
                  <SheetHeader>
                    <SheetTitle className="text-3xl font-bold text-light-1 mb-8 hover:text-color-1 cursor-not-allowed	">
                      Menu
                    </SheetTitle>
                    <SheetDescription>
                      <div className="space-y-4 ">
                        {/* <Hamburgerbar /> */}
                        <Navbar />
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-row top-0 left-0 w-full h-16 z-50  border-n-6 lg:h-16 lg:backdrop-blur-sm">
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center gap-2 py-2">
              <Image src="/logo.svg" alt="sapyge-logo" width={50} height={50} />
              <p className="text-heading3-bold text-light-1 max-xs:hidden">
                Sapyge.
              </p>
            </Link>
          </div>

          <div className="hidden md-980:flex flex-1 items-center space-x-4 py-4">
            <Navbar/>

          </div>
          <div className="flex flex-row gap-4 justify-end py-4 px-8">
            <SignUpButton>
              <button className="focus:outline-none px-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton>
              <button className="focus:outline-none px-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Sign In
              </button>
            </SignInButton>
            <Sheet>
              <SheetTrigger>
                <Image
                  src="/hamburger-menu.svg"
                  alt="Hamburger-Menu"
                  width={36}
                  height={36}
                  className="cursor-pointer  md-980:hidden"
                />
              </SheetTrigger>
              <SheetContent className="bg-dark-1 p-4 border-color-1">
                <SheetHeader>
                  <SheetTitle className="text-3xl font-bold text-light-1 mb-8 hover:text-color-1 cursor-not-allowed	">
                    Menu
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col space-y-4 ">
                    <Hamburgerbar />
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </SignedOut>
    </nav>
  );
};

export default Header;
