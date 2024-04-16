import React, { useState, useEffect, useRef } from 'react';

function MembersCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContainerRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    // Initialize slide positions
    slidesRef.current.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  }, []);

  const setSlidePosition = () => {
    console.log(currentSlide);
    slidesRef.current.forEach((slide) => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  };

  const goNext = () => {
    if (currentSlide < 3) {
      setCurrentSlide(currentSlide + 1);
      setSlidePosition();
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setSlidePosition();
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative border border-white h-full w-[500px] flex justify-center items-center overflow-hidden">
        <button
          className="absolute left-2 z-10 bg-gray-800 text-white px-2 py-1 rounded-md"
          onClick={goPrev}
          disabled={currentSlide === 0}
        >
          Prev
        </button>
        <div
          className="flex space-x-4 transition-transform duration-500 ease-in-out"
          ref={slideContainerRef}
        >
          {[...Array(4).keys()].map((index) => (
            <div
              key={index}
              ref={(el) => (slidesRef.current[index] = el)}
              className="border border-white rounded-lg h-64 w-36 flex justify-center items-center shrink-0"
            >
              Card {index + 1}
            </div>
          ))}
        </div>
        <button
          className="absolute right-2 z-10 bg-gray-800 text-white px-2 py-1 rounded-md"
          onClick={goNext}
          disabled={currentSlide === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MembersCard;