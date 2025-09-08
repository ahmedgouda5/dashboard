import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

// ================== Types ==================
interface Country {
  id: string;
  name: string;
  path: string; // مسار الـ SVG
}

// مثال لبيانات دول (ممكن تزود باقي الدول أو تجيب SVG كامل)
const countries: Country[] = [
  {
    id: "usa",
    name: "United States",
    path: "M50 80 Q150 60 250 100 L280 200 Q200 220 120 180 Q40 120 50 80 Z",
  },
  {
    id: "brazil",
    name: "Brazil",
    path: "M200 300 Q250 280 300 320 L320 450 Q270 470 240 440 Q180 360 200 300 Z",
  },
  {
    id: "china",
    name: "China",
    path: "M580 60 Q750 40 900 100 L920 250 Q800 270 650 220 Q560 140 580 60 Z",
  },
];

const WorldMapDashboard: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="bg-inherit mt-5 shadow-lg">
      <div className="max-w-7xl mx-auto bg-inherit rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-inherit px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-semibold dark:text-white text-gray-800">
                Sessions by Country
              </h1>
            </div>
            <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-lg transition-colors">
              <span>View Data</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* World Map Section */}
        <div className="p-6">
          <div className="rounded-lg h-96 overflow-hidden bg-gray-900 flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              {countries.map((country) => (
                <path
                  key={country.id}
                  d={country.path}
                  fill={selectedCountry === country.name ? "#4B5563" : "#374151"}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                  className="transition-colors duration-300 cursor-pointer"
                  onMouseEnter={() => setSelectedCountry(country.name)}
                  onMouseLeave={() => setSelectedCountry(null)}
                />
              ))}
            </svg>
          </div>

          {/* Tooltip */}
          {selectedCountry && (
            <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg inline-block">
              <p className="font-medium">🌍 {selectedCountry}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldMapDashboard;
