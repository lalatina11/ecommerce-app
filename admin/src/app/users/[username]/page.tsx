import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import ProfileCompletionsProgress from "@/components/ProfileCompletionsProgress";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { UserRole } from "@/types";
import { BadgeCheck, Candy, Citrus, Shield, User } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ username: string }>;
}

export const metadata: Metadata = {
  title: "iShop | Users",
  description: "iShop Admin Pannel users page",
  icons: "/logo.svg",
};

const Page = async ({ params }: Props) => {
  const { username } = await params;

  const userInformation = {
    username,
    email: username + "@email.com",
    phone: "1 234 5678",
    location: "Jakarta",
    role: "admin" as UserRole,
  };
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 mb-10 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <span className="text-xl font-semibold">User Badges</span>
            {/* Badges List */}
            <div className="flex gap-3 items-center mt-3">
              <HoverCard openDelay={0} closeDelay={500}>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={30}
                    className="text-blue-500 rounded-md w-6 h-6"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  {/* Badge Title */}
                  <span className="font-semibold border-b pb-1 text-center">
                    Verified User
                  </span>
                  {/* Badge Desc */}
                  <span>{username} Has been verified by iShop Corp.</span>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={30}
                    className="text-blue-500 rounded-md w-6 h-6"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h1 className="font-semibold border-b pb-1 text-center">
                    Admin
                  </h1>
                  <span>
                    Admin users have access to all features and can manage
                    users.
                  </span>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={30}
                    className="text-blue-500 rounded-md w-6 h-6"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h1 className="font-semibold border-b pb-1 text-center">
                    Awarded
                  </h1>
                  <span>
                    This user has been awarded for their contributions.
                  </span>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={30}
                    className="text-blue-500 rounded-md w-6 h-6"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h1 className="font-semibold border-b pb-1 text-center">
                    Popular
                  </h1>
                  <span>This user has been popular in the community.</span>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">User Information</span>
              <EditUser userInformation={userInformation} />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-zinc-500">Profile Completions</span>
                <ProfileCompletionsProgress />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg lg:text-sm">
                    Username:
                  </span>
                  <span className="">{username}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg lg:text-sm">
                    Email:
                  </span>
                  <span className="">{username}@email.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg lg:text-sm">
                    Phone:
                  </span>
                  <span className="">1 234 5678</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg lg:text-sm">
                    Location:
                  </span>
                  <span className="">Jakarta</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg lg:text-sm">
                    Role:
                  </span>
                  <Badge>{true ? <Shield /> : <User />}Admin</Badge>
                </div>
              </div>
            </div>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* User Card */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          {/* User Chart */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Chart</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
