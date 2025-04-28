"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserFromCookie } from "@/actions/getcookiesdata";

export default function SidebarComponent() {
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const userData = async () => {
      const data = await getUserFromCookie();
      if (data) {
        setUser(data);
      }
    };
    userData();
  }, []);

  // console.log("User data from cookie:", user);

  return (
    <Sidebar className="flex flex-col justify-between h-full">
      {/* Top Section */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md">Application</SidebarGroupLabel>

          <SidebarGroupContent className="space-y-2 mt-2">
            <Link
              href="/dashboard/profile"
              className="block text-sm px-3 py-2 rounded-md hover:bg-gray-200"
            >
              Profile
            </Link>
            {/* <Link
              href="/dashboard/product"
              className="block text-sm px-3 py-2 rounded-md hover:bg-gray-200"
            >
              Products
            </Link>
            <Link
              href="/dashboard/addproduct"
              className="block text-sm px-3 py-2 rounded-md hover:bg-gray-200"
            >
              Add-Product
            </Link>
            <Link
              href="/dashboard/cart"
              className="block text-sm px-3 py-2 rounded-md hover:bg-gray-200"
            >
              Cart
            </Link> */}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom Section */}
      <div className="border-t mt-4 px-4 py-3 flex items-center justify-between text-sm bg-white">
        <div>
          <p className="font-medium">{user?.username ?? "Guest"}</p>
          <p className="text-xs text-gray-500">
            {user?.email ?? "guest@example.com"}
          </p>
        </div>
        <Link href="/dashboard/profile">
          <Settings className="w-5 h-5 text-gray-600 hover:text-black" />
        </Link>
      </div>
    </Sidebar>
  );
}
