import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useOrder from "../../hooks/useOrder";

const Order = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://peaceful-earth-04392.herokuapp.com/orderss?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);
  const [orders, setOrders] = useOrder([]);
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      const url = `https://peaceful-earth-04392.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = orders.filter((o) => o._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <p className="text-2xl lg:text-left text-center text-primary font-thin  pl-4 my-4 uppercase">
        your order list here :
      </p>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th></th>
                <th>product name</th>
                <th>email</th>
                <th>amount</th>
                <th>payment status</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-xs  btn-success uppercase mr-2">
                      payment
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(item._id)}
                      className="btn btn-xs  btn-error uppercase"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
