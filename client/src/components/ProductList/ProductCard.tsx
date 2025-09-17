"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Button, buttonVariants } from "../ui/button";
import { Card, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  const [selectProductColor, setSelectProductColor] = useState(
    product.colors[0],
  );
  const [selectProductSize, setselectProductSize] = useState(product.sizes[0]);

  const addToChart = (id: ProductType["id"]) => {
    console.log(id);
  };

  return (
    <Card className="p-3 bg-background overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.images[selectProductColor]}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-md aspect-[2/3] hover:scale-105 transition-all duration-300"
        />
      </Link>
      <CardFooter className="flex flex-col justify-between h-full gap-2 w-full px-0">
        <div className="flex justify-between items-center gap-3 w-full">
          <div className="flex flex-col gap-1 flex-1/2">
            <Label>Size</Label>
            <Select
              onValueChange={(value) => setselectProductSize(value)}
              value={selectProductSize}
            >
              <SelectTrigger className="w-[80%]">
                <Label className="uppercase">{selectProductSize}</Label>
              </SelectTrigger>
              <SelectContent className="w-max">
                {product.sizes.map((size) => (
                  <SelectItem
                    key={size}
                    className="uppercase flex justify-center items-center"
                    value={size}
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 flex-col justify-start h-full flex-1/2">
            <Label className="text-sm">Color</Label>
            <div className="flex items-center gap-1">
              {product.colors.map((color) => (
                <div
                  style={{
                    backgroundColor: color,
                  }}
                  key={color}
                  onClick={() => setSelectProductColor(color)}
                  aria-disabled={selectProductColor === color}
                  className="size-4 rounded-full cursor-pointer border border-zinc-500 p-1 relative aria-disabled:cursor-default aria-disabled:opacity-70"
                >
                  {/* MARKER */}
                  {selectProductColor === color && (
                    <div
                      className={`absolute w-3.5 h-1 left-0 top-[5px] rounded-full -rotate-45 ${
                        selectProductColor === color &&
                        selectProductColor !== "red"
                          ? "bg-red-500"
                          : selectProductColor === color && color === "red"
                            ? "bg-black"
                            : ""
                      }`}
                    />
                  )}
                  {/* MARKER END */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link className="font-semibold" href={`/products/${product.id}`}>
          {product.name}
        </Link>
        <span className="text-xs text-muted-foreground">
          {product.shortDescription}
        </span>
        <div className="flex justify-between items-center w-full mt-2">
          <Label className="flex-1/2 text-lg font-semibold">
            ${product.price.toFixed(2)}
          </Label>
          <Button
            onClick={() => addToChart(product.id)}
            className={
              "flex gap-2 justify-normal items-center flex-1/2" +
              buttonVariants({ variant: "default" })
            }
          >
            Add to Cart
            <FaCartPlus />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
