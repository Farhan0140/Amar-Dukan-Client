import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layouts/MainLayout";
import Home from "../pages/Home/home";
import About from "../pages/About";
import Products from "../Products/Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;