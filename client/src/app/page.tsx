import {ModeToggle} from "@/components/ModeToggle";
import {Metadata} from "next";

export const metadata:Metadata={
    title:"iShop | Home",
    description:"iShop is an home page",
}

const Page = () => {
  return (
      <div>
        <span>Hello world</span>
      <ModeToggle isDropdown/>
      </div>
  )
}

export default Page