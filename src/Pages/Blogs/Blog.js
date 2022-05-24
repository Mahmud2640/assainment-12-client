import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Ans To the Qus</h1>
      <div class="stack flex justify-center items-center px-12 m-10">
        <div class="card shadow-md bg-base-200 text-black-content">
          <div class="card-body">
            <h2 class="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <ol>
              <li>Keeping component state local where necessary.</li>
              <li>
                Memoizing React components to prevent unnecessary re-renders.
              </li>
              <li>
                Code-splitting in React using dynamic import() Windowing or list
                virtualization in React.
              </li>
              <li>Lazy loading images in React.</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="stack flex justify-center items-center px-12 m-10">
        <div class="card shadow-md bg-base-200 text-black-content">
          <div class="card-body">
            <h2 class="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              There are four main types of state you need to properly manage in
              your React apps:
              <ol>
                <li>Local state.</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL</li>
              </ol>
              state.
            </p>
          </div>
        </div>
      </div>

      <div class="stack flex justify-center items-center px-12 m-10">
        <div class="card shadow-md bg-base-200 text-black-content">
          <div class="card-body">
            <h2 class="card-title">How does prototypical inheritance work?</h2>
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as Prototype. The Prototypal Inheritance
              is a feature in javascript used to add methods and properties in
              objects. It is a method by which an object can inherit the
              properties and methods of another object. Traditionally, in order
              to get and set the Prototype of an object, we use
              Object.getPrototypeOf and Object.setPrototypeOf.
            </p>
          </div>
        </div>
      </div>

      <div class="stack flex justify-center items-center px-12 m-10">
        <div class="card shadow-md bg-base-200 text-black-content">
          <div class="card-body">
            <h2 class="card-title">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h2>
            <p>
              If you update it directly, calling the setState() afterward may
              just replace the update you made. When you directly update the
              state, it does not change this.state immediately. Instead, it
              creates a pending state transition, and accessing it after calling
              this method will only return the present value. You will lose
              control of the state across all components.
            </p>
          </div>
        </div>
      </div>

      <div class="stack flex justify-center items-center px-12 m-10">
        <div class="card shadow-md bg-base-200 text-black-content">
          <div class="card-body">
            <h2 class="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              Unit testing is a testing method that tests an individual software
              unit in isolation. This involves verifying the output of a
              function or component for a given input. For React components,
              this could mean checking that the component renders correctly for
              the specified props.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
