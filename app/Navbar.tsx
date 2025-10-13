"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="pb-6">
      <ul className="flex p-3 bg-slate-300 space-x-6">
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        <Link href="/product">Products</Link>
        {status === "authenticated" && (
          <div>
            {session.user?.name}
            <Link href="/api/auth/signout" className="ml-6">
              Sign Out
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
