import React from "react";
import ImageContent from "@/components/ImageContent";

const OurStory = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ImageContent
        image={14}
        orientation="right"
        imageHeightClass="py-[8rem]  md:py-8 lg:py-[16rem]"
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
          Anthony was born and raised in Westminster, CA. He enjoyed scootering
          around with friends and playing the guitar.
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
        image={4}
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
          of the campus. We each made lifelong friends, discovered our passions,
          and started figuring out the kind of life we wanted to build.{" "}
        </p>
      </ImageContent>
      <br />
      <br />
      <ImageContent
        image={2}
        orientation="right"
        imageHeightClass="py-[8rem]  md:py-8 lg:py-[16rem]"
      >
        <div className="titles text-3xl text-left pb-6 border-b-[1px]">
          How We Met
        </div>
        <br />
        <p>
          {" "}
          We met in playing basketball at Settler’s Park in Irvine, CA. We
          realized that we shared [ ].{" "}
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
