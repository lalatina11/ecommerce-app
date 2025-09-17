import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iShop | Products",
  description: "iShop is an home page",
  icons: "/logo.svg",
};

interface Props {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  return <div>Product ID:{id}</div>;
};

export default Page;
