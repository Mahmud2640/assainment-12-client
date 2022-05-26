import React from "react";
import CountUp from "react-countup";
import svg1 from "../../images/icons8-factory-50.png";
import svg2 from "../../images/icons8-delivery-50.png";
import svg3 from "../../images/icons8-attract-customers-48.png";

const Stat = () => {
  return (
    <div className="my-14 text-center">
      <p className="lg:text-4xl text-1xl shadow-xl font-mono uppercase text-center text-secondary  font-bold my-11 hover:border-r-2 hover:border-b-2 border-green-600 rounded-full duration-200 inline-block p-4">
        Business Summary OF the year
      </p>
      <div className="stats shadow grid lg:grid-cols-3 sm:grid-cols-1 gap-3 text-center mx-8">
        <div className="stat">
          <div className="stat-figure text-primary">
            <img src={svg1} alt="" />
          </div>
          <div className="stat-title">Total Production</div>
          <div className="stat-value text-primary">
            <CountUp delay={5} end={10000} duration={2.75} />
          </div>
          <div className="stat-desc">46% more than last month</div>
        </div>

        <div className="stat ">
          <div className="stat-figure text-secondary">
            <img src={svg2} alt="" />
          </div>
          <div className="stat-title">Successfully Delevery</div>
          <div className="stat-value text-secondary">
            <CountUp delay={5} end={50000} duration={2.75} />
          </div>
          <div className="stat-desc">81% more than last month</div>
        </div>

        <div className="stat ">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={svg3} alt="" />
              </div>
            </div>
          </div>
          <div className="stat-value">
            <CountUp delay={5} end={96} duration={2.75} />%
          </div>
          <div className="stat-title">Coustomer Happiness</div>
          <div className="stat-desc text-secondary">89% Ratting</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
