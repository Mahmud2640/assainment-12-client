import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/Auth/RequireAuth";
import ErrorPage from "./Components/Error/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import About from "./Pages/About/About";
import Blog from "./Pages/Blogs/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/purchase/:productId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
