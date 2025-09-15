"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEventHandler } from "react";
import { cn } from "@/lib/utils";

interface Props {
  fullContent?: boolean;
}

const SearchBar = ({ fullContent }: Props) => {
  const search: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const formData = new FormData(form);
    const searchValue = formData.get("search") as string;
    if (searchValue.trim().length) {
      console.log(searchValue);
      form.reset();
    }
  };
  return (
    <form onSubmit={search} className={"relative"}>
      <Input
        name="search"
        className={"" + cn(fullContent && "w-full")}
        placeholder="Seach anything..."
      />
      <Button
        className="absolute right-0 bottom-0"
        size={"icon"}
        variant={"ghost"}
      >
        <Search />
      </Button>
    </form>
  );
};

export default SearchBar;
