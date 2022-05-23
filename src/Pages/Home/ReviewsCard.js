import React from "react";

const ReviewsCard = ({ reviews }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{reviews.comments}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={reviews.image} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{reviews.name}</h4>
            <p className="text-sm text-gray-600">{reviews.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
