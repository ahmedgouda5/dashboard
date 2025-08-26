import { useState, useEffect } from 'react';
import { ChevronDown, Globe, TrendingUp } from 'lucide-react';

// ================== Types ==================
interface Position {
  x: number;
  y: number;
}

interface CountryData {
  id: string;
  name: string;
  sessions: number;
  sessionsFormatted: string;
  color: string;
  position: Position;
  flag: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: CountryData }[];
  label?: string;
}

// ================== Component ==================
const WorldMapDashboard: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [animateChart, setAnimateChart] = useState<boolean>(false);

  const countryData: CountryData[] = [
    { id: 'usa', name: 'United States', sessions: 659000, sessionsFormatted: '659k', color: '#3b82f6', position: { x: 20, y: 35 }, flag: '🇺🇸' },
    { id: 'russia', name: 'Russia', sessions: 485000, sessionsFormatted: '485k', color: '#10b981', position: { x: 65, y: 25 }, flag: '🇷🇺' },
    { id: 'china', name: 'China', sessions: 355000, sessionsFormatted: '355k', color: '#f59e0b', position: { x: 75, y: 40 }, flag: '🇨🇳' },
    { id: 'canada', name: 'Canada', sessions: 204000, sessionsFormatted: '204k', color: '#22c55e', position: { x: 18, y: 20 }, flag: '🇨🇦' },
    { id: 'brazil', name: 'Brazil', sessions: 109000, sessionsFormatted: '109k', color: '#8b5cf6', position: { x: 30, y: 70 }, flag: '🇧🇷' }
  ];

  const maxSessions = Math.max(...countryData.map(c => c.sessions));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateChart(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-gray-300">
            Sessions: <span className="font-semibold text-white">{data.sessionsFormatted}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" bg-inherit mt-5 shadow-lg ">
      <div className="max-w-7xl mx-auto bg-inherit rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-inherit px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-semibold dark:text-white">Sessions by Country</h1>
            </div>
            <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-lg transition-colors">
              <span>View Data</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 p-6">
          {/* World Map Section */}
          <div className="lg:col-span-2">
            <div className=" rounded-lg p-6 h-96 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <g fill="#4b5563" stroke="#6b7280" strokeWidth="1">
                    <path d="M50 80 Q150 60 250 100 L280 200 Q200 220 120 180 Q40 120 50 80 Z" />
                    <path d="M200 300 Q250 280 300 320 L320 450 Q270 470 240 440 Q180 360 200 300 Z" />
                    <path d="M450 80 Q520 60 580 100 L600 180 Q540 200 480 160 Q430 120 450 80 Z" />
                    <path d="M580 60 Q750 40 900 100 L920 250 Q800 270 650 220 Q560 140 580 60 Z" />
                    <path d="M420 200 Q520 180 600 230 L620 400 Q520 420 460 380 Q400 290 420 200 Z" />
                    <path d="M750 380 Q830 360 900 400 L920 450 Q850 470 780 440 Q730 410 750 380 Z" />
                  </g>
                </svg>
              </div>
              
              {countryData.map((country) => (
                <div
                  key={country.id}
                  className={`absolute w-4 h-4 rounded-full border-2 border-white cursor-pointer transition-all duration-300 hover:scale-150 hover:shadow-lg ${
                    selectedCountry === country.id ? 'scale-150 shadow-lg' : ''
                  }`}
                  style={{
                    left: `${country.position.x}%`,
                    top: `${country.position.y}%`,
                    backgroundColor: country.color,
                    boxShadow: selectedCountry === country.id 
                      ? `0 0 20px ${country.color}` 
                      : `0 0 10px ${country.color}80`
                  }}
                  onMouseEnter={() => setSelectedCountry(country.id)}
                  onMouseLeave={() => setSelectedCountry(null)}
                  title={`${country.name}: ${country.sessionsFormatted} sessions`}
                />
              ))}

              {selectedCountry && (
                <div
                  className="absolute w-8 h-8 rounded-full border-2 animate-ping pointer-events-none"
                  style={{
                    left: `calc(${countryData.find(c => c.id === selectedCountry)?.position.x}% - 8px)`,
                    top: `calc(${countryData.find(c => c.id === selectedCountry)?.position.y}% - 8px)`,
                    borderColor: countryData.find(c => c.id === selectedCountry)?.color
                  }}
                />
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className=" rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-medium dark:text-white text-gray-800">Top Countries</h3>
              </div>
              
              <div className="space-y-3">
                {countryData.map((country, index) => (
                  <div
                    key={country.id}
                    className={`p-3 dark:text-white text-gray-800 rounded-lg transition-all duration-300 cursor-pointer ${
                      selectedCountry === country.id 
                        ? 'transform scale-105' 
                        : ' hover:bg-gray-700'
                    }`}
                    onMouseEnter={() => setSelectedCountry(country.id)}
                    onMouseLeave={() => setSelectedCountry(null)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="font-medium">{country.name}</span>
                      </div>
                      <span className="font-bold">{country.sessionsFormatted}</span>
                    </div>
                    
                    <div className="mt-2">
                      <div className="bg-gray-600 h-2 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: country.color,
                            width: animateChart 
                              ? `${(country.sessions / maxSessions) * 100}%` 
                              : '0%'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WorldMapDashboard;
