import React from "react";
import Footer from "../Share/Footer/Footer";
import ContactUs from "./ContactUs";
import Introduction from "./Introduction";
import Parts from "./Parts";
import Review from "./Review";
import Slider from "./Slider";
import Stat from "./Stat";

const Home = () => {
  return (
    <div className="">
      <Slider />
      <Introduction />
      <Parts />
      <Review />
      <Stat />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
