import ProductList from "@/components/ProductList";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "iShop | Home",
  description: "iShop is an home page",
  icons: "/logo.svg",
};

interface Props {
  searchParams: Promise<{ category: string }>;
}

const Page = async ({ searchParams }: Props) => {
  const { category } = await searchParams;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="bg-background p-6 rounded-lg shadow shadow-zinc-500 mt-6 ring ring-zinc-500 mb-5">
        <Image
          src={"/featured.png"}
          alt="featuredProduct"
          width={2000}
          height={2000}
          className="object-cover w-full h-auto"
        />
      </div>
      <ProductList params="HomePage" category={category} />
    </div>
  );
};

export default Page;
