import {ModeToggle} from "@/components/ModeToggle";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "iShop Admin | Home",
    description: "iShop Admin Dashboard",
}

const Page = () => {
    return (
        <div>
            <span>Hei</span>
            <ModeToggle isGhost/>
        </div>
    )
}

export default Page