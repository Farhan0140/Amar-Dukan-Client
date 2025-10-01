import SideBar from "../../Components/Dashboard/SideBar";
import NavBar from "../../Components/Dashboard/NavBar";
import { useState } from "react";
import { Outlet } from "react-router";


const DashboardLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
      {/* Mobile drawer checkbox */}
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <NavBar sidebarOpen={sidebarOpen} />

        {/* Main content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <SideBar />
    </div>
    </div>
  );
};

export default DashboardLayout;