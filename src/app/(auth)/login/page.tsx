"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { setUserToCookie } from "@/actions/getcookiesdata";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password must be 6+ characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    const existingUsers = JSON.parse(
      localStorage.getItem("signupUsers") || "[]"
    );

    const foundUser = existingUsers.find(
      (user: { email: string; password: string }) =>
        user.email === values.email && user.password === values.password
    );

    if (foundUser) {
      await setUserToCookie(foundUser); // ⬅️ Store cookie on server

      toast.success("Login successful!");
      form.reset();
      router.push("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg grid md:grid-cols-2">
        {/* Left side image */}
        <div className="hidden md:block">
          <Image
            src="/login.jpg"
            alt="Login Illustration"
            width={600}
            height={600}
            className="rounded-l-xl object-cover h-full w-full"
          />
        </div>

        {/* Right side form */}
        <div className="flex items-center justify-center p-10">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Login to Your Account
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                          className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-gray-700">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                          className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full cursor-pointer py-3 text-base font-medium"
                >
                  Login
                </Button>
              </form>
            </Form>

            <div className="my-4 text-blue-600 text-end hover:underline">
              <Link href="/verifyemail">Forgot Password?</Link>
            </div>

            {/* Signup Link */}
            <p className="mt-8 text-center text-base text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
