import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {LogOut, Settings, User} from "lucide-react";

const UserDropdownMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <User className={"h-[1.2erem] w-[1.2erem] mr-2"}/>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem className={"h-[1.2erem] w-[1.2erem] mr-2"}>
                    <Settings/>
                    Setting
                </DropdownMenuItem>
                <DropdownMenuItem className={"h-[1.2erem] w-[1.2erem] mr-2"} variant={"destructive"}>
                    <LogOut/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdownMenu