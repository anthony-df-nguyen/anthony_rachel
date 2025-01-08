// @ts-nocheck
import HeroImage from "@/components/Hero/Hero";
import Schedule from "@/components/Schedule/Schedule";
import Section from "@/components/Section";
import OurStory from "@/components/OurStory";
import NavStrip from "@/components/Navigation/NavStrip";
import CountdownTimer from "@/components/Countdown";
import Header from "@/components/Navigation/Header2"
import ImageContent from "@/components/ImageContent";
import SingleImage from "@/components/SingleImage";
import { images } from "@/components/CloudinaryGallery/constants";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroImage portraitPhotoIndex={2} landscapePhotoIndex={2} justify="center" opacity={.5}>
        <div className="fancy text-white text-center text-6xl drop-shadow-lg">
          Rachel & Anthony
        </div>
        <div className="mt-4 body text-center text-white text-xl drop-shadow-lg">
          September 20 2025
        </div>
        <div className="mt-4 body text-center text-white text-md drop-shadow-lg">
          <CountdownTimer />
        </div>
      </HeroImage>
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
              className="button"
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
