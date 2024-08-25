'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Hero = () => {
  // Array of image paths
  const images = [
    "/images/logs-screenshot.png",
    "/images/metrics-screenshot.png",
    "/images/config-screenshot.png",
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex flex-col lg:flex-row m-12 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full md:before:bg-gradient-radial before:from-[#ebdbb2] before:to-transparent before:blur-2xl after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-[#fabd2f] after:via-[#83a598] after:blur-2xl sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] w-full max-w-7xl md:mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#282828] w-full">
        <div className="max-w-md text-center lg:text-left lg:flex-auto lg:py-16 lg:pl-8 lg:pr-4 border-[#504945] bg-gradient-to-b from-[#3c3836] pt-16 sm:pt-20 lg:pt-16 backdrop-blur-2xl lg:rounded-xl lg:border lg:bg-[#3c3836] lg:p-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#ebdbb2]">
            Simplify managing your Nginx Server
            <br />
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#a89984]">
            No more fiddling with the command line
          </p>
          <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6 lg:justify-start">
            <a
              href="https://github.com/charlesinwald/rustinx-react/releases"
              className="rounded-md bg-[#ebdbb2] px-3 py-2 sm:px-3.5 sm:py-2.5 text-md font-semibold text-[#282828] shadow-sm hover:bg-[#d5c4a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ebdbb2]"
              target="_blank"
            >
              Download for Mac or Linux
            </a>
            <a
              href="https://github.com/charlesinwald/rustinx-react/"
              className="text-md underline underline-offset-4 font-semibold leading-6 text-[#ebdbb2]"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0 lg:ml-8 lg:flex-auto w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-1/2">
          <Image
            className="rounded-md bg-[#282828]/5 ring-1 ring-[#3c3836]/10"
            src={images[currentImageIndex]} // Dynamically set the image source
            alt="App screenshot"
            layout="responsive"
            width="1824"
            height="1080"
          />
        </div>
      </div>
    </div>
  );
};
