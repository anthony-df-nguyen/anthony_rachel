import HeroSlideshow from "@/components/Hero/Hero";
import Schedule from "@/components/Schedule/Schedule";
import Section from "@/components/Section";
import OurStory from "@/components/OurStory";
import NavStrip from "@/components/Navigation/NavStrip";
import ImageContent from "@/components/ImageContent";
import SingleImage from "@/components/SingleImage";
import { images } from "@/components/CloudinaryGallery/constants";

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
          {/* <ImageContent
            image={30}
            orientation="left"
            imageHeightClass="py-[12rem] lg:py-[12rem]"
          >
            
          </ImageContent> */}
          <Schedule />
        </Section>
        <hr />
        <Section title="Our Story" id="our_story">
          <OurStory />
        </Section>
      </div>
    </div>
  );
}
