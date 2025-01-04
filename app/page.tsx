//import Image from "next/image";
//import HeroSlideshow from "@/components/Hero/HeroSlidershow";
import HeroSlideshow from "@/components/Hero/Hero";
import Section from "@/components/Section";
import ImageContent from "@/components/ImageContent";
import NavStrip from "@/components/Navigation/NavStrip";

export default function Home() {
  return (
    <div>
      <HeroSlideshow />
      <div className="container mx-auto">
        <div className="hidden lg:block my-8">
          <NavStrip />
        </div>
        <hr />
        {/* <Section title="Rachel & Anthony Nguyen" id="our_wedding">
          <div className="mt-8 body text-center text-2xl">
            September 20, 2025
          </div>
          <div className="body text-md text-center">
            Orange County, California
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.zola.com/wedding/anthonyandrachelseptember20/rsvp"
              type="button"
              className="rounded-md bg-emerald-600 px-6 py-2 text-xl body font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              RSVP
            </a>
          </div>
        </Section> */}
        <Section title="The Schedule" id="schedule">
          <div className="mt-8 body text-center text-xl">Tea Ceremony | 9 AM</div>
          <div className="mt-0 body text-center text-base">
            @ Rachel&apos;s House
          </div>
          <br />
          <br />
          <div className="body text-center text-xl">The Church | 12 PM</div>
          <div className="mt-0 body text-center text-base underline">
            <a href="https://g.co/kgs/1CXz3Nn">La Purisima Catholic Church</a>
          </div>
          <br />
          <br />
          <div className="body text-center text-xl">The Reception | 6 PM</div>
          <div className="body text-center text-base">RSVP for Details</div>
        </Section>
        <hr />
        <Section title="Our Story" id="our_story">
          <ImageContent />
        </Section>
      </div>
    </div>
  );
}
