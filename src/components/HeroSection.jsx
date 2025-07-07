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
            className="absolute pb-[85px] lg:pb-10 top-0 left-0 w-full h-full object-cover scale-[1]"
            autoPlay
            muted
            loop
          >
            <source src="video/video4.mp4" />
          </video>

          {/* controls Play/Pause */}
          <div className="absolute bottom-[103px] md:bottom-[85px] left-0 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 z-[15]">
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
          <div className="absolute bottom-[103px] md:bottom-[85px]  right-0 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 z-[15]">
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

        {/* Gradiente overlay — para escurecer a imagem de baixo para cima */}
        <div className="absolute inset-0 bottom-[85px] md:bottom-10 bg-gradient-to-t from-black/85 via-black/5 to-transparent z-0 pointer-events-none" />
        

        {/* Conteúdo centralizado dentro do container */}
        <GlobalContainer>
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div className="absolute bottom-[134px] md:bottom-[93px] z-[1] text-center text-white">
                <h3 className="text-[10px] sm:text-[10px] text-center drop-shadow-lg block md:mb-1 uppercase tracking-[.0625rem] font-[400] leading-[1rem]">
                  Modern classics. Sharp lines. Real confidence.
                </h3>
                <h2 className="md:mb-7 text-xl sm:text-3xl md:text-[2rem] drop-shadow-lg font-[500] leading-10 tracking-wide text-center">
                  Horizon - Your Style, Your Mark
                </h2>
                <h3 className="text-xs sm:text-[10px] lg:text-[15px] text-center italic font-[500] drop-shadow-lg max-w-2xl mx-auto">
                  Every cut shapes your legacy
                </h3>
              </div>
            </div>
          </GlobalContainer>

      </div>
    </section>
  );
}

export default HeroSection;
