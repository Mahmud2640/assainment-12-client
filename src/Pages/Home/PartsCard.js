import React from "react";
import { useNavigate } from "react-router-dom";

const PartsCard = ({ part }) => {
  const { _id, name, image, description } = part;
  const navigate = useNavigate();

  const navigateToUpdate = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button
            onClick={() => navigateToUpdate(_id)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
