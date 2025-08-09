import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";
import UserDropdownMenu from "@/components/UserDropdownMenu";
import {SidebarTrigger} from "@/components/ui/sidebar";

const Navbar = () => {
    return (
        <header className={"flex px-4 items-center justify-between"}>
            {/*LEFT*/}
            <SidebarTrigger />
            {/*Right*/}
            <nav className={"flex items-center justify-between gap-4"}>
                <Link href={"/dashboard"}>Dashboard</Link>
                <ModeToggle/>
                <UserDropdownMenu/>
            </nav>
        </header>
    )
}

export default Navbar