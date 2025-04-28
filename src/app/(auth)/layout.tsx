import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("loggedInUser");

  if (cookie) redirect("/");
  return <>{children}</>;
}
