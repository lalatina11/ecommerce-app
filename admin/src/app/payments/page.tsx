import { columns } from "@/components/payments/column";
import { DataTable } from "@/components/payments/DataTable";
import paymentsData from "@/lib/payments";

const Page = async () => {
  const data = await paymentsData();
  return (
    <div className="p-3 pb-6">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
