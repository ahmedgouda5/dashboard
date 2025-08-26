import type { FinanceCard } from "@/Utils/Index";
import { BsBank2, BsWallet } from "react-icons/bs";
import { GiExpense } from "react-icons/gi";

const Cards: FinanceCard[] = [
  {
    price: 55.6,
    title: "wallet Balance",
    icon: <BsWallet />,
    percentage: 10.3,
  },
  { price: 75.09, title: "Total Income", icon: <BsBank2 />, percentage: 7.36 },
  {
    price: 62.8,
    title: "Total Expenses",
    icon: <GiExpense />,
    percentage: 5.62,
  },
  { price: 6.4, title: "Investments", icon: <GiExpense />, percentage: 2.53 },
];
const FinanceCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        {Cards.map((card, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-400">${card.price}K</h3>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600 font-light">{card.title}</h3>
              <span className="dark:bg-blue-500/40  bg-blue-500/90  p-7 rounded-full">{card.icon}</span>
            </div>
            <span className=" bg-green-800 px-3   rounded-md">{card.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceCards;
