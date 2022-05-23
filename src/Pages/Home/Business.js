import React from "react";
import CountUp from "react-countup";

const Business = () => {
  return (
    <div className="px-20 my-10">
      <div class="stats stats-vertical lg:stats-horizontal shadow text-primary text-center">
        <div class="stat px-16">
          <div class="stat-title">Customers</div>
          <div class="stat-value">
            <CountUp end={500} duration={4} />
          </div>
        </div>

        <div class="stat px-20">
          <div class="stat-title">Annual revenue</div>
          <div class="stat-value">
            <CountUp end={800} duration={5} />
          </div>
        </div>

        <div class="stat px-16">
          <div class="stat-title">Country</div>
          <div class="stat-value">
            <CountUp end={400} duration={6} />
          </div>
        </div>

        <div class="stat px-20">
          <div class="stat-title">Total</div>
          <div class="stat-value">
            <CountUp end={1200} duration={7} />
          </div>
        </div>

        <div class="stat px-16">
          <div class="stat-title">Reviews</div>
          <div class="stat-value">
            <CountUp end={700} duration={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
