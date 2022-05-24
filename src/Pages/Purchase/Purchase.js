import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import image from "../../Assets/Images/about.jpg";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [part, setPart] = useState([]);

  useEffect(() => {
    fetch(`service.json/product/${purchaseId}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [purchaseId]);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={part.image} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
