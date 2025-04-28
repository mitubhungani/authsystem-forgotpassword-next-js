"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserFromCookie, removeUserCookie } from "@/actions/getcookiesdata";

type User = {
  username: string;
  email: string;
  password: string;
  skills: [];
};

const Page = () => {
  const router = useRouter();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    try {
      const userData = async () => {
        const data = await getUserFromCookie();
        if (data) {
          setUserData(data);
        }
      };
      userData();
    } catch {
      removeUserCookie();
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    removeUserCookie();
    router.push("/login");
  };

  const changePassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userData) return toast.error("Not logged in");

    if (oldPassword !== userData.password)
      return toast.error("Old password is incorrect");

    if (newPassword !== confirmPassword)
      return toast.error("Passwords do not match");

    if (newPassword.length < 6)
      return toast.error("Password must be at least 6 characters");

    const users: User[] = JSON.parse(
      localStorage.getItem("signupUsers") || "[]"
    );
    const idx = users.findIndex((u) => u.email === userData.email);

    if (idx !== -1) {
      users[idx].password = newPassword;
      localStorage.setItem("signupUsers", JSON.stringify(users));
    }

    const updatedUser = { ...userData, password: newPassword };
    Cookies.set("loggedInUser", JSON.stringify(updatedUser), {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });

    setUserData(updatedUser);
    toast.success("Password changed");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4 py-10">
      <Card className="w-full max-w-md shadow-2xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary">
            My Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          {userData ? (
            <>
              <div className="mb-6 text-center">
                <p className="text-lg font-medium text-gray-800">
                  👋 Hello, {userData.username}
                </p>
                <p className="text-sm text-muted-foreground">
                  {userData.email}
                </p>

                {userData.skills.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-700 mb-2">
                      Skills:
                    </h4>
                    <ul className="flex flex-wrap justify-center gap-2">
                      {userData.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="px-3 py-1 items-center bg-gray-200 rounded-full text-sm text-gray-700"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full mb-2 cursor-pointer"
                  >
                    Change Password
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Change Password</DialogTitle>
                    <DialogDescription>
                      Update your password below.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={changePassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="oldPassword">Old Password</Label>
                      <Input
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        type="password"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        required
                      />
                    </div>

                    <DialogFooter>
                      <Button type="submit" className="w-full cursor-pointer">
                        Save Changes
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              <Button
                onClick={handleLogout}
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              >
                Logout
              </Button>
            </>
          ) : (
            <p className="text-center text-muted-foreground">
              You are not logged in.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
