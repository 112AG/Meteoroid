import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, data } from "react-router-dom";
import Links from "./Links";
import Lecture from "./components/Lectures/Lecture";
import Quote from './components/Quote/Quote'
import CardData from "./components/Lectures/CardData";
import Testimonial from "./components/Testimonial/Testimonial";
import Form from "./components/Form/Form";
import PageNotFound from "./components/PageNotFound";
import Top from "./components/Authen/Top";
import Login from "./components/Authen/Login";
import SignUp from "./components/Authen/SignUp";
import DashBoard from "./components/Authen/DashBoard";
import { useState } from "react";
import Data from './components/Authen/data.js'
// import PrivateRoute from "./components/Authen/PrivateRoute.jsx";

function App() {
  const [authData, setAuthData] = useState(Data);
  // console.log(authData);
      const [formData, setFormData] = useState({
          fullname: '',
          email: '',
          password: '',
      })
      const [privatePage, setPrivatePage] = useState(false);
      
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/lecture/:id" element={<CardData />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<PageNotFound to="/"  />} />
          <Route path="/auth" element={<Top/>} /> 
          <Route path="/login" element={<Login authData={authData} setPrivatePage={setPrivatePage}/>}/>
          <Route path="/signup" element={<SignUp formData={formData} setFormData={setFormData} setAuthData={setAuthData} authData={authData} />}/>
          <Route path="/dashboard" element={
            // <PrivateRoute privatePage={privatePage}>
              <DashBoard formData={formData}/>
            // </PrivateRoute>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
