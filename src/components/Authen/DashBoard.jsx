import React from "react";
import { Link } from "react-router-dom";

function DashBoard({ formData }) {
  // console.log(formData);
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col bg-gray-950 ">
            <Link to="/auth" className="text-black bg-white py-1 px-4 border border-gray-500 rounded border-b text-xl"> LogOut</Link>
          


      <h1 className=" text-blue-50 font-bold text-6xl">
        Hello {formData.fullname}
      </h1>
      <h2 className=" text-white font-bold text-4xl border-b my-2 ">
        Welcome to Dashboard
      </h2>
      <p className="font-bold text-blue-50 text-lg text-center">
        Your Email : {formData.email}, <br /> Your Password :{" "}
        {formData.password}
      </p>
    </div>
  );
}

export default DashBoard;
