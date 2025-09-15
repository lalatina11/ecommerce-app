"use client";

import { ProductType } from "@/types";
import { Card, CardTitle } from "../ui/card";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="p-3 bg-background">
      <CardTitle>{product.name}</CardTitle>
    </Card>
  );
};

export default ProductCard;
