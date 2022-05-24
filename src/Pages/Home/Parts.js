import React, { useEffect, useState } from "react";
import PartsCard from "./PartsCard";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div className="px-12 my-20">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Products
        </h3>
        <h2 className="text-3xl">
          High quality services of construction industries
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.map((part) => (
          <PartsCard key={part._id} part={part}></PartsCard>
        ))}
      </div>
    </div>
  );
};

export default Parts;
