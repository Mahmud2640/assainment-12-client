import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../Assets/Images/about.jpg";

const Purchase = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`service.json/product/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventoryId]);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            <form>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text">Your Address?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text">Your Mobile Number?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text">Your Location?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text">Quantity?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <input type="submit" value="Submit" class="btn btn-primary mt-5" />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
