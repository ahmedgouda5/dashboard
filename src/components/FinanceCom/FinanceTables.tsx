import React from 'react';

interface AccountData {
  user: string;
  avatar: string;
  description: string;
  amount: string;
  timestamp: string;
  status: 'Verified' | 'Pending' | 'Blocked';
}

const DashboardTables = () => {
  const newAccounts: AccountData[] = [
    {
      user: "Dan Adrick",
      avatar: "👤",
      description: "Account setup",
      amount: "$250.00",
      timestamp: "2 hours ago",
      status: "Verified"
    },
    {
      user: "Daniel Olsen",
      avatar: "👤", 
      description: "Initial deposit",
      amount: "$1,200.00",
      timestamp: "4 hours ago",
      status: "Pending"
    },
    {
      user: "Jack Roldan",
      avatar: "👤",
      description: "Profile verification",
      amount: "$0.00",
      timestamp: "6 hours ago",
      status: "Blocked"
    },
    {
      user: "Betty Cox",
      avatar: "👤",
      description: "Account opening",
      amount: "$500.00", 
      timestamp: "1 day ago",
      status: "Verified"
    },
    {
      user: "Carlos Johnson",
      avatar: "👤",
      description: "Document upload",
      amount: "$0.00",
      timestamp: "2 days ago", 
      status: "Pending"
    },
  ];

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 text-xs rounded-full font-medium";

    switch (status) {
      case "Verified":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "Pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "Blocked":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="px-3 py-6">
      <div className="mx-auto">
        <div className="rounded-lg overflow-x-scroll lg:overflow-hidden text-gray-900 dark:text-white shadow-lg bg-white dark:bg-gray-800">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold">New Accounts</h2>
            <button className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="w-full">
            <table className="w-full ">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {newAccounts.map((account, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm">
                            {account.avatar}
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {account.user}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {account.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {account.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {account.timestamp}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadge(account.status)}>
                        {account.status}
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

export default DashboardTables;