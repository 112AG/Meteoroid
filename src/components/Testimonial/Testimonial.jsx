import React, { useState } from "react";
import Slider from "./Slider";
import SliderData from "./SliderData";

function Testimonial() {
  const [index, setIndex] = useState(0);

  const allCourses = [];
  Object.values(SliderData.data).forEach((category) => {
    category.forEach((course) => {
      allCourses.push(course);
    });
  });
  // Hamndle Buttons
  let handleLeft = () => {
    if (index - 1 < 0) {
      setIndex(allCourses.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  let handleRight = () => {
    if (index + 1 === allCourses.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  let handleMainButton = () => {
    let idx = Math.floor(Math.random() * allCourses.length);
    setIndex(idx);
  };
  return (
    <div className="sm:h-fit h-screen w-full bg-gray-900 flex flex-col items-center justify-start p-4 text-teal-500">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Selected Guys
      </h1>
      <Slider data={allCourses[index]} />
      <div className="flex flex-col items-center my-3">
        <div className="flex gap-1">
          <button
            onClick={handleLeft}
            className="h-9 w-9 border rounded-full bg-yellow-300 border-red-800 hover:bg-yellow-400"
          >
            <i className="ri-arrow-left-line text-red-600 font-semibold"></i>
          </button>
          <button
            onClick={handleRight}
            className="h-9 w-9 border rounded-full bg-yellow-300 border-red-800 hover:bg-yellow-400"
          >
            <i className="ri-arrow-right-line text-red-600 font-semibold"></i>
          </button>
        </div>
        <button
          onClick={handleMainButton}
          className="py-1 px-2 mt-2 bg-yellow-300 hover:bg-yellow-400 rounded-full border-2 border-red-600 text-red-700 "
        >
          Random Selection
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
