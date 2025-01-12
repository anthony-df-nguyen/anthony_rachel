import HeroImage from "@/components/Hero/Hero";
import HeroSlideshow from "@/components/Hero/HeroSlidershow";
import Section from "@/components/Section";
import Header from "@/components/Navigation/Header";

export default function SaveTheDate() {
  return (
    <div>
      {/* <HeroSlideshow /> */}
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
          Save the Date
        </div>
        <a className="button mt-6" href="https://www.zola.com/addr/G67jbBkDB">
          <button>Fill Out Form</button>
        </a>
      </HeroImage>
      <div className="">
        <Section title="Requesting your information" id="collect">
          <div className="text-center">
            <div className="max-w-xl mx-auto">
              Please provide your updated contact information so we can send
              your invites. If you have trouble finding your name or encounter
              any issues, feel free to call us or &nbsp;
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
                className="body button filled"
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
