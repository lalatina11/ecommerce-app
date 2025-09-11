"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { FormEventHandler, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { z, email, object, string } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  userInformation: {
    username: string;
    email: string;
    phone: string;
    role: "admin" | "user";
    location: string;
  };
}

const EditUser = ({ userInformation }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateProfileUserSchema = object({
    username: string()
      .min(3, "Username Minimum 3 characters")
      .max(64, "Username Maximum 64 characters"),
    email: email("Invalid Email"),
    phone: string()
      .min(10, "Phone number Minimal 10 character")
      .max(15, "Phone number Maximal 15 character"),
    location: string().min(2, "Location minimal 2 character"),
    role: z.enum(["admin", "user"], "Role hanya bisa diisi admin atau user!"),
  });

  const form = useForm<z.infer<typeof updateProfileUserSchema>>({
    resolver: zodResolver(updateProfileUserSchema),
    defaultValues: userInformation,
  });

  const handleEditUserProfile: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    toast.success("Berhasil edit profile user!");
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <Edit /> Edit Profile
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Edit User Information</SheetTitle>
          <SheetDescription asChild>
            <form onSubmit={handleEditUserProfile} className="space-y-6">
              <fieldset className="flex flex-col gap-3">
                <Label className="capitalize" htmlFor="username">
                  username
                </Label>
                <Input name="username" placeholder="username" />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <Label className="capitalize" htmlFor="email">
                  email
                </Label>
                <Input name="email" placeholder="email" />
              </fieldset>
              <Button className="w-full">Process</Button>
            </form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default EditUser;
