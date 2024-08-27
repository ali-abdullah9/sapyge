import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "@/components/shared/Navbar";

function Topbar() {
  return (
    <nav>
      <div className="flex flex-row top-0 left-0 w-full h-16 z-50 border-b border-n-6 lg:h-16 lg:backdrop-blur-sm">
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center gap-2 py-2">
            <Image src="/logo.svg" alt="sapyge-logo" width={50} height={50} />
            <p className="text-heading3-bold text-light-1 max-xs:hidden">
              Sapyge.
            </p>
          </Link>
        </div>

        <div className="hidden md-1068:flex flex-1 items-center space-x-4 py-4">
          <Navbar/>
        </div>

        <div className="flex-1 text-right flex items-center justify-end">
          <div className="flex flex-row gap-4 py-4 px-8">
            <OrganizationSwitcher
              appearance={{
                baseTheme: dark,
                elements: {
                  organizationSwitcherTrigger: "py-2 px-4",
                },
              }}
            />
            <Sheet>
              <SheetTrigger>
                <Image
                  src="/hamburger-menu.svg"
                  alt="Hamburger-Menu"
                  width={36}
                  height={36}
                  className="cursor-pointer  md-1068:hidden"
                />
              </SheetTrigger>
              <SheetContent className="bg-dark-1 p-4 border-color-1">
                <SheetHeader>
                  <SheetTitle className="text-3xl font-bold text-light-1 mb-8 hover:text-color-1 cursor-not-allowed	">
                    Menu
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col space-y-4 ">
                      {/* Tools HoverCard */}
                      <HoverCard>
                        <HoverCardTrigger>
                          <Link
                            href="/tools/soaiw"
                            className="font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-4 lg:text-xs lg:font-semibold lg:leading-5"
                          >
                            Tools
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-dark-1 text-light-2 border-color-1 absolute z-10 p-4 w-48 -ml-44">
                          <div className="flex flex-col space-y-2">
                            <Link
                              href="/tools/soaiw"
                              className="font-code text-lg text-n-1 transition-colors hover:text-color-1"
                            >
                              Soaiw
                            </Link>
                            <Link
                              href="/tools/syntax-scan"
                              className="font-code text-lg text-n-1 transition-colors hover:text-color-1"
                            >
                              Syntax Scan
                            </Link>
                            <Link
                              href="/tools/scripter"
                              className="font-code text-lg text-n-1 transition-colors hover:text-color-1"
                            >
                              Scripter
                            </Link>
                          </div>
                        </HoverCardContent>
                      </HoverCard>

                      {/* Conferencing HoverCard */}
                      <HoverCard>
                        <HoverCardTrigger>
                          <Link
                            href="/conferencing/structured"
                            className="font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-4 lg:text-xs lg:font-semibold lg:leading-5"
                          >
                            Conferencing
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-dark-1 text-light-2 border-color-1 absolute z-10 p-4 w-48 -ml-44">
                          <div className="flex flex-col space-y-2">
                            <Link
                              href="/conferencing/structured"
                              className="font-code text-lg text-n-1 transition-colors hover:text-color-1"
                            >
                              Structured
                            </Link>
                            <Link
                              href="/conferencing/spontaneous"
                              className="font-code text-lg text-n-1 transition-colors hover:text-color-1"
                            >
                              Spontaneous
                            </Link>
                          </div>
                        </HoverCardContent>
                      </HoverCard>

                      {/* Community Link */}
                      <Link
                        href="/community"
                        className="font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-4 lg:text-xs lg:font-semibold lg:leading-5"
                      >
                        Community
                      </Link>

                      {/* Souk HoverCard */}
                      <HoverCard>
                        <HoverCardTrigger>
                          <Link
                            href="/souk/find-your-gig"
                            className="font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-4 lg:text-xs lg:font-semibold lg:leading-5"
                          >
                            Souk
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-dark-1 text-light-2 border-color-1 absolute z-10 p-4 w-48  -ml-44">
                          <div className="flex flex-col space-y-2">
                            <Link
                              href="/souk/find-your-gig"
                              className="font-code text-lg text-n-1 transition-colors hover:text-color-1"
                            >
                              Find Your Gig
                            </Link>
                            <Link
                              href="/souk/post-your-gig"
                              className="font-code text-lg text-n-1 transition-colors hover:text-color-1"
                            >
                              Post Your Gig
                            </Link>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Topbar;
