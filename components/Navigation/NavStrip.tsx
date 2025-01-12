import React from "react";
import { navLinks } from "@/components/Navigation";
import Link from "next/link";

const NavStrip = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-16">
        {navLinks.map((row) => (
          <Link key={row.name} href={row.href} className="body text-md">
            {row.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavStrip;
