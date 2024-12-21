import React from "react";
import Card from "./Card";

function Cards({ courses }) {
  const allCourses = Array.isArray(courses) ? courses : [];

  return (
    <div className="w-full h-full flex items-center justify-start">
      <div className="w-full h-full flex items-start flex-wrap gap-8 justify-center">
      {allCourses.map((course) => (
        <Card
          key={course.id}
          title={course.title}
          description={course.description}
          like={course.like}
          image={course.image.url}
          alt={course.image.alt}
        />
      ))}
    </div>
    </div>
  );
}

export default Cards;
