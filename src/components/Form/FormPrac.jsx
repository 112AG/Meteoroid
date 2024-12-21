import React from "react";
import { useState } from "react";

function FormPrac() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
    visible: false,
    mode: "",
    center: "",
  });

  function handleChange(e) {
    let { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    // if (Object.values(formData).some((value) => !value)) {
    //     alert("Please fill out all fields.");
    //     return;
    //   }
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit} className="m-3 flex flex-col gap-2">
      <input
        onChange={handleChange}
        type="text"
        className="border p-1 bg-gray-100 text-2xl border-black rounded-sm "
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
      />
      <input
        onChange={handleChange}
        type="text"
        className="border p-1 bg-gray-100 text-2xl border-black rounded-sm "
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
      />

      <input
        type="email"
        onChange={handleChange}
        className="border p-1 bg-gray-100 text-2xl border-black rounded-sm "
        placeholder="Enter your email"
        name="email"
        value={formData.email}
      />

      <textarea
        className="border p-1 bg-gray-100 text-2xl border-black rounded-sm "
        placeholder="Feedback...."
        name="feedback"
        onChange={handleChange}
        value={formData.feedback}
      ></textarea>
      <div className="flex gap-1">
        <input
          type="checkbox"
          onChange={handleChange}
          name="visible"
          id="visible"
          checked={formData.visible}
        />
        <label htmlFor="visible">Visible </label>
      </div>

      <div className="flex gap-7">
        <div className="flex gap-2 items-center justify-center">
          <input
            type="radio"
            name="mode"
            onChange={handleChange}
            id="Online-Mode"
            value="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <input
            type="radio"
            name="mode"
            onChange={handleChange}
            id="Offline-Mode"
            value="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </div>
      </div>

      <div>
        <label htmlFor="center">Select your Favourite Car : </label>
        <select name="center" onChange={handleChange} id="center" value={formData.center}>
        <option value="select">Select</option>
          <option value="Prayagraj">Prayagraj</option>
          <option value="Varanasi">Varanasi</option>
          <option value="RadheRadhe">RadheRadhe</option>
        </select>
      </div>

      <button className="py-1 px-3 border-2 w-1/2" >
        Submit
      </button>
    </form>
  );
}

export default FormPrac;
