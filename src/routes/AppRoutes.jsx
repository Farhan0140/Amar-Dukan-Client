import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

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