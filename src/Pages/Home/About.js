import React from "react";
import image from "../../Assets/Images/about.jpg";

const About = () => {
  const about = image;
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={about} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">About Our Company!</h1>
          <p class="py-6">
            Dream big with get more inspiring solutions from here. Research &
            Analysis Lorem ipsum, or lipsum as it is sometimes known is dummy
            text used in laying in the century who thought usually begins
            consectetur. Quality Product Lorem ipsum, or lipsum as it is
            sometimes known is dummy text used in laying in the century who
            thought usually begins consectetur.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
