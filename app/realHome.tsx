// @ts-nocheck
import {Header, Footer, NavStrip} from "@/components/Navigation";
import HeroImage from "@/components/Hero/Hero";
import Schedule from "@/components/Schedule/Schedule";
import Section from "@/components/Section";
import OurStory from "@/components/OurStory";
import CountdownTimer from "@/components/Countdown";

export default function Home() {
  return (
    <div className="">
      <Header transparent />
      <div className="absolute top-0 left-0 w-full h-screen">
        <HeroImage
          portraitPhotoIndex={13}
          landscapePhotoIndex={4}
          justify="start"
          opacity={0.5}
          breakpoint={768}
        >
          <div className="titles text-center text-white font-extralight text-[1.75rem] xl:text-[2.5rem] 2xl:text-[3rem]  drop-shadow-lg">
            <div className="">09.20.2025</div>
          </div>
          <div className="mt-2 fancy text-white font-medium text-center tracking-tighter text-[2.75rem] xl:text-[2.75rem] 2xl:text-[4rem] drop-shadow-lg">
            Rachel & Anthony
          </div>
          <div className="relative mt-2 titles text-center text-white text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2.25rem] drop-shadow-lg">
            <CountdownTimer />
          </div>
          <a
            className="button mt-6"
            href="https://www.zola.com/wedding/anthonyandrachelseptember20/rsvp"
          >
            <button>RSVP</button>
          </a>
        </HeroImage>
      </div>
      <div className="h-screen" />
      <div className="container mx-auto mt-[-4rem] lg:mt-[-6rem]">
        <Section title="The Schedule" id="schedule">
          <Schedule />
        </Section>
        <hr />
        <Section title="Our Story" id="our_story">
          <OurStory />
        </Section>
      </div>
      <Footer />
    </div>
  );
}
