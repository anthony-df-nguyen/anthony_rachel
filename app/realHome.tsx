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
          landscapePhotoIndex={4}
          justify="start"
          opacity={0.5}
          breakpoint={768}
        >
          <div className="titles text-center text-white font-extralight text-[1.75rem] xl:text-[2.5rem] 2xl:text-[3rem]  drop-shadow-lg">
            <div className="">09 . 20 . 2025</div>
          </div>
          <div className="mt-2 titles uppercase text-white font-medium text-center text-[2rem] xl:text-[2.75rem] 2xl:text-[4rem] drop-shadow-lg">
            Rachel & Anthony
          </div>
          <div className="relative mt-2 titles text-center text-white text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2.25rem] drop-shadow-lg">
            <CountdownTimer />
          </div>
          <a className="button mt-4" href="https://www.zola.com/wedding/anthonyandrachelseptember20/rsvp">
            <button>RSVP</button>
          </a>
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
