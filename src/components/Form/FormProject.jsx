import React, { useState } from "react";

function FormProject() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAdd: "",
    city: "",
    state: "",
    zip: "",
    Comment: false,
    Candidate: false,
    Offers: false,
    mode: "",
    Color: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(data);
    setShowPreview(true);
  }

  function handleChange(e) {
    let { value, name, checked, type } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-700 bg-slate-200 w-full text-center p-1">
        Fill your Form
      </h1>
      {!showPreview ? (
              <form
              className="w-4/5 border border-gray-800 rounded-md px-4 py-2 my-6"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="firstName">First Name : </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="firstName"
                  id="firstName"
                  value={data.firstName}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="lastName">Last Name : </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="lastName"
                  id="lastName"
                  value={data.lastName}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="email">Email Address : </label>
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="email"
                  id="email"
                  value={data.email}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="country">Country : </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="country"
                  id="country"
                  value={data.country}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="streetAdd">Street Address : </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="streetAdd"
                  id="streetAdd"
                  value={data.streetAdd}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="city">City : </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="city"
                  id="city"
                  value={data.city}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="state">State : </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="state"
                  id="state"
                  value={data.state}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="zip">ZIP/Pin Code : </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Please, Enter here"
                  className="py-1 px-4 border rounded"
                  name="zip"
                  id="zip"
                  value={data.zip}
                />
              </div>
      
              <div className="w-full p-4">
                <h2 htmlFor="">Contact By Email : </h2>
                <div className="flex items-center justify-between gap-3 flex-wrap ">
                  <div className="flex gap-2 items-center">
                    <input
                      onChange={handleChange}
                      name="Comment"
                      id="Comment"
                      type="checkbox"
                      checked={data.Comment}
                    />
      
                    <div className="flex flex-col">
                      <label htmlFor="Comment">Comments</label>
                      <p className="text-xs text-gray-700">
                        get notify through email
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      onChange={handleChange}
                      name="Candidate"
                      id="Candidate"
                      type="checkbox"
                      checked={data.Candidate}
                    />
                    <div className="flex flex-col">
                      <label htmlFor="Candidate">Candidates</label>
                      <p className="text-xs text-gray-700">
                        get notify through applies job
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      onChange={handleChange}
                      name="Offers"
                      id="Offers"
                      type="checkbox"
                      checked={data.Offers}
                    />
                    <div className="flex flex-col">
                      <label htmlFor="Offers">Offers</label>
                      <p className="text-xs text-gray-700">
                        get notify through offers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="w-full p-4 ">
                <h2>Push Notify</h2>
                <div className="flex justify-between flex-wrap items-center">
                  <div className="flex gap-2 font-semibold">
                    <input
                      onChange={handleChange}
                      type="radio"
                      value="All News"
                      id="All News"
                      name="mode"
                      checked={data.mode === "All News"}
                    />
                    <label htmlFor="All News">All news</label>
                  </div>
                  <div className="flex gap-2 font-semibold">
                    <input
                      onChange={handleChange}
                      type="radio"
                      id="Important News"
                      value="Important News"
                      name="mode"
                      checked={data.mode === "Important News"}
                    />
                    <label htmlFor="Important News">Important news</label>
                  </div>
                  <div className="flex gap-2 font-semibold">
                    <input
                      onChange={handleChange}
                      type="radio"
                      id="Old News"
                      value="Old News"
                      name="mode"
                      checked={data.mode === "Old News"}
                    />
                    <label htmlFor="Old News">Old news</label>
                  </div>
                </div>
              </div>
      
              <div className="w-full p-4">
                <h2>Select you color :</h2>
                <select
                  name="Color"
                  id="Color"
                  onChange={handleChange}
                  value={data.Color}
                >
                  <option value="select">select</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="violet">Violet</option>
                  <option value="white">White</option>
                </select>
              </div>
      
              <button className="py-1 px-6 bg-gray-200 text-black border-2 border-teal-200 rounded hover:shadow-2xl">Submit</button>
            </form>
      ) : (
        <div className="w-4/5 border border-gray-800 rounded-md px-4 py-2 my-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Preview</h2>
          <div className="flex flex-col gap-2">
            <p>
              <strong>First Name:</strong> {data.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {data.lastName}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Country:</strong> {data.country}
            </p>
            <p>
              <strong>Street Address:</strong> {data.streetAdd}
            </p>
            <p>
              <strong>City:</strong> {data.city}
            </p>
            <p>
              <strong>State:</strong> {data.state}
            </p>
            <p>
              <strong>ZIP/Pin Code:</strong> {data.zip}
            </p>
            <p>
              <strong>Comments:</strong> {data.Comment ? "Yes" : "No"}
            </p>
            <p>
              <strong>Candidates:</strong> {data.Candidate ? "Yes" : "No"}
            </p>
            <p>
              <strong>Offers:</strong> {data.Offers ? "Yes" : "No"}
            </p>
            <p>
              <strong>Push Notify Mode:</strong> {data.mode}
            </p>
            <p>
              <strong>Favorite Color:</strong> {data.Color}
            </p>
          </div>
          <button
            className="mt-4 py-1 px-6 bg-gray-200 text-black border-2 border-teal-200 rounded hover:shadow-2xl"
            onClick={() => setShowPreview(false)}
          >
            Edit Form
          </button>
        </div>
      )}

    </div>
  );
}

export default FormProject;
