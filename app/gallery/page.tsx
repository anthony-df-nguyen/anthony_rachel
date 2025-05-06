import Section from "@/components/Section";
import PicflowEmbed from "@/components/PicTimeGallery/PicflowEmbed";

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <Section title="Our Gallery" id="our_gallery">
        <PicflowEmbed />
      </Section>
    </div>
  );
}
