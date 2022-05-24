import React from "react";
import image from "../../Assets/Images/about.jpg";

const About = () => {
  const about = image;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={about} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">About Our Company!</h1>
          <p className="py-6">
            Dream big with get more inspiring solutions from here. Research &
            Analysis Lorem ipsum, or lipsum as it is sometimes known is dummy
            text used in laying in the century who thought usually begins
            consectetur. Quality Product Lorem ipsum, or lipsum as it is
            sometimes known is dummy text used in laying in the century who
            thought usually begins consectetur.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
