"use client";
import { Bug } from "lucide-react";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPage = usePathname();
  const navlinks = [
    { label: "Dashboard", to: "/" },
    { label: "Issues", to: "/issues" },
  ];

  return (
    <nav className="flex space-x-7 items-center border-gray-200 border-b px-6 mb-6">
      <Link href="/">
        <Bug />
      </Link>
      <ul className="flex space-x-7 py-2">
        {navlinks.map((l, i) => (
          <li
            key={i}
            // className="hover:bg-blue-400 hover:text-white p-2 transition-all"
            className={classNames({
                'hover:bg-blue-400 hover:text-white p-2 transition-all': true,
                'bg-blue-400 text-white': currentPage == l.to

            })}
          >
            <Link href={l.to}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
