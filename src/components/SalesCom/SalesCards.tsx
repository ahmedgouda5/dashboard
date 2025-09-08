import type { FinanceCard } from "@/Utils/Index";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { BsBank2 } from "react-icons/bs";
import { FaAward, FaCartPlus } from "react-icons/fa";
import { SlPresent } from "react-icons/sl";

const Cards: FinanceCard[] = [
  {
    price: 55.6,
    title: "Wallet Balance",
    icon: <FaCartPlus />,
    percentage: 10.3,
  },
  {
    price: 75.09,
    title: "Total Income",
    icon: <LucideSquareArrowOutUpRight />,
    percentage: 7.36,
  },
  {
    price: 62.8,
    title: "Total Expenses",
    icon: <BsBank2 />,
    percentage: -5.62, // Made negative for expenses
  },
  {
    price: 6.4,
    title: "Investments",
    icon: <SlPresent />,
    percentage: 2.53,
  },
  {
    price: 8.2, // Changed duplicate value
    title: "Savings",
    icon: <FaAward />,
    percentage: 3.21,
  },
];

const SalesCards = () => {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value * 1000);
  };

  const getPercentageColor = (percentage: number): string => {
    return percentage >= 0 ? 'bg-green-600/90 text-green-100' : 'bg-red-600/90 text-red-100';
  };

  const getPercentageText = (percentage: number): string => {
    const sign = percentage >= 0 ? '+' : '';
    return `${sign}${percentage}%`;
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {Cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Icon Container */}
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
              {card.icon}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {formatCurrency(card.price)}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                {card.title}
              </p>
            </div>

            {/* Percentage Badge */}
            <div className="mt-4">
              <span 
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getPercentageColor(card.percentage)}`}
              >
                {getPercentageText(card.percentage)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesCards;