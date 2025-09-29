import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layouts/MainLayout";
import Shop from "../pages/Shop";
import Home from "../pages/Home/Home";
import UserLogin from "../pages/UserLogin";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../Components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<UserLogin />} />

        <Route 
          path="dashboard" 
          element = {
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;