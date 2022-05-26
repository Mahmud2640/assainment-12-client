import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import randomUser from "../../images/userIcon.png";

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <p className="text-center font-mono font-bold text-2xl mb-4 text-secondary uppercase mt-14">
        user Profile
      </p>
      <div className="card w-96 bg-base-100 mx-auto border-2 shadow-2xl hover:bg-slate-300 duration-700">
        <figure>
          <img
            className="rounded-full my-5 "
            src={
              user.reloadUserInfo.photoUrl
                ? user.reloadUserInfo.photoUrl
                : randomUser
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-accent btn-sm">EDIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
