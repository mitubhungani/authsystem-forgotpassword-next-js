import { Categories } from "@/components/categories/categories";
import { Featuredbook } from "@/components/featuredbook/featuredbook";
import { Footer } from "@/components/footer/footer";
import { GetStarted } from "@/components/getstarted/getstarted";
import HeroSection from "@/components/herosection/herosection";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section>
        <HeroSection />
      </section>
      <section>
        <Featuredbook />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <GetStarted />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default page;
