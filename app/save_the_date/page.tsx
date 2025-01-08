import HeroImage from "@/components/Hero/Hero";
import Section from "@/components/Section";
import Header from "@/components/Navigation/Header";

export default function FAQ() {
  return (
    <div>
      <HeroImage portraitPhotoIndex={31} landscapePhotoIndex={9} breakpoint={1200} opacity={0.4} justify="start">
        <div className="fancy text-white text-center text-4xl xl:text-[3rem] drop-shadow-lg">
          Rachel & Anthony
        </div>
        <div className="mt-4 xl:mt-8 fancy text-white text-center text-6xl xl:text-[6rem] drop-shadow-lg">
          Save the Date
        </div>
        <div className="mt-4 xl:mt-8 body text-center text-white font-weight-bold text-2xl xl:text-[2rem] drop-shadow-lg ">
          September 20 2025
        </div>
      </HeroImage>
      <div className="">
        <Section title="Requesting Your Information" id="collect">
          <div className="text-center">
            <div className="max-w-xl mx-auto">
              Please help us provide your updated contact information so that we
              know where to send your invites. If you run into any issues
              finding your name or anything else, please feel free to call or{" "}
              <a
                href="mailto:anthonyrachelnguyen@gmail.com"
                className="underline"
              >
                email us.
              </a>
            </div>
            <div className="mt-12 container mx-auto">
              <a
                href="https://www.zola.com/addr/G67jbBkDB"
                className="body button"
              >
                Fill Out Form
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
