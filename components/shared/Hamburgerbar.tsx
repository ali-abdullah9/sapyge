import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


const Hamburgerbar = () => {
  return (
    <nav className="flex flex-col gap-8">
      
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-dark-1 px-4 text-light-1 focus:bg-dark-2 hover:text-color-1 hover:bg-dark-2 data-[active]:bg-dark-2 data-[state=open]:bg-dark-2 dark:bg-dark-1 dark:text-light-1 dark:focus:bg-dark-2 dark:hover:bg-dark-2 font-code">Tools</NavigationMenuTrigger>
      <NavigationMenuContent >
        <NavigationMenuLink className="flex flex-col bg-dark-2 whitespace-nowrap ">
          <Link
                    href="/souk/find-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-color-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Find your Gig
                  </Link>
                  <Link
                    href="/souk/find-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-color-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Find your Gig
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
                    href="/souk/find-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-color-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Find your Gig
                  </Link>
                  <Link
                    href="/souk/find-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-color-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Find your Gig
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
                    href="/souk/find-your-gig"
                    className="px-8 py-4 mt-2 text-sm font-semibold text-light-1 bg-dark-1 rounded-lg dark:bg-dark-1 dark:hover:bg-dark-2 dark:focus:bg-dark-2 dark:focus:text-color-1 dark:hover:text-color-1 dark:text-color-1 md:mt-0 hover:text-color-1 focus:text-color-1 hover:bg-dark-2 focus:bg-dark-2 focus:outline-none focus:shadow-outline">
                    Find your Gig
                  </Link>
                  
                  </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

    </nav>
  )
}

export default Hamburgerbar
