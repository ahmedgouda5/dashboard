import AnalyticCards from "@/components/AnalyticCart";
import { AnalyticCharts } from "@/components/AnalyticCharts";
import WorldMapDashboard from "@/components/AnalyticsMap";
import { GoChevronRight } from "react-icons/go";

const DashboardHome = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4  my-3">
        <h1 className="text-gray-400">Analytics</h1>
        <div className="flex items-center justify-center text-gray-400 space-x-2">
          <span>Dashboards</span>
          <span className="translate-y-0.5"><GoChevronRight /></span>
          <span>Analytics</span>
        </div>
      </nav>
      <AnalyticCards />
      <AnalyticCharts />
   <WorldMapDashboard/>
      <footer className="flex justify-center mt-10">
        <p className="text-gray-400">2025 © Reback. Crafted with ❤️ by Gouda</p>
      </footer>
    </div>
  );
};

export default DashboardHome;


