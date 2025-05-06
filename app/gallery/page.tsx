import Section from "@/components/Section";
//import {MyImageGallery} from "@/components/ImageGallery";
import PicflowEmbed from "@/components/PicTimeGallery";

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <Section title="Our Gallery" id="our_gallery">
        <PicflowEmbed />
        {/* <MyImageGallery /> */}
      </Section>
    </div>
  );
}
