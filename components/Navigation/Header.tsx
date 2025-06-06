"use client";

import { useState, useEffect, JSX } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { NavStrip, navLinks } from "@/components/Navigation";

type Props = {
  /**
   * Determines whether the header background should be transparent
   * or switch to solid on scroll.
   */
  transparent: boolean;
};

/**
 * Example component renders a responsive navigation header with a mobile menu.
 *
 * Features:
 * - Dynamic background color based on scroll position.
 * - Mobile-friendly navigation menu with smooth opening and closing animations.
 * - Desktop navigation with a customizable NavStrip component.
 *
 * @param {Props} props - Component properties.
 * @param {boolean} props.transparent - Whether the header background is initially transparent.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Example({ transparent = false }: Props): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Effect to track the scroll position and update the `isScrolled` state.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `z-20 w-full sticky top-0 transition-colors duration-700 ${
    isScrolled || !transparent
      ? "shadow bg-white/90 text-black backdrop-blur-md backdrop-opacity-80"
      : "bg-transparent text-white"
  }`;

  return (
    <header className={headerClass}>
      <nav
        aria-label="Global"
        className="mx-auto flex lg:flex-col lg:gap-4 items-center justify-between p-4 lg:px-0"
      >
        {/* Hamburger Button for Mobile Menu */}
        <div className="flex lg:hidden z-20">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              !isScrolled && transparent ? "text-white" : "text-gray-700"
            }`}
            aria-label="Open main menu"
          >
            <Bars3Icon aria-hidden="true" className="size-6 z-20" />
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="flex lg:flex-1">
          <div className="fancy text-2xl lg:text-4xl  mr-6 lg:mr-0">Rachel & Anthony</div>
        </Link>

        {/* Empty Placeholder for Alignment */}
        <div className="block lg:hidden"></div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavStrip />
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden transition duration-200 ease-in data-[closed]:opacity-0"
        transition
      >
        <div className="fixed inset-0 z-30" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 left-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              aria-label="Close menu"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
