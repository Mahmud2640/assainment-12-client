import { useEffect, useState } from "react";

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-earth-04392.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return [orders, setOrders];
};
export default useOrder;
