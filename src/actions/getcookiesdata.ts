"use server";

import { cookies } from "next/headers"

// interface UserCookie {
//     loggedInUser: string | undefined;
// }

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export const setUserToCookie = async (user: User): Promise<void> => {
    const cookie = await cookies();
    cookie.set("loggedInUser", JSON.stringify(user), {
      maxAge: 60 * 60 * 24 * 7,
      secure: true,
      sameSite: "strict",
      path: "/",
      httpOnly: true,
    });
  };
  

  export const getUserFromCookie = async () => {

    const cookieStore = await cookies();
    const loggedInUser = cookieStore.get("loggedInUser")?.value;

    return loggedInUser ? JSON.parse(loggedInUser) : null;  
  };
  

  export const removeUserCookie = async (): Promise<void> => {
    const cookie = await cookies();
    cookie.delete("loggedInUser");
  };