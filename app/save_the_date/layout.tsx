import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Save the Date",
  description: "Save the date for Anthony and Rachel's wedding and help us out with your latest contact into.",
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
