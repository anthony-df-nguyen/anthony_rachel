import type { Metadata } from "next";
import React from "react";
import {Header, Footer} from "@/components/Navigation";


export const metadata: Metadata = {
  title: "Gallery | Rachel & Anthony Nguyen",
  description: "Our photo gallery",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header transparent={false} />
      {children}
      <Footer />
    </div>
  );
}
