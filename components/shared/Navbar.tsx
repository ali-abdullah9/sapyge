import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav>      
<div className="flex flex-row">

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-dark-1 px-4 text-light-1 focus:bg-dark-2 hover:text-color-1 hover:bg-dark-2 data-[active]:bg-dark-2 data-[state=open]:bg-dark-2 dark:bg-dark-1 dark:text-light-1 dark:focus:bg-dark-2 dark:hover:bg-dark-2 font-code">Tools</NavigationMenuTrigger>
      <NavigationMenuContent >
        <NavigationMenuLink className="flex flex-col bg-dark-2 whitespace-nowrap" >
          <Link
                    href="/tools/soaiw"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Soaiw
                  </Link>
                  <Link
                    href="/tools/scripter"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                   Scripter
                  </Link>
                  <Link
                    href="/tools/syntax-scan"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                   Syntax Scan
                  </Link>
                  
                  </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-dark-1 px-4 text-light-1 focus:bg-dark-2 hover:text-color-1 hover:bg-dark-2 data-[active]:bg-dark-2 data-[state=open]:bg-dark-2 dark:bg-dark-1 dark:text-light-1 dark:focus:bg-dark-2 dark:hover:bg-dark-2 font-code">
        Conferencing
        </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink className="flex flex-col bg-dark-2 whitespace-nowrap">
          <Link
                    href="/conferencing/structured"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Structured
                  </Link>
                  <Link
                    href="/conferencing/spontaneous"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Spontaneous
                  </Link>
                  
                  </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem>
            <Link href="/community" legacyBehavior passHref>
              <NavigationMenuLink className="bg-dark-1 text-light-1 px-4 py-3 rounded-lg focus:bg-dark-2 hover:text-color-1 hover:bg-dark-2 data-[active]:bg-dark-2 data-[state=open]:bg-dark-2 dark:bg-dark-1 dark:text-light-1 dark:focus:bg-dark-2 dark:hover:bg-dark-2 font-code">
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu><NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem >
      <NavigationMenuTrigger className="bg-dark-1 px-4  text-light-1 focus:bg-dark-2 hover:text-color-1 hover:bg-dark-2 data-[active]:bg-dark-2 data-[state=open]:bg-dark-2 dark:bg-dark-1 dark:text-light-1 dark:focus:bg-dark-2 dark:hover:bg-dark-2 font-code">
       Souk</NavigationMenuTrigger>
      <NavigationMenuContent >
        <NavigationMenuLink className="flex flex-col bg-dark-1 whitespace-nowrap ">
          <Link
                    href="/souk/find-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1  rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Find your Gig
                  </Link>
                  <Link
                    href="/souk/post-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Post your Gig
                  </Link>
                  
                  </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuViewport className="bg-color-1" />
</NavigationMenu>


</div>

    </nav>
  );
};
export default Navbar;
