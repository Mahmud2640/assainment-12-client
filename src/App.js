import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import Order from "./Pages/Dashboard/Order";
import Profile from "./Pages/Dashboard/Profile";
import Review from "./Pages/Dashboard/Review";
import Booking from "./Pages/Home/Booking";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Header from "./Pages/Share/Header/Header";
import NotFound from "./Pages/Share/NotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import SeeAll from "./Pages/Home/SeeAll";
import Blog from "./Pages/Blog/Blog";
import MyPortfolio from "./Pages/My Portfolio/MyPortfolio";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="seeAll" element={<SeeAll />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="makeAdmin" element={<MakeAdmin />}></Route>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route path="manageProducts" element={<ManageProducts />}></Route>
        </Route>
        
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="parts/:id"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/portfolio"
          element={
            <RequireAuth>
              <MyPortfolio />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
