import React, { useState, useRef, useEffect } from "react";
import GlobalContainer from "./Container";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";

function HeroSection() {
  const [videoClicked, setVideoClicked] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (videoClicked) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoClicked]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = videoMuted;
    }
  }, [videoMuted]);

  const handleVideoPlay = () => {
    setVideoClicked((prev) => !prev);
  };

  const handleVideoMute = () => {
    setVideoMuted((prev) => !prev);
  };

  return (
    <section className="bg-white">
      <div className="relative min-h-screen overflow-hidden">

        {/* Background video */}
        <div>
          {/* Video element */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover scale-[1] pb-[70px] xs:sm:pb-[90px] sm:pb-[60px] md:pb-[80px] lg:pb-[40px]"
            autoPlay
            muted
            loop
          >
            <source src="video/video4.mp4" />
          </video>

          {/* controls Play/Pause */}
          <div className="absolute bottom-[103px] md:bottom-[122px] lg:bottom-[85px] left-0 px-5 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 z-[15]">
            {/* Play/Pause */}
            <button
              onClick={handleVideoPlay}
              className="transition-all duration-200 ease-in-out"
            >
              {videoClicked ? (
                <FaPause className="text-white" />
              ) : (
                <FaPlay className="text-white" />
              )}
            </button>
          </div>

          {/* controls Mute/Unmute */}
          <div className="absolute bottom-[103px] md:bottom-[122px] lg:bottom-[85px] right-0 px-5 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 z-[15]">
            {/* Mute/Unmute */}
            <button
              onClick={handleVideoMute}
              className="transition-all duration-200 ease-in-out"
            >
              {videoMuted ? (
                <BsFillVolumeMuteFill className="text-white size-5" />
              ) : (
                <BsFillVolumeUpFill className="text-white size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bottom-[70px] sm:bottom-[60px] md:bottom-[80px] lg:bottom-[40px] bg-gradient-to-t from-black/85 via-black/5 to-transparent z-0 pointer-events-none" />

        {/* Centered content */}
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="absolute bottom-[130px] sm:bottom-[120px] md:bottom-[125px] lg:bottom-[100px] left-1/2 -translate-x-1/2 z-[1] text-center text-white w-full px-4">
              <h3 className="text-[10px] drop-shadow-lg mb-2 uppercase tracking-[.0625rem] font-light leading-[1rem]">
                Horizon Barber'shop
              </h3>
              <h2 className="mb-4 md:mb-6 text-[32px] drop-shadow-lg font-regular leading-10 tracking-wide">
                Your Style, Your Mark
              </h2>
              <h3 className="text-[14px] italic font-regular drop-shadow-lg max-w-2xl mx-auto mb-4">
                Every cut shapes your legacy
              </h3>

               {/* CTA Button */}
            <button
                href="#"
                className="inline-block px-6 py-2 bg-matte-golden-beige text-white font-medium text-sm rounded-3xl shadow-lg hover:bg-matte-golden-beige/90 transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </GlobalContainer>

      </div>
    </section>
  );
}

export default HeroSection;
