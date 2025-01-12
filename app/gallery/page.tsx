import Section from "@/components/Section";
import {MyImageGallery} from "@/components/ImageGallery";

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <Section title="Our Gallery" id="our_gallery">
        <MyImageGallery />
      </Section>
    </div>
  );
}
