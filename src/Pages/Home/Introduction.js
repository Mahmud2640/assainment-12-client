import React from "react";
import { Link } from "react-router-dom";
import tools from "../../images/parts.jpeg";

const Introduction = () => {
  return (
    <div>
      {/* middle text */}
      <div className="text-center">
        <h1 className="text-5xl  mt-16 italic border-b-8 border-r-8 rounded-full border-primary inline-block mx-auto pb-4 pr-2 font-bold">
          {" "}
          Welcome to Dell Official Parts!
        </h1>
      </div>
      {/* info with hero */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={tools} className="w-50 rounded-lg " alt="info pic" />
          <div>
            <h1 className="text-4xl font-bold text-secondary">
              Computer Parts Information !
            </h1>
            <p className="py-6 text-justify">
              We have been specializing in Dell Laptop parts and Dell laptop repair services more than 20 years.Dell laptop and tablet parts for consumers, businesses, government agencies, computer repair shops, school districts, and corporate firms. Although we are not affiliated with the Dell Computer Corporation, we have been specializing in Dell Laptop parts and Dell laptop repair services more than 20 years. We offer all Dell parts for your business and individual Dell computer needs and have done so since 2002.Inventory of Dell laptop parts and refurbished Dell laptops so we can replace your Dell computer if it cannot be repaired. Also at this facility, is our Dell notebook recycling center.</p>
            <Link to="/seeAll" className="btn btn-primary">
              SEE ALL PARTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
