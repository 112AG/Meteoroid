import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Filter from "./Filter";
import { useState } from "react";

function CardData() {
  const location = useLocation();
  const { title, description, image, alt, heart } = location.state || {};
    const [change, setChange] = useState(heart);
    let handle = () => {
        setChange(change => !change)
    }
  return (
    <div>
      <Nav />
      <Filter />
      <div className="p-3 flex flex-col items-start">
        <div className="w-full overflow-hidden p-1  rounded hover:shadow-2xl transition ease-in-out">
          <img className="rounded" src={image} alt={alt} />
        </div>
        <div className="p-4 ">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl  font-bold">{title}</h1>
          <div onClick={handle} className="cursor-pointer text-xl flex items-center justify-center bg-gray-200 rounded-full h-11 w-11">
            {change ? (
              <i className="ri-heart-fill text-2xl text-red-500"></i>
            ) : (
              <i className="ri-heart-line text-2xl text-gray-500"></i>
            )}
          </div>
        </div>
        <p className="text-gray-700 pt-2 "><span className="font-semibold text-black">Description : </span>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardData;
