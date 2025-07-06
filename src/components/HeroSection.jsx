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
          <video
            ref={videoRef}
            className="absolute pb-10 top-0 left-0 w-full h-full object-cover scale-[1]"
            autoPlay
            muted
            loop
          >
            <source src="video/video4.mp4" />
          </video>

          {/* controls Play/Pause */}
          <div className="absolute bottom-20 left-0 px-12 flex items-center justify-between gap-2 z-[15]">
            {/* Play/Pause */}
            <button
              onClick={handleVideoPlay}
              className="transition duration-200"
            >
              {videoClicked ? (
                <FaPause className="text-white" />
              ) : (
                <FaPlay className="text-white" />
              )}
            </button>
          </div>

          {/* controls Mute/Unmute */}
          <div className="absolute bottom-20 right-0 px-12 flex items-center justify-between gap-2 z-[15]">
            {/* Mute/Unmute */}
            <button
              onClick={handleVideoMute}
              className="transition duration-200"
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
        <div className="absolute inset-0 bottom-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0 pointer-events-none" />

        {/* Conteúdo centralizado dentro do container */}
        <div className="relative z-10 flex items-center min-h-screen">
          <GlobalContainer>
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div className="absolute bottom-24 z-[1] text-center text-white">
                <h3 className="text-[10px] sm:text-[10px]text-center block mb-2 uppercase tracking-[.0625rem] font-[400] leading-[1rem]">
                  Precision. Character. Confidence.
                </h3>
                <h2 className="mb-4 text-xl sm:text-3xl md:text-[32px] font-[400] leading-10 tracking-wide text-center">
                  Horizon Barber’shop
                </h2>
                <h3 className="text-xs sm:text-[10px] lg:text-[15px] text-center italic font-[500] max-w-2xl mx-auto">
                  Where your style takes on a new horizon
                </h3>
              </div>
            </div>
          </GlobalContainer>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
