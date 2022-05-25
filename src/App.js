import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/Auth/RequireAuth";
import RequireAdmin from "./Components/Auth/RequireAdmin";
import ErrorPage from "./Components/Error/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blogs/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddProduct from "./Pages/Dashboard/Advance/AddProduct";
import ManageProducts from "./Pages/Dashboard/Advance/ManageProducts";
import ManageOrders from "./Pages/Dashboard/Advance/ManageOrders";
import MakeAdmin from "./Pages/Dashboard/Advance/MakeAdmin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="*" element={<ErrorPage />} />
        {/* RequireAuth */}
        <Route element={<RequireAuth />}>
          <Route path="/purchase" element={<Purchase />}></Route>
        </Route>
        {/* RequireAdmin */}
        <Route element={<RequireAdmin />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/my-orders" element={<MyOrders />} />
            <Route path="/dashboard/add-review" element={<AddReview />} />
            <Route path="/dashboard/my-profile" element={<MyProfile />} />
            <Route path="/dashboard/add-product" element={<AddProduct />} />
            <Route path="/dashboard/make-admin" element={<MakeAdmin />} />
            <Route path="/dashboard/manage-order" element={<ManageOrders />} />
            <Route
              path="/dashboard/manage-products"
              element={<ManageProducts />}
            />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
