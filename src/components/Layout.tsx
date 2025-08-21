import { Outlet } from "react-router";
import DashboardLay from "./dashboardLay";

const Layout = () => {
  return (
    <div>
      <DashboardLay />
      <main className="p-4 md:ml-64 min-h-screen pt-20 dark:bg-gray-800">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
