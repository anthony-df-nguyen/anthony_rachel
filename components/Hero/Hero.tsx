"use client";
import React, { ReactElement, JSX } from "react";

type Props = {
  children?: ReactElement | ReactElement[];
  opacity: number;
};

const HeroVideo = ({ children = <></>, opacity = 0.5 }: Props): JSX.Element => {
  return (
    <div className="bg-black relative w-screen h-screen overflow-hidden flex justify-center items-center">
      {/* YouTube video background */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity }}
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/mRC4mvJZxrE?autoplay=1&mute=1&loop=1&playlist=mRC4mvJZxrE&controls=0&modestbranding=1&rel=0&showinfo=0"
          title="YouTube background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-white">
        {children}
      </div>
    </div>
  );
};

export default HeroVideo;