import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Cards from "./Cards";
import { Data, apiURL } from "./Data";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function Lecture() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    toast(`You are now ${category} section`);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? Object.values(apiURL.data).flat()
      : apiURL.data[selectedCategory] || [];

  return (
    <div className="w-full h-full ">
      <Nav />
      <Filter filter={Data} onFilterClick={handleFilterClick} />
      <Cards courses={filteredCourses} />
      <ToastContainer position="top-right" autoClose={3000} />

    </div>
    
  );
}

export default Lecture;
