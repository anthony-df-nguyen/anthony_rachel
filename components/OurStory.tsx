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
            While we didn’t know each other back then, we were unknowingly
            living parallel lives.
          </p>
          <br />
          <p>
            Anthony was born and raised in Westminster, CA. He spent most of his
            childhood playing video games, basketball, watching wrestling, or
            messing about the town with his scooter gang.
          </p>
          <br />
          <p>
            Rachel was born and raised in Orange, CA. She was always involved in
            school and started playing basketball in high school.
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
          of the campus. While Rachel was studying hard in Biology, Anthony took
          the easy way out and studied Economics. Although they were both there
          at the same time, they never ran into each other until years after
          graduating.
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
          Rachel and Anthony finally met in late 2019 while playing basketball at Settler’s Park in Irvine, CA through chance. We
          realized that we shared common interests, including knowing mutual
          friends and driving stick. But most importantly, Rachel was very
          impressed by how good Anthony was at basketball and how fresh his
          haircut was.
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
