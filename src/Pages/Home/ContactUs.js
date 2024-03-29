import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-slate-400 px-10 py-14 ">
      <div className="text-center pb-14 text-white">
        <h1 className="text-4xl font-bold">Stay connected with Us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <button className="btn btn-accent">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
