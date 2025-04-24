"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailExist, setIsEmailExist] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const existingUsers = JSON.parse(localStorage.getItem("signupUsers") || "[]")
    console.log(email);
    

    const userExists = existingUsers.find((user: { email: string }) => user.email === email);
    if (userExists) {
        setIsEmailExist(true);
      toast.success("Email is Exists");
      router.push(`/forgotpassword?email=${encodeURIComponent(email)}`);
    }else{
        toast.error("Email is not Exists");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Forgot Password
        </h2>

        {!isEmailExist ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            <Button>
              Confirm Email
            </Button>
          </form>
        ) : (
          <div className="text-center text-sm text-gray-600">
            <p>A password reset link has been sent to your email!</p>
            <Button className="cursor-pointer">
              Back to Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
