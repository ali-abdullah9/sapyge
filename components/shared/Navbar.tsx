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
      <NavigationMenuTrigger className="px-4 dark:bg-dark-1  dark:hover:text-color-1 font-code">Tools</NavigationMenuTrigger>
      <NavigationMenuContent >
        <NavigationMenuLink className="flex flex-col whitespace-nowrap" >
          <Link
                    href="/tools/soaiw"
                    className="px-8 py-4 mt-2 text-sm font-semibold hover:bg-dark-2 dark:hover:text-color-1">
                    Soaiw
                  </Link>
                  <Link
                    href="/tools/scripter"
                    className="px-8 py-4 mt-2 text-sm font-semibold hover:bg-dark-2 dark:hover:text-color-1">
                   Scripter
                  </Link>
                  <Link
                    href="/tools/syntax-scan"
                    className="px-8 py-4 mt-2 text-sm font-semibold hover:bg-dark-2 dark:hover:text-color-1">
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
      <NavigationMenuTrigger className="px-4 dark:bg-dark-1  dark:hover:text-color-1 font-code">
        Conferencing
        </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink className="flex flex-col whitespace-nowrap">
          <Link
                    href="/conferencing/structured"
                    className="px-8 py-4 mt-2 text-sm font-semibold hover:bg-dark-2 dark:hover:text-color-1">
                    Structured
                  </Link>
                  <Link
                    href="/conferencing/spontaneous"
                    className="px-8 py-4 mt-2 text-sm font-semibold hover:bg-dark-2 dark:hover:text-color-1">
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
              <NavigationMenuLink className="px-4 dark:bg-dark-1  dark:hover:text-color-1 font-code">
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu><NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem >
      <NavigationMenuTrigger className="px-4 dark:bg-dark-1  dark:hover:text-color-1 font-code">
       Souk</NavigationMenuTrigger>
      <NavigationMenuContent >
        <NavigationMenuLink className="flex flex-col whitespace-nowrap ">
          <Link
                    href="/souk/find-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold hover:bg-dark-2 dark:hover:text-color-1">
                    Find your Gig
                  </Link>
                  <Link
                    href="/souk/post-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold hover:bg-dark-2 dark:hover:text-color-1">
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
