import FinanceCards from "@/components/FinanceCom/FinanceCards";
import { ChartAreaInteractive } from "@/components/FinanceCom/FinanceChart";
import { FinanceCirclechart } from "@/components/FinanceCom/FinanceCirclechart";
import { FinanceExpenses } from "@/components/FinanceCom/FinanceExpenses";
import DashboardTables from "@/components/FinanceCom/FinanceTables";
import Footer from "@/components/Footer";
import { GoChevronRight } from "react-icons/go";
import { useLocation } from "react-router";

const Finance = () => {
  const location = useLocation();

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
        <FinanceCards />
        <ChartAreaInteractive />
        <FinanceExpenses />
        <DashboardTables />
        <FinanceCirclechart />
      </main>
      <Footer />
    </div>
  );
};

export default Finance;
