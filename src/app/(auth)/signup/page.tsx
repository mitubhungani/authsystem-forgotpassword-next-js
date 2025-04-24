// "use client";

// import React from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { formSchema, SignupFormValues } from "@/lib/zodValidations";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";

// const Signup = () => {
//   const form = useForm<SignupFormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (values: SignupFormValues) => {
//     const existingUsers = localStorage.getItem("signupUsers");
//     const usersArray = existingUsers ? JSON.parse(existingUsers) : [];

//     usersArray.push({
//       id: crypto.randomUUID(),
//       username: values.username,
//       email: values.email,
//       password: values.password,
//     });

//     localStorage.setItem("signupUsers", JSON.stringify(usersArray));

//     form.reset();
//     toast.success("User created successfully!");

//     console.log("Updated user data saved in localStorage:", usersArray);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
//           Create a New Account
//         </h2>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//             {/* Username */}
//             <FormField
//               control={form.control}
//               name="username"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm text-gray-700">
//                     Username
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="John Doe"
//                       className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-500 text-xs" />
//                 </FormItem>
//               )}
//             />

//             {/* Email */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm text-gray-700">Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="email"
//                       placeholder="you@example.com"
//                       className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-500 text-xs" />
//                 </FormItem>
//               )}
//             />

//             {/* Password */}
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm text-gray-700">
//                     Password
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="********"
//                       className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-500 text-xs" />
//                 </FormItem>
//               )}
//             />

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 rounded-lg shadow-sm"
//             >
//               Sign Up
//             </button>
//           </form>
//         </Form>

//         {/* Login Link */}
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link
//             href="/login"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
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
import { formSchema, SignupFormValues } from "@/lib/zodValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const router = useRouter();
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignupFormValues) => {
    const existingUsers = JSON.parse(
      localStorage.getItem("signupUsers") || "[]"
    );

    const newUser = {
      id: crypto.randomUUID(),
      username: values.username,
      email: values.email,
      password: values.password,
    };

    existingUsers.push(newUser);
    localStorage.setItem("signupUsers", JSON.stringify(existingUsers));

    Cookies.set("loggedInUser", JSON.stringify(newUser), {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });

    form.reset();
    toast.success("User created and logged in!");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg grid md:grid-cols-2">
        {/* Left side image */}
        <div className="hidden md:block">
          <Image
            src="/signup.jpg"
            alt="Signup Illustration"
            width={600} 
            height={600} 
            className="rounded-l-xl object-cover h-full w-full"
          />
        </div>

        {/* Form container */}
        <div className="flex items-center justify-center p-10"> 
          <div className="w-full max-w-lg"> 
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center"> 
              Create a New Account
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Username */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-gray-700">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

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

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-3 text-base font-medium"
                >
                  Signup
                </Button>
              </form>
            </Form>

            {/* Login Link */}
            <p className="mt-8 text-center text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;