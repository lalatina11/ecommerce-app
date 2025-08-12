import {Metadata} from "next";
import AppBarChart from "@/components/AppBarChart";
import AppAreaChart from "@/components/AppAreaChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export const metadata: Metadata = {
    title: "iShop Admin | Home",
    description: "iShop Admin Dashboard",
}

const Page = () => {
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 pb-4"}>
            <div className={"bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2"}>
                <AppBarChart/>
            </div>
            <div className={"bg-primary-foreground rounded-lg p-4"}>
                <CardList title={"Latest Transaction"}/>
            </div>
            <div className={"bg-primary-foreground rounded-lg p-4"}>
                <AppPieChart/>
            </div>
            <div className={"bg-primary-foreground rounded-lg p-4"}>
                <TodoList/>
            </div>
            <div className={"bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2"}>
                <AppAreaChart/>
            </div>
            <div className={"bg-primary-foreground rounded-lg p-4"}>
                <CardList title={"Popular Content"}/>
            </div>
        </div>
    )
}

export default Page