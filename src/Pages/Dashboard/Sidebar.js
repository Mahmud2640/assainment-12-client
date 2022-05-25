import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div class="drawer drawer-mobile bg-slate-200">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content m-5">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          <li>
            <NavLink to="/dashboard/my-orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-product">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/make-admin">Make Admin</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-order">Manage Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-products">Manage Products</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
