"use client";
import React, { useState, ReactElement, JSX } from "react";

type Props = {
  children?: ReactElement | ReactElement[];
  opacity: number;
};

const HeroVideo = ({ children = <></>, opacity = 0.5 }: Props): JSX.Element => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="bg-black relative w-screen h-screen overflow-hidden flex justify-center items-center">
      {/* Background Video Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity }}
      >
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/rachel edited - compressed.mp4" type="video/mp4" />
            {/* Optional: fallback text for unsupported browsers */}
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/mRC4mvJZxrE?autoplay=1&mute=1&loop=1&playlist=mRC4mvJZxrE&controls=0&modestbranding=1&rel=0&showinfo=0"
            title="Fallback YouTube Video"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white text-center">
        {children}
      </div>
    </div>
  );
};

export default HeroVideo;