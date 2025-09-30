import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layouts/MainLayout";
import Shop from "../pages/Shop";
import Home from "../pages/Home/Home";
import UserLogin from "../pages/UserLogin";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../Components/PrivateRoute";
import UserRegistration from "../pages/UserRegistration";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<UserLogin />} />
        <Route path="sign-up" element={<UserRegistration />} />

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