import React from "react";
import { Link } from "react-router-dom";
import images from "../../Assets/Images/error-page.gif";

const ErrorPage = () => {
  const img = images;
  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-red-500">Wrong Place</h1>
          <Link to="/home" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
