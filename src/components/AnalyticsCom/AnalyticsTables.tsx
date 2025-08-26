import { PiDotsThreeCircleVerticalDuotone } from "react-icons/pi";

const browsers = [
  { name: "Chrome", percentage: 60, visitors: 5.06 },
  { name: "Firefox", percentage: 25, visitors: 2.5 },
  { name: "Safari", percentage: 10, visitors: 1.0 },
  { name: "Brave", percentage: 5, visitors: 0.5 },
  { name: "Opera", percentage: 5, visitors: 0.5 },
  { name: "Falkon", percentage: 5, visitors: 0.5 },
  { name: "IE", percentage: 5, visitors: 0.5 },
  { name: "Others", percentage: 5, visitors: 3.5 },
];

const pageData = [
  { path: "/", pageViews: 1000, avgTime: "2m 30s", exitRate: "20%" },
  { path: "/about", pageViews: 500, avgTime: "1m 15s", exitRate: "10%" },
  { path: "/contact", pageViews: 300, avgTime: "45s", exitRate: "5%" },
  { path: "/products", pageViews: 800, avgTime: "3m 10s", exitRate: "15%" },
  { path: "/blog", pageViews: 650, avgTime: "4m 20s", exitRate: "25%" },
];

const AnalyticsTables = () => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-1 shadow-2xl rounded-2xl p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Session By Browser
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <PiDotsThreeCircleVerticalDuotone />
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 dark:text-gray-100">
                    Browser
                  </th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 dark:text-gray-100">
                    %
                  </th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 dark:text-gray-100">
                    Visitors
                  </th>
                </tr>
              </thead>
              <tbody>
                {browsers.map((browser, index) => (
                  <tr
                    key={browser.name}
                    className={`${
                      index !== browsers.length - 1
                        ? "border-b border-gray-100 dark:border-gray-700"
                        : ""
                    } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
                  >
                    <td className="py-3 px-3 text-gray-900 dark:text-gray-100 capitalize">
                      {browser.name}
                    </td>
                    <td className="py-3 px-3 text-gray-600 dark:text-gray-300">
                      {browser.percentage}%
                    </td>
                    <td className="py-3 px-3 text-gray-600 dark:text-gray-300">
                      {browser.visitors}M
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-2 shadow-2xl rounded-2xl p-4">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Pages
            </h3>
            <p className="text-sm text-blue-500 cursor-pointer hover:underline">
              View All
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Page Path
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Page Views
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Avg Time
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Exit Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {pageData.map((page, index) => (
                  <tr
                    key={page.path}
                    className={`${
                      index !== pageData.length - 1
                        ? "border-b border-gray-100 dark:border-gray-700"
                        : ""
                    } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
                  >
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100 font-mono text-sm">
                      {page.path}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                      {page.pageViews.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                      {page.avgTime}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          parseFloat(page.exitRate) > 20
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : parseFloat(page.exitRate) > 10
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {page.exitRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnalyticsTables;
