import React from "react";
import image from "../../Assets/Images/service-1.png";
import PartsCard from "./PartsCard";

const Parts = () => {
  const partsInfo = [
    {
      _id: 1,
      name: "Engine",
      description: "High quality services of construction industries",
      quantity: "1",
      price: "$100",
      image: image,
      available: "100",
    },
    {
      _id: 2,
      name: "Tank",
      description: "High quality services of construction industries",
      quantity: "50",
      price: "$100",
      image: image,
      available: "100",
    },
    {
      _id: 3,
      name: "Wheel",
      description: "High quality services of construction industries",
      quantity: "200",
      price: "$100",
      image: image,
      available: "100",
    },
  ];
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
        {partsInfo.map((parts) => (
          <PartsCard key={parts._id} parts={parts}></PartsCard>
        ))}
      </div>
    </div>
  );
};

export default Parts;
