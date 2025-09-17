import ProductList from "@/components/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iShop | Products",
  description: "iShop is an home page",
  icons: "/logo.svg",
};

interface Props {
  searchParams: Promise<{ category: string }>;
}

const Page = async ({ searchParams }: Props) => {
  const { category } = await searchParams;
  return (
    <div>
      <ProductList category={category} />
    </div>
  );
};

export default Page;
