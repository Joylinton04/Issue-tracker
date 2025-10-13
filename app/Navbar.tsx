import { Bug } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navlinks = [
    { label: "Dashboard", to: "/" },
    { label: "Issues", to: "/issues" },
  ];

  return (
    <nav className="flex space-x-8 items-center border-gray-200 border-b px-6 mb-6">
      <Link href="/">
        <Bug />
      </Link>
      <ul className="flex space-x-8 py-2">
        {navlinks.map((l, i) => (
          <li key={i} className="hover:bg-blue-400 hover:text-white p-2 transition-all">
            <Link href={l.to}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
