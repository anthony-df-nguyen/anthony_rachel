import React from "react";
import Link from "next/link";
import { navLinks } from "@/components/Navigation";

export default function Navigation() {
  return (
    <nav className="bg-[var(--green)] text-white py-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fancy text-center  mb-4 text-3xl">Rachel & Anthony</div>
        <ul className="flex flex-col text-center justify-center gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}