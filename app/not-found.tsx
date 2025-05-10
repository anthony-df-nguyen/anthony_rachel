import React from "react";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";

export default function NotFound() {
  return (
    <div>
      <Header transparent={false} />
      <div className="container mx-auto">
        <Section title="Page Not Found" id="not_found">
          <div className="grid gap-8 grid-cols-1 items-center">
            <div className="aspect-video w-full relative rounded-lg overflow-hidden">
              <Image
                alt="404"
                src="/images/travolta.gif"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">
                Sorry! This page does not exist or could not be found.
              </div>
              <br />
              <Link href="/" className="button filled">
                Back Home
              </Link>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}
