import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="p-3 bg-background rounded-md top-0 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between mb-3 relative">
      {/* LEFT */}
      <Link href={"/"} className="flex gap-2 md:gap-1 items-center">
        <Image
          className="size-6 md:size-9 object-cover"
          src={"/logo.png"}
          alt="iShop Logo"
          width={36}
          height={36}
        />
        <span className="font-bold text-lg tracking-wide">iShop</span>
      </Link>
      {/* RIGHT */}
      <div className="items-center justify-between md:justify-normal gap-3 hidden md:flex">
        <SearchBar />
        <ModeToggle isDropdown />
      </div>
      {/* MOBILE */}
      <div className="block md:hidden absolute right-3 top-2">
        <ModeToggle isDropdown />
      </div>
      <div className="block md:hidden w-full">
        <SearchBar fullContent />
      </div>
    </header>
  );
};

export default Navbar;
