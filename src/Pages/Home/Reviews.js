import React from "react";
import image from "../../Assets/Images/service-1.png";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const review = [
    {
      _id: 1,
      name: "Engine",
      comments:
        "Lorem ipsum lipsum as it sometimes known dummy text used in laying the century who thought usually begins csometimes used onsectetur.",
      rating: "5",
      image: image,
    },
    {
      _id: 2,
      name: "Engine",
      comments: "Lorem ipsum lipsum as it sometimes known dummy text used in laying the century who thought usually begins csometimes used onsectetur.",
      rating: "4",
      image: image,
    },
    {
      _id: 3,
      name: "Engine",
      comments: "Lorem ipsum lipsum as it sometimes known dummy text used in laying the century who thought usually begins csometimes used onsectetur.",
      rating: "10",
      image: image,
    },
  ];
  return (
    <div className="px-12 my-20">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Customer Reviews
        </h3>
        <h2 className="text-3xl">Our valuable Customer Reviews</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {review.map((reviews) => (
          <ReviewsCard key={reviews._id} reviews={reviews}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
