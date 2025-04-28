// "use client";

// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { getUserFromCookie, removeUserCookie } from "@/actions/getcookiesdata";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const data = await getUserFromCookie();
//       if (data?.username) {
//         setUsername(data.username);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const getInitials = (name: string) => {
//     const names = name.split(" ");
//     const firstName = names[0].charAt(0).toUpperCase();
//     const lastName = names.length > 1 ? names[1].charAt(0).toUpperCase() : "";
//     return firstName + lastName;
//   };

//   const handleLogout = () => {
//     removeUserCookie();
//     setUsername(null);
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-white/95 backdrop-blur-md shadow-md px-6 py-4 sticky top-0 z-50 font-sans">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="/home"
//           className="text-3xl font-bold text-blue-600 tracking-tight hover:text-blue-700 transition-colors duration-200"
//         >
//           MyLogo
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
//           {["home", "about", "services", "contact"].map((item) => (
//             <Link
//               key={item}
//               href={`#${item}`}
//               className="relative text-sm uppercase tracking-wide hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop User Section */}
//         <div className="hidden md:flex items-center gap-4">
//           {username ? (
//             <div className="relative group" aria-label="User menu">
//               <div className="flex items-center gap-3 cursor-pointer transition-transform duration-200 group-hover:scale-105">
//                 <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full font-semibold text-sm shadow-lg">
//                   {getInitials(username)}
//                 </div>
//                 <span className="text-blue-600 font-medium hidden lg:inline">
//                   {username}
//                 </span>
//               </div>

//               {/* Dropdown Menu */}
//               <div className="absolute right-0 mt-3 w-52 bg-white/90 backdrop-blur-md shadow-2xl rounded-xl py-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
//                 <Link href="/dashboard">
//                   <span className="block px-4 py-2.5 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 rounded-t-xl">
//                     Dashboard
//                   </span>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-200 rounded-b-xl"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <Button
//               asChild
//               className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <Link href="/login">Login</Link>
//             </Button>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//             className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//           >
//             {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden">
//           <div className="mt-16 ml-4 mr-4 flex flex-col gap-4 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-6 animate-slideIn">
//             {["home", "about", "services", "contact"].map((item) => (
//               <Link
//                 key={item}
//                 href={`#${item}`}
//                 className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors duration-200"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </Link>
//             ))}
//             {username ? (
//               <div className="flex flex-col gap-3 border-t pt-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full font-semibold text-sm">
//                     {getInitials(username)}
//                   </div>
//                   <span className="text-blue-600 font-medium text-lg">
//                     Hello, {username}
//                   </span>
//                 </div>
//                 <Link
//                   href="/dashboard"
//                   className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="text-red-600 text-lg font-medium hover:text-red-700 text-left transition-colors duration-200 cursor-pointer"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <Link
//                 href="/login"
//                 className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors duration-200"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { getUserFromCookie, removeUserCookie } from "@/actions/getcookiesdata";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserFromCookie();
      if (user?.username) setUsername(user.username);
    };
    fetchUser();
  }, []);

  const logout = async () => {
    await removeUserCookie();
    setUsername(null);
  };

  const getFirstLetter = (name: string) => name?.[0]?.toUpperCase() || "";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/home" className="text-xl font-bold text-primary">
          MyLogo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map(({ name, href }) => (
            <Link key={name} href={href} className="hover:text-primary">
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop User Dropdown */}
        <div className="hidden md:flex items-center gap-3 relative group">
         {/* Desktop User Dropdown */}
{username ? (
  <div className="hidden md:flex items-center gap-3 relative cursor-pointer px-3 py-1">
    {/* Avatar */}
    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary text-white font-bold">
      {getFirstLetter(username)}
    </div>

    {/* Username with dropdown */}
    <div className="relative group">
      <span className="text-sm font-medium cursor-pointer">
        {username}
      </span>

      {/* Hover window */}
      <div className="absolute top-full mt-2 right-0 bg-white border rounded-md shadow-md p-2 w-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
        <Link
          href="/dashboard"
          className="flex items-center px-2 py-1 text-sm hover:bg-gray-100 rounded"
        >
          <LayoutDashboard className="h-4 w-4 mr-2" />
          Dashboard
        </Link>
        <button
          onClick={logout}
          className="flex items-center text-sm text-red-600 hover:bg-red-50 rounded w-full px-2 py-1 mt-1 cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  </div>
) : (
  <Button asChild className="hidden md:inline-flex">
    <Link href="/login">Login</Link>
  </Button>
)}

        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 space-y-4">
              <SheetClose asChild>
                <Link href="/home" className="text-2xl font-bold text-primary">
                  MyLogo
                </Link>
              </SheetClose>

              {navLinks.map(({ name, href }) => (
                <SheetClose asChild key={name}>
                  <Link href={href} className="block text-base">
                    {name}
                  </Link>
                </SheetClose>
              ))}

              {username ? (
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                    {getFirstLetter(username)}
                  </div>
                  <span className="text-base font-medium">{username}</span>
                </div>
              ) : (
                <SheetClose asChild>
                  <Button asChild className="mt-4 w-full">
                    <Link href="/login">Login</Link>
                  </Button>
                </SheetClose>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
