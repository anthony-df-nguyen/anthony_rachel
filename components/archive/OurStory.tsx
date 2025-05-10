// @ts-nocheck
import React from "react";
import ImageContent from "@/components/archive/ImageContent";
import {images as BabyPhotos} from "data/images/baby_photos";
import {images as Gallery} from "data/images/gallery"

const OurStory = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ImageContent
        image={BabyPhotos[1]}
        orientation="right"
        imageHeightClass="py-[8rem] md:py-8 lg:py-[12rem]"
      >
        <div className="titles text-3xl text-left pb-6 border-b-[1px]">
          Childhood
        </div>
        <br />
        <p>
          {" "}
          We both grew up in Southern California, just a few cities apart. While
          we didn’t know each other back then, we were unknowingly living
          parallel lives.{" "}
        </p>
        <br />
        <p>
          {" "}
          Anthony was born and raised in Westminster, CA. He enjoyed playing videos games, basketball, and scootering around town with his friends.
        </p>
        <br />
        <p>
          {" "}
          Rachel was born and raised in Orange, CA. She was always involved in
          school and started playing basketball in high school.
        </p>
      </ImageContent>
      <br />
      <br />
      <ImageContent
        image={Gallery[1]}
        orientation="left"
        imageHeightClass="py-[8rem]  md:py-8 lg:py-[12rem]"
      >
        <div className="titles text-3xl text-left pb-6 border-b-[1px]">
          College
        </div>
        <br />
        <p>
          {" "}
          We both went to UC Irvine for college, but studied on opposite sides
          of the campus. Although we were there at the same time, we never ran into each other. We each made lifelong friends, discovered our passions,
          and started figuring out the kind of life we wanted to build.
        </p>
      </ImageContent>
      <br />
      <br />
      <ImageContent
        image={Gallery[2]}
        orientation="right"
        imageHeightClass="py-[8rem]  md:py-8 lg:py-[16rem]"
      >
        <div className="titles text-3xl text-left pb-6 border-b-[1px]">
          How We Met
        </div>
        <br />
        <p>
          We met in playing basketball at Settler’s Park in Irvine, CA. We
          realized that we shared common interests, including knowing mutual friends and driving stick. But most importantly, Rachel was very impressed by how good Anthony was at basketball and how fresh his haircut was.
        </p>
        <br />
        <p>
          From weekend adventures to spending time with family, we’ve grown
          together over the past 5 years. We’re so excited to start this next
          chapter—and can’t wait to celebrate with you.
        </p>
      </ImageContent>
    </div>
  );
};

export default OurStory;
