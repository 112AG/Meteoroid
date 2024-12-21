import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Links from "./Links";
import Lecture from "./components/Lectures/Lecture";
import Quote from './components/Quote/Quote'
import CardData from "./components/Lectures/CardData";
import Testimonial from "./components/Testimonial/Testimonial";
import Form from "./components/Form/Form";
import PageNotFound from "./components/PageNotFound";

function App() {
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
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
