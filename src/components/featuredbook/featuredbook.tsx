// components/FeaturedProducts.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg",
    price: "$19.99",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
    price: "$14.50",
  },
  {
    title: "Avengers",
    author: "Stan Lee",
    image: "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
    price: "$17.99",
  },
  {
    title: "Pirates of the Caribbean",
    author: "Johnny Depp",
    image: "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
    price: "$17.99",
  },
  
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
    price: "$14.50",
  },
  {
    title: "Avengers",
    author: "Stan Lee",
    image: "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
    price: "$17.99",
  },
  {
    title: "Pirates of the Caribbean",
    author: "Johnny Depp",
    image: "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
    price: "$17.99",
  },
];

export const Featuredbook = () => {
  
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
         Featured Books
      </h2>

      <div className="flex gap-6 overflow-x-auto px-2 snap-x snap-mandatory py-4 scrollbar-thin scrollbar-thumb-gray-300">
        {books.map((book, index) => (
          <Card
            key={index}
            className="min-w-[280px] max-w-[280px] snap-center flex-shrink-0 shadow-md hover:shadow-xl transition-all duration-300 "
          >
            <CardHeader className="p-0">
              <Image
                src={book.image}
                alt={book.title}
                width={300}
                height={200}
                className="rounded-t-lg object-contain w-full h-[200px]"
              />
            </CardHeader>

            <CardContent className="p-4 space-y-2 text-center">
              <CardTitle className="text-lg font-semibold">{book.title}</CardTitle>
              <p className="text-sm text-gray-500">by {book.author}</p>
              <p className="text-lg font-bold text-indigo-600">{book.price}</p>
              <Button className="w-full mt-2">Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};







// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const books = [
//   {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     image:
//       "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg",
//     price: "$19.99",
//   },
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     image:
//       "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
//     price: "$14.50",
//   },
//   {
//     title: "Avengers",
//     author: "Stan Lee",
//     image:
//       "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     image:
//       "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
//     price: "$14.50",
//   },
//   {
//     title: "Avengers",
//     author: "Stan Lee",
//     image:
//       "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     image:
//       "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
//     price: "$14.50",
//   },
//   {
//     title: "Avengers",
//     author: "Stan Lee",
//     image:
//       "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     image:
//       "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
//     price: "$14.50",
//   },
//   {
//     title: "Avengers",
//     author: "Stan Lee",
//     image:
//       "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
  
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     image:
//       "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
//     price: "$14.50",
//   },
//   {
//     title: "Avengers",
//     author: "Stan Lee",
//     image:
//       "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
  
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     image:
//       "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg",
//     price: "$14.50",
//   },
//   {
//     title: "Avengers",
//     author: "Stan Lee",
//     image:
//       "https://m.media-amazon.com/images/I/81vWg-nd5PL._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
//   {
//     title: "Pirates of the Caribbean",
//     author: "Johnny Depp",
//     image:
//       "https://m.media-amazon.com/images/I/81UtGMRydML._AC_UF1000,1000_QL80_.jpg",
//     price: "$17.99",
//   },
// ];

// export const Featuredbook = () => {
//   return (
//     <section className="py-12 px-4 bg-gradient-to-br from-sky-50 via-white to-sky-100">
//       <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
//         📚 Featured Books
//       </h2>

//       <div className="flex gap-6 overflow-x-auto px-2 snap-x snap-mandatory py-4 scrollbar-thin">
//         {books.map((book, index) => (
//           <Card
//             key={index}
//             className="group w-[60px] h-[400px] hover:w-[300px] hover:h-[400px] transition-all duration-300 overflow-hidden relative snap-center flex-shrink-0 shadow-md hover:shadow-xl cursor-pointer"
//           >
//             <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 group-hover:opacity-0">
//               <p className="transform -rotate-90 whitespace-nowrap text-lg font-semibold">
//                 {book.title}
//               </p>
//             </div>
//             <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto w-full h-full">
//               <CardHeader className="p-0">
//                 <Image
//                   src={book.image}
//                   alt={book.title}
//                   width={300}
//                   height={200}
//                   className="rounded-t-lg object-contain w-full h-[200px]"
//                 />
//               </CardHeader>
//               <CardContent className="p-4 space-y-2 text-center">
//                 <CardTitle className="text-lg font-semibold">
//                   {book.title}
//                 </CardTitle>
//                 <p className="text-sm text-gray-500">{book.author}</p>
//                 <p className="text-lg font-bold text-indigo-600">
//                   {book.price}
//                 </p>
//                 <Button className="w-full mt-2">Buy Now</Button>
//               </CardContent>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };