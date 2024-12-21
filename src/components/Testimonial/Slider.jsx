import React from "react";
import { useState } from "react";

function Slider({ data }) {
  const [like, setLike] = useState(data.like);
  // console.log(data);
  let handleLike = () => {
    setLike((like) => !like);
  };


  return (
    <div className="max-w-3xl text-white bg-gray-600 md:p-2 p-1 rounded mt-8">
      <div>
        <img
          src={data.image.url}
          alt={data.image.alt}
          className="w-full h-auto rounded"
        />
      </div>
      <div className="sm:text-3xl text-sm font-semibold flex items-center justify-between leading-tight mt-1">
        <h2>{data.title}</h2>
        <div onClick={handleLike}>
          {like ? (
            <i className="ri-heart-fill text-red-500"></i>
          ) : (
            <i className="ri-heart-line"></i>
          )}
        </div>
      </div>
      <p className="leading-tight text-yellow-200 sm:text-2xl text-xs mt-1">
        <span className="font-bold text-yellow-400">Description: </span>
        {data.description}
      </p>
    </div>
  );
}

export default Slider;
