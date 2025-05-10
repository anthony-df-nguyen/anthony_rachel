import type { Metadata } from "next";
import {Header, Footer} from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Our Story | Rachel & Anthony Nguyen",
  description: "Our Story",
};

export default function OurStory({
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
