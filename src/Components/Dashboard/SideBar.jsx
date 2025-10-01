import { FiBarChart2, FiPackage, FiPlusCircle, FiShoppingCart, FiStar, FiTag, FiUsers } from "react-icons/fi";
import { Link } from "react-router";

const SideBar = () => {

  const MenuItems = [
    {to: "/dashboard", icon: FiBarChart2, title: "Dashboard"},
    {to: "/products", icon: FiPackage, title: "Products"},
    {to: "/products/add", icon: FiPlusCircle, title: "Add Product"},
    {to: "/categories", icon: FiTag, title: "Categories"},
    {to: "/categories/add", icon: FiPlusCircle, title: "Add Category"},
    {to: "/orders", icon: FiShoppingCart, title: "Orders"},
    {to: "/reviews", icon: FiStar, title: "Reviews"},
    {to: "/users", icon: FiUsers, title: "Users"},
  ]

  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="drawer-toggle"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
        {/* Sidebar header */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <FiShoppingCart className="h-6 w-6" />
          <h1 className="text-xl font-bold">Amar Dukan</h1>
        </div>

        {/* Sidebar menu */}
        <ul className="menu menu-md gap-2">
          {
            MenuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="flex items-center">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>

        {/* Sidebar footer */}
        <div className="mt-auto pt-6 text-xs text-base-content/70">
          © 2025 Amar-Dukan Admin
        </div>
      </aside>
    </div>
  );
};

export default SideBar;