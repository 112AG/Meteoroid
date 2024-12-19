import React from "react";

function Filter({ filter = [], onFilterClick }) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4 py-5 font-semibold">
      {filter.map((data) => (
        <button
          key={data.id}
          onClick={() => onFilterClick(data.title)}
          className="text-white bg-gray-600 border-2 border-black hover:bg-black hover:border-gray-800 hover:scale-105 transition ease-in-out rounded py-1 px-4"
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
