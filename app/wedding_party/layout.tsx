import type { Metadata } from "next";
import {Header, Footer} from "@/components/Navigation";

export const metadata: Metadata = {
  title: "The Wedding Party | Rachel & Anthony Nguyen",
  description: "Our wedding party",
};

export default function TheBoys({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header transparent={false} />
      {children}
      <Footer />
    </div>
  );
}
