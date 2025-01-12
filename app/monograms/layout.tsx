import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Monograms | Rachel & Anthony",
  description: "",
  openGraph: {
    title: "Monograms | Rachel & Anthon",
    description: "Save the Date September 20th 2025",
    type: "website",
    url: "https://www.rachelanthonynguyen.com/",
    images: "/images/DSC_5389.jpg"
  }
};

export default function SaveTheDate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
