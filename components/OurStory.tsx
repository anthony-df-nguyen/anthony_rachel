import React from "react";
import Content2Images from "./Content2Images";
import { images as BabyPhotos } from "data/images/baby_photos";
import { images as Gallery } from "data/images/gallery";

type Props = {};

const OurStory2 = (props: Props) => {
  return (
    <div>
      <Content2Images
        title="The Early Years"
        image_1={BabyPhotos["anthony_kid"]}
        image_2={BabyPhotos["rachel_baby"]}
        orientation="left"
      >
        <div className="">
          <p>
            We both grew up in Southern California, just a few cities apart.
            While we didn’t know each other, we were unknowingly
            living parallel lives.
          </p>
          <br />
          <p>
            Anthony grew up in Westminster, CA. He spent most of his
            childhood playing video games, basketball, guitar, watching wrestling, and
            messing about the town with his scooter gang.
          </p>
          <br />
          <p>
            Rachel grew up in Orange, CA. She was always involved in
            school and enjoyed hanging out with her friends.
          </p>
        </div>
      </Content2Images>
    
      <Content2Images
        title="College"
        image_1={BabyPhotos["anthony_graduation"]}
        image_2={BabyPhotos["rachel_college"]}
        orientation="right"
      >
        <p>
          We both went to UC Irvine for college, but studied on opposite sides
          of campus. Rachel studied Biology and Anthony took Economics. Even though we shared lecture halls, libraries, and dining spots, we didn't actually meet until years after we graduated.
        </p>
        <br />
        <p>
          We each made lifelong friends, discovered our passions, and started
          figuring out the kind of life we wanted to build.
        </p>
      </Content2Images>

      <Content2Images
        title="How We Met"
        image_1={Gallery["38-misc"]}
        orientation="left"
      >
        <p>
          We finally met by chance in late 2019 while playing basketball at Settler's Park. It didn’t take long to realize we had a lot in common—mutual friends, shared interests, and an appreciation for basketball.
        </p>
        <br />
        <p>
          From weekend adventures to spending time with family, we’ve grown
          together over the past 5 years. We’re so excited to start this next
          chapter—and can’t wait to celebrate with you.
        </p>
      </Content2Images>
    </div>
  );
};

export default OurStory2;
