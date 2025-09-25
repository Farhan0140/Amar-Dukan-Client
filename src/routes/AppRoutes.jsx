import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layouts/MainLayout";
import Shop from "../pages/Shop";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;