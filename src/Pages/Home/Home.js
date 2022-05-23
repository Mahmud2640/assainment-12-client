import React from "react";
import About from "./About";
import Banner from "./Banner";
import Business from "./Business";
import Contact from "./Contact";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Parts />
      <Business />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
