"use client";

import { ProductType } from "@/types";
import { Card, CardFooter } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Label } from "../ui/label";
import { FaCartPlus } from "react-icons/fa";
import { buttonVariants } from "../ui/button";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  const [productColor, setProductColor] = useState(product.colors[0]);

  return (
    <Card className="p-3 bg-background overflow-hidden pb-5">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.images[productColor]}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-md aspect-[2/3] hover:scale-105 transition-all duration-300"
        />
      </Link>
      <CardFooter className="flex flex-col gap-2 w-full px-0">
        <div className="flex gap-1 flex-col w-full justify-normal">
          <Label className="text-sm">Color</Label>
          <div className="flex items-center gap-1">
            {product.colors.map((color) => (
              <div
                style={{
                  backgroundColor: color,
                }}
                key={color}
                onClick={() => setProductColor(color)}
                aria-disabled={productColor === color}
                className="size-4 rounded-full cursor-pointer border border-zinc-500 p-1 relative aria-disabled:cursor-default aria-disabled:opacity-70"
              >
                {/* MARKER */}
                {productColor === color && (
                  <div
                    className={`absolute w-3.5 h-1 left-0 top-[5px] rounded-full -rotate-45 ${productColor === color && productColor !== "red" ? "bg-red-500" : productColor === color && color === "red" ? "bg-black" : ""}`}
                  />
                )}
                {/* MARKER END */}
              </div>
            ))}
          </div>
        </div>
        <span>{product.name}</span>
        <span className="text-xs text-muted-foreground">
          {product.shortDescription}
        </span>
        <Link
          href={`/products/${product.id}`}
          className={
            "w-full flex gap-2 justify-normal items-center" +
            buttonVariants({ variant: "default" })
          }
        >
          Add to Cart Now!
          <FaCartPlus />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
