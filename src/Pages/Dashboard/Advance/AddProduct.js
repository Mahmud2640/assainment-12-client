import { useForm } from "react-hook-form";
import React from "react";
import fetcher from "../../../Api";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const res = await fetcher.post("service", data);
    console.log(res);
    reset();
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="text-center text-2xl">Add Service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label htmlFor="serviceName" class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                id="serviceName"
                class="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Available</span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>

            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
