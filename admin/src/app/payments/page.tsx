import type { Metadata } from "next";
import { columns } from "@/components/payments/column";
import paymentsData from "@/lib/payments";
import { PaymentsTable } from "@/components/payments";

export const metadata: Metadata = {
  title: "iShop Admin Payments",
  description: "iShop admin pannel showing payments page",
  icons: "/logo.svg",
};

const Page = async () => {
  const data = await paymentsData();
  return (
    <div className="p-3 pb-6">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <PaymentsTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
