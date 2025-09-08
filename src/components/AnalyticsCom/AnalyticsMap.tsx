import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Globe, ChevronDown } from "lucide-react";

// رابط ملف GeoJSON (خريطة العالم)
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// ================== Types ==================
interface GeographyType {
  rsmKey: string;
  properties: {
    name?: string;
    [key: string]: unknown;
  };
}

// ================== Component ==================
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
          <div className="rounded-lg h-96 overflow-hidden">
            <ComposableMap projectionConfig={{ scale: 140 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: GeographyType[] }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() =>
                        setSelectedCountry(geo.properties.name || null)
                      }
                      onMouseLeave={() => setSelectedCountry(null)}
                      style={{
                        default: {
                          fill: "#374151", // gray-700
                          outline: "none",
                        },
                        hover: {
                          fill: "#4B5563", // gray-600
                          outline: "none",
                        },
                        pressed: {
                          fill: "#6B7280", // gray-500
                          outline: "none",
                        },
                      }}
                      className="transition-colors duration-300"
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
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
