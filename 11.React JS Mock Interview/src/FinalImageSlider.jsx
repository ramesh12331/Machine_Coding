import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { data } from "./constants";

const FinalImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setActiveImageIndex(
      activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(handleNextClick, 4000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <div className="w-screen overflow-hidden">
      <h1 className="text-center text-2xl font-bold my-4">
        Optimize and Map
      </h1>

      {/* Slider */}
      <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[70vh]">

        {/* Images */}
        {data.map((url, i) => (
          <img
            key={url}
            src={url}
            alt="slider"
            className={`absolute inset-0 w-full h-full object-cover
              transition-opacity duration-700 ease-in-out
              ${activeImageIndex === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Prev Button */}
        <button
          onClick={handlePreviousClick}
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            bg-black/40 backdrop-blur-md
            text-white p-3 rounded-full
            hover:bg-black/60 hover:scale-110
            active:scale-95
            transition-all duration-300
          "
        >
          <FiChevronLeft size={28} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            bg-black/40 backdrop-blur-md
            text-white p-3 rounded-full
            hover:bg-black/60 hover:scale-110
            active:scale-95
            transition-all duration-300
          "
        >
          <FiChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default FinalImageSlider;
