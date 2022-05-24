import React from "react";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="flex m-10 justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="text-center text-2xl font-bold">Login</h1>

          <div class="divider">OR</div>
          <button class="btn btn-outline btn-primary">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
