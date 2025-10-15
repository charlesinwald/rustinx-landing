'use client';
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export const Hero = () => {
  // Array of image paths
  const images = [
    "/images/AccessLogs.png",
    "/images/ControlPanel.png",
    "/images/Config.png",
    "/images/SystemLogs.png",
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setDirection('prev');
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentImageIndex ? 'next' : 'prev');
    setCurrentImageIndex(index);
  }, [currentImageIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    // Set up an interval to change the image every 5 seconds
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  useEffect(() => {
    // Handle escape key to close expanded view
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
        setIsAutoPlaying(true);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isExpanded]);

  return (
    <>
      {/* Expanded/Fullscreen Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-[#1d2021]/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => {
            setIsExpanded(false);
            setIsAutoPlaying(true);
          }}
        >
          <div className="relative w-full max-w-7xl h-[90vh] flex flex-col">
            {/* Close button */}
            <button
              onClick={() => {
                setIsExpanded(false);
                setIsAutoPlaying(true);
              }}
              className="absolute top-4 right-4 bg-[#282828]/80 hover:bg-[#3c3836] text-[#ebdbb2] p-3 rounded-full z-20 transition-colors"
              aria-label="Close expanded view"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main expanded image */}
            <div
              className="relative flex-1 rounded-lg overflow-hidden bg-[#282828] ring-1 ring-[#3c3836]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={`expanded-${currentImageIndex}`}
                src={images[currentImageIndex]}
                alt="Rustinx application interface showing Nginx server monitoring dashboard"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Navigation arrows for expanded view */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#282828]/90 hover:bg-[#3c3836] text-[#ebdbb2] p-3 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#282828]/90 hover:bg-[#3c3836] text-[#ebdbb2] p-3 rounded-full transition-colors"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicator dots for expanded view */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-[#ebdbb2] w-10'
                        : 'bg-[#504945] hover:bg-[#665c54]'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 flex gap-2 justify-center overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  className={`relative flex-shrink-0 w-24 h-16 rounded overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'ring-2 ring-[#ebdbb2] scale-105'
                      : 'ring-1 ring-[#504945] hover:ring-[#665c54] opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
          <div className="mt-6 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 lg:items-start">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#b8bb26]/10 px-2.5 py-0.5 text-xs font-medium text-[#b8bb26] ring-1 ring-inset ring-[#b8bb26]/20">
                Free & Open Source
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-4 sm:gap-x-6 lg:justify-start">
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
        </div>
        <div className="relative mt-8 lg:mt-0 lg:ml-8 lg:flex-auto w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-1/2">
          <div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-md bg-[#282828]/5 ring-1 ring-[#3c3836]/10 group cursor-pointer"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onClick={() => {
              setIsExpanded(true);
              setIsAutoPlaying(false);
            }}
          >
            {/* Main carousel image with animation */}
            <div className="relative w-full h-full">
              <Image
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt="Rustinx application interface showing Nginx server monitoring dashboard"
                fill
                priority
                className={`object-contain ${
                  direction === 'next'
                    ? 'animate-slideInRight'
                    : 'animate-slideInLeft'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#282828]/80 hover:bg-[#3c3836] text-[#ebdbb2] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#282828]/80 hover:bg-[#3c3836] text-[#ebdbb2] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Expand icon */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
                setIsAutoPlaying(false);
              }}
              className="absolute top-2 right-2 bg-[#282828]/80 hover:bg-[#3c3836] text-[#ebdbb2] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Expand image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-[#ebdbb2] w-8'
                      : 'bg-[#504945] hover:bg-[#665c54]'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
