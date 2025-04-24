// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// type User = {
//   username: string;
//   email: string;
//   password: string;
// };

// const Page = () => {
//   const router = useRouter();

//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [userData, setUserData] = useState<User | null>(null);

//   useEffect(() => {
//     try {
//       const user = Cookies.get("loggedInUser");
//       if (user) {
//         setUserData(JSON.parse(user));
//       }
//     } catch (error) {
//       console.error("Invalid user cookie:", error);
//       Cookies.remove("loggedInUser");
//       router.push("/login");
//     }
//   }, [router]);

//   const handleLogout = () => {
//     Cookies.remove("loggedInUser");
//     router.push("/login");
//   };

//   const changePassword = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!userData) {
//       toast.error("You must be logged in to change the password.");
//       return;
//     }

//     if (oldPassword !== userData.password) {
//       toast.error("Old password is incorrect.");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     if (newPassword.length < 6) {
//       toast.error("New password must be at least 6 characters long.");
//       return;
//     }

//     const localData: User[] = JSON.parse(localStorage.getItem("signupUsers") || "[]");

//     const userIndex = localData.findIndex(user => user.email === userData.email);
//     if (userIndex !== -1) {
//       localData[userIndex].password = newPassword;
//       localStorage.setItem("signupUsers", JSON.stringify(localData));
//     }

//     const updatedUser = { ...userData, password: newPassword };
//     Cookies.set("loggedInUser", JSON.stringify(updatedUser), {
//       expires: 7,
//       secure: true,
//       sameSite: "strict",
//     });

//     setUserData(updatedUser);
//     toast.success("Password changed successfully.");
//     setOldPassword("");
//     setNewPassword("");
//     setConfirmPassword("");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">My Page</h1>

//         {userData ? (
//           <>
//             <div className="mb-6">
//               <p className="text-lg text-gray-800">Welcome, {userData.username}!</p>
//               <p className="text-sm text-gray-600">Email: {userData.email}</p>
//             </div>

//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button variant="outline">Forgot Password</Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[425px]">
//                 <DialogHeader>
//                   <DialogTitle>Forgot Password</DialogTitle>
//                   <DialogDescription>
//                     Make changes to your password here. Click save when youre done.
//                   </DialogDescription>
//                 </DialogHeader>

//                 <form onSubmit={changePassword} className="grid gap-4 py-4">
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="oldPassword" className="text-right">
//                       Old Password
//                     </Label>
//                     <Input
//                       id="oldPassword"
//                       value={oldPassword}
//                       onChange={(e) => setOldPassword(e.target.value)}
//                       className="col-span-3"
//                       type="password"
//                       required
//                     />
//                   </div>

//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="newPassword" className="text-right">
//                       New Password
//                     </Label>
//                     <Input
//                       id="newPassword"
//                       value={newPassword}
//                       onChange={(e) => setNewPassword(e.target.value)}
//                       className="col-span-3"
//                       type="password"
//                       required
//                     />
//                   </div>

//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="confirmPassword" className="text-right">
//                       Confirm Password
//                     </Label>
//                     <Input
//                       id="confirmPassword"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       className="col-span-3"
//                       type="password"
//                       required
//                     />
//                   </div>

//                   <DialogFooter>
//                     <Button type="submit">Save changes</Button>
//                   </DialogFooter>
//                 </form>
//               </DialogContent>
//             </Dialog>

//             <Button
//               onClick={handleLogout}
//               className="w-full mt-4 bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-2 rounded-lg shadow-sm"
//             >
//               Logout
//             </Button>
//           </>
//         ) : (
//           <p className="text-lg text-gray-800 text-center">You are not logged in.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page;




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

type User = {
  username: string;
  email: string;
  password: string;
};

const Page = () => {
  const router = useRouter();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    try {
      const user = Cookies.get("loggedInUser");
      if (user) {
        setUserData(JSON.parse(user));
      }
    } catch {
      Cookies.remove("loggedInUser");
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove("loggedInUser");
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

    const users: User[] = JSON.parse(localStorage.getItem("signupUsers") || "[]");
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
                <p className="text-lg font-medium text-gray-800">👋 Hello, {userData.username}</p>
                <p className="text-sm text-muted-foreground">{userData.email}</p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full mb-4 cursor-pointer">
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
            <p className="text-center text-muted-foreground">You are not logged in.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
