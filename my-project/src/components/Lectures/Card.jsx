import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Card({ title, description, image, alt, like }) {
  const [heart, setHeart] = useState(like || false);
  const [readmore, setReadmore] = useState(false);
  const [counter, setCounter] = useState(0);

  let info = readmore ? description : `${description.substring(0, 60)}`;
  const handleReadmore = () => {
    setReadmore(!readmore);
  };

  const handleHeart = () => {
    setHeart((prevHeart) => !prevHeart);
    setCounter(heart ? counter - 1 : counter + 1);
    toast(heart ? `${title} : Unliked!` : `${title} : Liked!`);
  };

  return (
    <div className="border border-gray-300 p-5 rounded-lg w-[calc(30% - 32px)] shadow-md">
      <Link to="/cardData" state={{ title, description, image, alt, heart }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-40 object-cover rounded-lg"
        />
      </Link>
      <div className="flex justify-between items-center mt-5">
        <div className="w-full flex flex-col justify-between my-2">
          <h3 className="text-lg font-semibold w-5/6">{title}</h3>
          <div className="text-sm text-gray-600">
            {info}
            <span
              onClick={handleReadmore}
              className="text-blue-500  cursor-pointer"
            >
              {readmore ? "Show Less" : "....Read More"}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div
            onClick={handleHeart}
            className="cursor-pointer text-xl flex items-center justify-center bg-gray-200 rounded-full h-11 w-11"
          >
            {heart ? (
              <i className="ri-heart-fill text-2xl text-red-500"></i>
            ) : (
              <i className="ri-heart-line text-2xl text-gray-500"></i>
            )}
          </div>
          <span>{counter}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
