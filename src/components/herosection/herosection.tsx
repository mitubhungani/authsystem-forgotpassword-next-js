"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import SplitText from "../animatetext/animatetext";
import { Button } from "../ui/button";
import Image from "next/image";
import { getUserFromCookie } from "@/actions/getcookiesdata";

const HeroSection = () => {


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
    <section className="relative text-black">
      <div className="flex mx-3  flex-col lg:flex-row items-center justify-between  px-6 py-12 ">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          {/* Heading */}
          <p className="text-4xl sm:text-6xl font-bold  mb-4">Unlock Your Potential with Us.</p>
          {/* Subheading */}
          <p className="text-xl sm:text-2xl mb-6  opacity-80">
            Discover amazing opportunities to grow, learn, and succeed with our platform.
          </p>
          {/* Call-to-Action Button */}
          {
            username ? (
              <Link href="/dashboard">
                <Button className=" cursor-pointer">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button className=" cursor-pointer">
                  Get Started
                </Button>
              </Link>
            )}
          
          {/* <Link href="/login">
            <Button className=" cursor-pointer">
              Get Started
            </Button>
          </Link> */}
        </div>

        {/* Right Section (Image) */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 ">
          <Image
            width={500}
            height={500}
            src="/herosectionimg.jpg"
            alt="Hero Image"
            className="rounded-lg  m-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
