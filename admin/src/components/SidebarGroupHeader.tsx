"use client"
import Link from "next/link";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {buttonVariants} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";

const SidebarGroupHeader = () =>{
    const {open} = useSidebar()
    return (
        <Link href="/" className={"flex items-center justify-center gap-1"}>
            <div className={"" + buttonVariants({size: "icon", variant: "ghost"})}>
                <Image src={"/logo.svg"} alt="Logo" width={50} height={50}
                       className={"aspect-square max-h-10 w-auto object-cover"}/>
            </div>
            {open && (
                <Label className={"text-2xl font-semibold mt-1"}>iShop</Label>
            )}
        </Link>
    )

}

export default SidebarGroupHeader;