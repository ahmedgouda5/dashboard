import { TrendingUp } from "lucide-react";
import { IoEyeOutline } from "react-icons/io5";
import { PiCursorClickFill } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import type { JSX } from "react";

const AnalyticCards = () => {

interface CardData {
  title: string;
  value: string | number;
  icon: JSX.Element; 
}

const cards: CardData[] = [
  {
    title: "Page View",
    value: 13647,
    icon: <IoEyeOutline  className="w-6 h-6 text-blue-500 " />,
  },
  {
    title: "Clicks",
    value: 9526,
    icon: <PiCursorClickFill className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Conversions",
    value: "65.2%",
    icon: <TrendingUp className="w-6 h-6 text-red-500" />,
  },
  {
    title: "New Users",
    value: "9.5k",
    icon: <FaRegUserCircle className="w-6 h-6 text-yellow-500" />,
  },
];


  return (
    <div className="grid grid-cols-2 gap-10  ">

      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-between   rounded-xl p-5 shadow-lg border border-gray-100 max-w-full"
        >
          <div className="inline-flex items-center justify-center w-12 h-12  rounded-lg mb-4">
           {card.icon}
          </div>

          <div className="space-y-1 flex flex-col items-center">
            <p className="text-sm font-medium text-gray-400">{card.title}</p>
            <p className="text-2xl font- text-gray-900 dark:text-gray-100">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default AnalyticCards;
