import Section from "@/components/Section";
import ImageGallery from "../../components/CloudinaryGallery/MyGallery";

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <Section title="Our Gallery" id="our_gallery">
        <ImageGallery />
      </Section>
    </div>
  );
}
