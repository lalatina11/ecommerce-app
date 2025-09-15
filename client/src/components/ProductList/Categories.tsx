"use client";

import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GiMonclerJacket, GiLargeDress } from "react-icons/gi";

const categories = [
  {
    name: "All",
    icon: ShoppingBasket,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: Shirt,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: Footprints,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: Glasses,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: Briefcase,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: GiLargeDress,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: GiMonclerJacket,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: Hand,
    slug: "gloves",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const selectedCategory = searchParams.get("category");
  const handleSetCategory = (categoryName: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", categoryName);
    router.push(`${pathName}?${params}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-5 mt-3">
      {categories.map((cat) => (
        <Button
          key={cat.name}
          className=""
          disabled={selectedCategory === cat.name}
          onClick={() => handleSetCategory(cat.name)}
        >
          <cat.icon className="size-4" />
          <span>{cat.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default Categories;
