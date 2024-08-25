import Link from "next/link";
import Image from "next/image";
import {
  OrganizationSwitcher,
  SignedIn,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="sapyge-logo" width={50} height={50} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Sapyge</p>
      </Link>

      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}
export default Topbar;
