import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import Blog from "./Pages/Blogs/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/home" element = {<Home />}></Route>
        <Route path = "/blogs" element = {<Blog />}></Route>
        <Route path = "/login" element = {<Login />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
