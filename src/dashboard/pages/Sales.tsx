import Footer from "@/components/Footer";
import OrderTables from "@/components/SalesCom/OrderTables";
import SalesCards from "@/components/SalesCom/SalesCards";
import { SalesChart } from "@/components/SalesCom/SalesChart";
import DashboardTables from "@/components/SalesCom/SalesTables";
import { SalesCirclechart } from "@/components/SalesCom/ٍSalesCirclechart";
import { GoChevronRight } from "react-icons/go";

const Sales = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4  my-3">
        <h1 className="text-gray-400 uppercase">
          {location.pathname.split("/").pop()}
        </h1>
        <div className="flex items-center justify-center text-gray-400 space-x-2">
          <span>Dashboards</span>
          <span className="translate-y-0.5">
            <GoChevronRight />
          </span>
          <span>{location.pathname.split("/").pop()}</span>
        </div>
      </nav>
      <main className=" border dark:border-gray-700  rounded-xl p-6 space-y-6 mb-6">
        <SalesCards />
        <SalesChart />
        <SalesCirclechart />
        <DashboardTables />
        <OrderTables />
      </main>
      <Footer />
    </div>
  );
};

export default Sales;
