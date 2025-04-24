"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserType } from "@/Types/type";

const ForgotPassword = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Invalid email");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const existingUsers = JSON.parse(
      localStorage.getItem("signupUsers") || "[]"
    );

    const updatedUsers = existingUsers.map((user: UserType) => {
      if (user.email === email) {
        return { ...user, password: newPassword };
      }
      return user;
    });

    localStorage.setItem("signupUsers", JSON.stringify(updatedUsers));

    toast.success("Password reset successful!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Reset Your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-700">New Password</label>
            <Input
              type="password"
              placeholder="******"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Confirm Password</label>
            <Input
              type="password"
              placeholder="******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
