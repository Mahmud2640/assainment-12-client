import React from "react";
import useParts from "../../hooks/useParts";

const ManageProducts = () => {
  const [parts, setParts] = useParts([]);
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Sir, Are you sure ?");
    if (proceed) {
      console.log("deleted", id);
      const url = `https://peaceful-earth-04392.herokuapp.com/parts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = parts.filter((product) => product._id !== id);
            setParts(remaining);
          }
        });
    }
  };

  return (
    <div>
      <p className="text-2xl lg:text-left text-center text-primary font-bold pl-4 my-4 uppercase">
        management showing all product:
      </p>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr>
              <th>s.no</th>
              <th>product name</th>
              <th>in-stock</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td>{p.name}</td>
                <td>{p.available}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeleteProduct(p._id)}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    DELETE
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
