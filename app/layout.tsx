import type { Metadata } from "next";
import Footer from "@/components/Navigation/Footer";
import {
  Pinyon_Script,
  Trirong,
  Montserrat,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.scss";

const Fancy = Pinyon_Script({
  weight: "400",
  variable: "--fancy",
  preload: false,
});

const Body = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--body",
  preload: false,
});

const Titles = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--titles",
  preload: false,
});

export const metadata: Metadata = {
  title: "Save the Date | Rachel & Anthony",
  description: "Rachel & Anthony Nguyen's wedding website",
  openGraph: {
    title: "Save the Date | Rachel & Anthony Nguyen",
    description: "Our wedding website",
    type: "website",
    url: "https://www.rachelanthonynguyen.com/",
    images: "/images/DSC_5389.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex,nofollow" />
      <body
        className={`${Fancy.variable} ${Body.variable} ${Titles.variable} antialiased`}
      >
        <div className="pt-100 relative">{children}</div> 
      </body>

    </html>
  );
}
