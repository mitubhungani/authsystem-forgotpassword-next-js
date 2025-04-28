"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const categories = [
  { name: "Fiction", image:"https://img.freepik.com/premium-photo/enchanting-moments-cozy-fairy-tale-book-watercolor-wonderland_1020495-25056.jpg?uid=R153444554&ga=GA1.1.902536782.1735456841&semt=ais_hybrid&w=740" },
  { name: "Trending",  image:"https://img.freepik.com/free-vector/growth-success-concept-illustration_114360-30662.jpg?uid=R153444554&ga=GA1.1.902536782.1735456841&semt=ais_hybrid&w=740" },
  { name: "Best Sellers", image:"https://img.freepik.com/premium-vector/flat-illustration-person-holding-top-seller-reward_203633-14100.jpg?uid=R153444554&ga=GA1.1.902536782.1735456841&semt=ais_hybrid&w=740" },
  { name: "Romance", image:"https://img.freepik.com/free-vector/basic-heart-flat-vector_78370-1480.jpg?uid=R153444554&ga=GA1.1.902536782.1735456841&semt=ais_hybrid&w=740" },
  { name: "World Books", image:"https://img.freepik.com/free-vector/hand-drawn-world-book-day-concept_23-2148479608.jpg?t=st=1745576070~exp=1745579670~hmac=5f1df2aebd89d7d180a67e387ad12620946dbf806c041302202f2c9fd1b7ec73&w=826" },
];

export const Categories = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-white to-sky-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
         Browse by Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <Card
            key={idx}
            className="hover:shadow-xl transition-shadow cursor-pointer"
          >
            <CardHeader className="flex flex-col items-center space-y-2">
              <Image
                src={cat.image}
                alt={cat.name}
                width={200}
                height={200}
              />
              <CardTitle className="text-base">{cat.name}</CardTitle>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
};
