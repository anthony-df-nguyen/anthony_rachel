import React from "react";
import ImageContent from "@/components/ImageContent";

const OurStory = () => {
  return (
    <div>
      <ImageContent
        image={42}
        orientation="left"
        imageHeightClass="py-[4rem]  md:py-8 lg:py-[8rem]"
      >
        <div className="titles text-3xl text-left pb-6 border-b-[1px]">
          He Said
        </div>
        <div className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam iure quas blanditiis nostrum provident autem earum, soluta ratione beatae ut temporibus reprehenderit voluptates laudantium facilis ullam laboriosam aperiam exercitationem!       Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam iure quas blanditiis nostrum provident autem earum, soluta ratione beatae ut temporibus reprehenderit voluptates laudantium facilis ullam laboriosam aperiam exercitationem!      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam iure quas blanditiis nostrum provident autem earum, soluta ratione beatae ut temporibus reprehenderit voluptates laudantium facilis ullam laboriosam aperiam exercitationem!
        </div>
        <div className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam iure quas blanditiis nostrum provident autem earum, soluta ratione beatae ut temporibus reprehenderit voluptates laudantium facilis ullam laboriosam aperiam exercitationem!       Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam iure quas blanditiis nostrum provident autem earum, soluta ratione beatae qut temporibus reprehenderit voluptates laudantium facilis ullam laboriosam aperiam exercitationem!      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam iure quas blanditiis nostrum provident autem earum, soluta ratione beatae ut temporibus reprehenderit voluptates laudantium facilis ullam laboriosam aperiam exercitationem!
        </div>
      </ImageContent>
    </div>
  );
};

export default OurStory;
