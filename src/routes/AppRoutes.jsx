import { Route, Routes } from "react-router";
import MainLayout from "../pages/Layouts/MainLayout";
import Shop from "../pages/Shop";
import Home from "../pages/Home/Home";
import UserLogin from "../pages/UserLogin";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../Components/PrivateRoute";
import UserRegistration from "../pages/UserRegistration";
import ActivateAccount from "../Components/Registration/activateAccount";
import DashboardLayout from "../pages/Layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<UserLogin />} />
        <Route path="sign-up" element={<UserRegistration />} />

        <Route path="activate/:uid/:token" element={<ActivateAccount />} />

        <Route path="shop/:id" element={<ProductDetail />} />
      </Route>

      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={ <Dashboard /> } />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;