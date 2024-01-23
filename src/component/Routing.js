import React from "react";
import { BrowserRouter as Link, Route, Routes } from "react-router-dom";
import MainPage from "./Main/MainPage";
import Details from "./DetailsPage/Details";
import About from "./DetailsPage/About";
import Stats from "./DetailsPage/Stats";
import Moves from "./DetailsPage/Moves";
import Evolution from "./DetailsPage/Evolution";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="details" element={<Details />}>
          <Route path="about" element={<About />} />
          <Route path="stats" element={<Stats />} />
          <Route path="move" element={<Moves />} />
          <Route path="evolution" element={<Evolution />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
