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
// import {  useForm } from "react-hook-form";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { formSchema, SignupFormValues } from "@/lib/zodValidations";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { setUserToCookie } from "@/actions/getcookiesdata";

// const Signup = () => {
//   const router = useRouter();
//   const form = useForm<SignupFormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (values: SignupFormValues) => {
//     const existingUsers = JSON.parse(
//       localStorage.getItem("signupUsers") || "[]"
//     );

//     const newUser = {
//       id: crypto.randomUUID(),
//       username: values.username,
//       email: values.email,
//       password: values.password,
//     };

//     existingUsers.push(newUser);
//     localStorage.setItem("signupUsers", JSON.stringify(existingUsers));

//     await setUserToCookie(newUser);

//     form.reset();
//     toast.success("User created and logged in!");
//     router.push("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg grid md:grid-cols-2">
//         {/* Left side image */}
//         <div className="hidden md:block">
//           <Image
//             src="/signup.jpg"
//             alt="Signup Illustration"
//             width={600}
//             height={600}
//             className="rounded-l-xl object-cover h-full w-full"
//           />
//         </div>

//         {/* Form container */}
//         <div className="flex items-center justify-center p-10">
//           <div className="w-full max-w-lg">
//             <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
//               Create a New Account
//             </h2>

//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="space-y-6"
//               >
//                 {/* Username */}
//                 <FormField
//                   control={form.control}
//                   name="username"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base text-gray-700">
//                         Username
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="John Doe"
//                           {...field}
//                           className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-sm" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Email */}
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base text-gray-700">
//                         Email
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           type="email"
//                           placeholder="you@example.com"
//                           {...field}
//                           className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-sm" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Password */}
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base text-gray-700">
//                         Password
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           type="password"
//                           placeholder="••••••••"
//                           {...field}
//                           className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500 text-sm" />
//                     </FormItem>
//                   )}
//                 />

//                 {/*Skils */}


//                 {/* Submit Button */}
//                 <Button
//                   type="submit"
//                   className="w-full py-3 text-base font-medium cursor-pointer"
//                 >
//                   Signup
//                 </Button>
//               </form>
//             </Form>

//             {/* Login Link */}
//             <p className="mt-8 text-center text-base text-gray-600">
//               Already have an account?{" "}
//               <Link
//                 href="/login"
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, X } from "lucide-react";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { formSchema, SignupFormValues } from "@/lib/zodValidations";
import { setUserToCookie } from "@/actions/getcookiesdata";

const Signup = () => {
  const router = useRouter();
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      skills: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "skills",
  });

  const onSubmit = async (values: SignupFormValues) => {
    const existingUsers = JSON.parse(localStorage.getItem("signupUsers") || "[]");

    const newUser = {
      id: crypto.randomUUID(),
      username: values.username,
      email: values.email,
      password: values.password,
      skills: values.skills,
    };

    existingUsers.push(newUser);
    localStorage.setItem("signupUsers", JSON.stringify(existingUsers));

    await setUserToCookie(newUser);

    form.reset();
    toast.success("User created and logged in!");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-6 py-12">
      <Card className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg border">
        <div className="grid md:grid-cols-2">
          {/* Left side image */}
          <div className="hidden md:block">
            <Image
              src="/signup.jpg"
              alt="Signup illustration"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side form */}
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <CardHeader className="p-0 mb-6 text-center">
              <CardTitle className="text-3xl font-bold text-primary">
                Create Account
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Username */}
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                            className="focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            {...field}
                            className="focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Skills */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <FormLabel>Skills</FormLabel>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => append("")}
                        className="gap-1"
                      >
                        <PlusCircle size={18} />
                        Add Skill
                      </Button>
                    </div>

                    {fields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-2">
                        <Input
                          {...form.register(`skills.${index}`)}
                          placeholder={`Skill #${index + 1}`}
                          className="flex-1 focus-visible:ring-2 focus-visible:ring-primary"
                        />
                        {fields.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => remove(index)}
                            className="text-destructive hover:text-red-700"
                          >
                            <X size={20} />
                          </Button>
                        )}
                      </div>
                    ))}

                    {form.formState.errors.skills && (
                      <FormMessage>
                        {form.formState.errors.skills.message}
                      </FormMessage>
                    )}
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    className="w-full py-3 text-base font-semibold"
                  >
                    Signup
                  </Button>
                </form>
              </Form>

              {/* Login Link */}
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary underline underline-offset-4">
                  Login
                </Link>
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
