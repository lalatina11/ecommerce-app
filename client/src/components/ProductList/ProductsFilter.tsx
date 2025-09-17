"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductsFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleFilter = (val: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("filter", val);
    router.replace(`${pathname}?${params}`, { scroll: false });
  };
  return (
    <Card className="p-3 bg-background w-fit flex flex-row gap-3 items-center mb-3">
      <span>Sort By:</span>
      <div>
        <Select onValueChange={(val) => handleFilter(val)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="capitalize" value="newest">
              newest
            </SelectItem>
            <SelectItem className="capitalize" value="oldest">
              oldest
            </SelectItem>
            <SelectItem className="capitalize" value="price-asc">
              price-asc
            </SelectItem>
            <SelectItem className="capitalize" value="price-desc">
              price-desc
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default ProductsFilter;
