import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import UserDropdownMenu from "@/components/UserDropdownMenu";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <header
      className={
        "flex p-4 items-center justify-between sticky top-0 bg-background z-10 border-b border-zinc-500 mb-3"
      }
    >
      {/*LEFT*/}
      <SidebarTrigger />
      {/*Right*/}
      <nav className={"flex items-center justify-between gap-4"}>
        <Link href={"/dashboard"}>Dashboard</Link>
        <ModeToggle />
        <UserDropdownMenu />
      </nav>
    </header>
  );
};

export default Navbar;
