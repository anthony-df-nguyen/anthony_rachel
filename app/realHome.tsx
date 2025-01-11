// @ts-nocheck
import HeroImage from "@/components/Hero/Hero";
import Schedule from "@/components/Schedule/Schedule";
import Section from "@/components/Section";
import OurStory from "@/components/OurStory";
import NavStrip from "@/components/Navigation/NavStrip";
import CountdownTimer from "@/components/Countdown";
import Header from "@/components/Navigation/Header";
import ImageContent from "@/components/ImageContent";
import SingleImage from "@/components/SingleImage";
import { images } from "@/components/Archive/CloudinaryGallery/constants";

export default function Home() {
  return (
    <div className="">
      <Header transparent />
      <div className="absolute top-0 left-0 w-full h-screen">
        <HeroImage
          portraitPhotoIndex={32}
          landscapePhotoIndex={19}
          justify="start"
          opacity={0.5}
          breakpoint={1300}
        >
          <div className="fancy text-white text-center text-6xl xl:text-7xl drop-shadow-lg">
            We're Getting Married!
          </div>
          <div className="mt-4 body text-center text-white font-semibold text-xl xl:text-4xl  drop-shadow-lg">
            September 20 2025
          </div>
          <div className="mt-4 xl:mt-7 body text-center text-white text-md font-light xl:text-2xl drop-shadow-lg">
            <CountdownTimer />
          </div>
        </HeroImage>
      </div>
      <div className="h-screen" />
      <div className="container mx-auto mt-[-4rem] lg:mt-[-6rem]">
        {/* <div className="hidden lg:block my-8">
          <NavStrip />
        </div> */}
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
