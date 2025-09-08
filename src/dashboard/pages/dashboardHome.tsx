import AnalyticCards from "@/components/AnalyticsCom/AnalyticCart";
import { AnalyticCharts } from "@/components/AnalyticsCom/AnalyticCharts";
import WorldMapDashboard from "@/components/AnalyticsCom/AnalyticsMap";
import AnalyticsTables from "@/components/AnalyticsCom/AnalyticsTables";
import Footer from "@/components/Footer";
import { GoChevronRight } from "react-icons/go";

const DashboardHome = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4  my-3">
        <h1 className="text-gray-400">Analytics</h1>
        <div className="flex items-center justify-center text-gray-400 space-x-2">
          <span>Dashboards</span>
          <span className="translate-y-0.5">
            <GoChevronRight />
          </span>
          <span>Analytics</span>
        </div>
      </nav>
      <AnalyticCards />
      <AnalyticCharts />
      <WorldMapDashboard />
      <AnalyticsTables />
      <Footer />
    </div>
  );
};

export default DashboardHome;
