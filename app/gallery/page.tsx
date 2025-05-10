import React from "react";
import Section from "@/components/Section";
import { MyImageGallery } from "@/components/ImageGallery";
// import MasonryImageList from "@/components/MaterialUIImageList/ImageList";
//import PicflowEmbed from "@/components/PicTimeGallery/PicflowEmbed";

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <Section title="Our Gallery" id="our_gallery">
        <MyImageGallery />
      </Section>
    </div>
  );
}
