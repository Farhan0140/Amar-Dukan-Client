import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layouts/MainLayout";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;