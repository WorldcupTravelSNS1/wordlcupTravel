import React from "react";
import "../App.css";
import Cover from "./Cover";
import Destinations from "./Destinations";
import Navbar from "./Navbar/Navbar";
import Service from "./Service";
import ServiceStats from "./ServiceStats";
import Footer from "./Footer";

function Component() {
  return (
    <div className="app">
      <Navbar />
      <Cover />
      <Service />
      <ServiceStats />
      <Destinations />
      <Footer />
    </div>
  );
}

export default Component;
