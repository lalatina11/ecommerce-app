"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { email, object, string, z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const handleEditUserProfile = async (
    values: z.infer<typeof updateProfileUserSchema>,
  ) => {
    toast.success("Berhasil edit profile user!");
    console.log(values);
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleEditUserProfile)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">phone</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">location</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">role</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full">Process</Button>
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default EditUser;
