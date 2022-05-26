import React, { useEffect, useState } from "react";
import randomUser from "../../images/userIcon.png";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-earth-04392.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="">
      <p className="lg:text-4xl text-1xl text-center p-2 ml-4 rounded-lg text-primary font-bold">
        {" "}
        HAPPY CLIENT REVIEW{" "}
      </p>
      <div className="mx-auto grid lg:grid-cols-3 grid-cols-1 gap-8 my-11">
        {reviews.slice(-3).map((review) => (
          <div
            key={review._id}
            className="card w-96 bg-base-100 mx-auto hover:border-r-4 hover:border-t-4 duration-700"
          >
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-purple-700 ring-offset-base-100 ring-offset-2">
                  <img src={review.pic ? review.pic : randomUser} alt="" />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{review.name}</h2>
              <p>{review.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
