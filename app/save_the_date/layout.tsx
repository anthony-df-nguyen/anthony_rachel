import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Save the Date",
  description: "Save the date for Anthony and Rachel's wedding and help us out with your latest contact into.",
  openGraph: {
    title: "Save the Date | Rachel & Anthony Nguyen",
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
