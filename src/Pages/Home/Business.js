import React from "react";
import CountUp from "react-countup";

const Business = () => {
  return (
    <div className="px-20 my-10">
      <div className="text-center pb-10">
        <p className="text-xl font-bold text-primary">Business Summary</p>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow text-primary text-center">
        <div className="stat px-16">
          <div className="stat-title">Customers</div>
          <div className="stat-value">
            <CountUp end={500} duration={4} />
          </div>
        </div>

        <div className="stat px-20">
          <div className="stat-title">Annual revenue</div>
          <div className="stat-value">
            <CountUp end={800} duration={5} />
          </div>
        </div>

        <div className="stat px-16">
          <div className="stat-title">Country</div>
          <div className="stat-value">
            <CountUp end={400} duration={6} />
          </div>
        </div>

        <div className="stat px-20">
          <div className="stat-title">Total</div>
          <div className="stat-value">
            <CountUp end={1200} duration={7} />
          </div>
        </div>

        <div className="stat px-16">
          <div className="stat-title">Reviews</div>
          <div className="stat-value">
            <CountUp end={700} duration={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
