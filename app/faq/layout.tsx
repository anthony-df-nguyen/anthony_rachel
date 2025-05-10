import type { Metadata } from "next";
import { Header, Footer } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "FAQ | Rachel & Anthony Nguyen",
  description: "Frequently asked questions",
};

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header transparent={false} />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
}
