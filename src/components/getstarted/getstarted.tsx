"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getUserFromCookie } from "@/actions/getcookiesdata";
import Link from "next/link";

export const GetStarted = () => {

  const [username, setUsername] = useState<string | null>(null);
    
      useEffect(() => {
        const fetchUserData = async () => {
          const data = await getUserFromCookie();
          if (data?.username) {
            setUsername(data.username);
          }else{
            setUsername(null);
          }
        };
        fetchUserData();
      }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-sky-100 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Ready to Discover Your Next Favorite Book?
        </h2>
        <p className="text-gray-600 text-lg">
          Join thousands of book lovers and explore our vast collection. From bestsellers to hidden gems, there’s something for everyone.
        </p>

{
          username ? (
            <Link href="/dashboard">
              <Button className="px-6 py-3 text-lg cursor-pointer">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link href="/login">
               <Button className="px-6 py-3 text-lg cursor-pointer">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
            </Link>
          )}

       
      </div>
    </section>
  );
};
