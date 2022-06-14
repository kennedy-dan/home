import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import slideone from "../../assets/main-slider-img-1.jpg";
import slidetwo from "../../assets/main-home-slide-2.jpg";
import slidethree from "../../assets/main-home-slide-1.jpg";
import "aos/dist/aos.css";

import Aos from "aos";

const featuredProducts = [slideone, slidetwo, slidethree];

const featuredText = [
  <div className="flex absolute top-0 left-0 z-[1] justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
    <div className="ml-32 transition ease-in delay-750 duration-1000 -translate-x-10 scale-10 ">
      <p className="text-white text-4xl md:text-6xl font-semibold">
        Shop and fun
      </p>
      <p className="text-white text-sm md:text-xl   mt-8">
        Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco ommodo
        consequat.
      </p>
      <button className="py-3 px-4 border-white border-2 mt-8">
        <p className="text-white">view more</p>
      </button>
    </div>
  </div>,
  <div className="flex w-full absolute top-0 left-0 z-[1] justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
    <div className="ml-32 -translate-x-8 md:ml-0 transition ease-in-out delay-150 md:translate-y-1 scale-110 duration-1000">
      <p className="text-white text-3xl  md:text-6xl md:text-center font-semibold">
        All For Your Home
      </p>
      <p className="text-white md:text-xl w-11/12 md:w-full text-sm mt-8 md:text-center">
        Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco ommodo
        consequat. Duis aute irure dolor in.
      </p>
      <div className="flex md:justify-center">
        <button className="py-3 px-7 border-white border-2 mt-8 text-center">
          <p className="text-white">view more</p>
        </button>
      </div>
    </div>
  </div>,
  <div className="flex  w-full absolute top-0 left-0 z-[1] justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
    <div className="ml-32 -translate-x-8 md:ml-0 transition ease-in-out delay-150 md:-translate-y-1 scale-210 duration-1000">
      <p className="text-white text-3xl  md:text-6xl md:text-center font-semibold">
        Kids furniture
      </p>
      <p className="text-white w-11/12 md:w-full text-sm md:text-xl mt-8 md:text-center">
        Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco ommodo
        consequat. Duis aute irure dolor in.
      </p>
      <div className="flex md:justify-center">
        <button className="py-3 px-7 border-white border-2 mt-8 text-center">
          <p className="text-white">view more</p>
        </button>
      </div>
    </div>
  </div>,
];

let count = 0;
let slideInterval;
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 8000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };
  useEffect(() => {
    Aos.init();

    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    count = (count + 1) % featuredText.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    const textLength = featuredText.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    count = (currentIndex + textLength - 1) % textLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>
      <div
        ref={slideRef}
        className="w-full select-none absolute z-[-1] top-[0px] right-[0px]"
      >
        <div className=" aspect-w-16 aspect-h-9">
          <img
            src={featuredProducts[currentIndex]}
            alt=""
            className="h-screen w-screen"
          />
          <p>{featuredText[currentIndex]}</p>
        </div>

        <div className="absolute w-full z-10 top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            onClick={handleOnPrevClick}
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            onClick={handleOnNextClick}
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
