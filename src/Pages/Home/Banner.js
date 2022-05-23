import React from "react";
import image from "../../Assets/Images/banner-1.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div className="carousel-item relative w-full">
        <img src={image} class="w-full" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
