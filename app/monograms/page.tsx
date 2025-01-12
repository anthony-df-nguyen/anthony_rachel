import React from "react";
import Section from "@/components/Section";

const Page = () => {
  return (
    <Section id="monogram" title="Monograms">
      <div className="p-8 flex-wrap flex justify-center items-center gap-16 ">
        <div className="  left-[20%] bg-gray-100 rounded-full w-[11rem] h-[11rem] flex flex-col items-center justify-center">
          <div className="relative fancy text-center text-[5rem]">
            <div className="relative top-[48px] left-[-16px]">R</div>
            <div className="relative top-[-40px] left-[0px]">A</div>
          </div>
        </div>

        <div className="left-[20%] bg-gray-100 rounded-full w-[11rem] h-[11rem] flex flex-col items-center justify-center">
          <div className="relative fancy text-center text-[5rem]">
            <div className="relative top-[44px] left-[-23px]">A</div>
            <div className="relative top-[-40px] left-[5px]">R</div>
          </div>
        </div>
        <div className="left-[20%] bg-gray-100 rounded-full w-[11rem] h-[11rem] flex items-center justify-center">
          <div className="relative fancy text-center text-[4.5rem] flex left-[-12px]">
            <div className="relative">R</div>
            <div className="relative">+</div>
            <div className="relative">A</div>
          </div>
        </div>
        <div className="left-[20%] bg-gray-100 rounded-full w-[11rem] h-[11rem] flex items-center justify-center">
          <div className="relative fancy text-center text-[3.7rem] flex left-[-9px]">
            <div className="relative">R</div>
            <div className="relative">&</div>
            <div className="relative">A</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Page;
