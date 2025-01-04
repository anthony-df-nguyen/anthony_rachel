import React from "react";
import { navigation } from "./constants";
import Link from "next/link";

const NavStrip = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-16">
        {navigation.map((row) => (
          <Link key={row.name} href={row.href} className="body text-lg">
            {row.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavStrip;
