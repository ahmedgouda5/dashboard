const DashboardTables = () => {
  const newAccounts = [
    {
      id: '#US523',
      date: '24 April, 2024',
      user: 'Dan Adrick',
      account: 'Verified',
      username: '@omions',
      avatar: '👤'
    },
    {
      id: '#US652',
      date: '24 April, 2024',
      user: 'Daniel Olsen',
      account: 'Verified',
      username: '@alliates',
      avatar: '👤'
    },
    {
      id: '#US862',
      date: '20 April, 2024',
      user: 'Jack Roldan',
      account: 'Pending',
      username: '@griys',
      avatar: '👤'
    },
    {
      id: '#US756',
      date: '18 April, 2024',
      user: 'Betty Cox',
      account: 'Verified',
      username: '@reffon',
      avatar: '👤'
    },
    {
      id: '#US420',
      date: '18 April, 2024',
      user: 'Carlos Johnson',
      account: 'Blocked',
      username: '@bebo',
      avatar: '👤'
    }
  ];

  const recentTransactions = [
    {
      id: '#10101',
      date: 'Wed Apr 24 2024',
      amount: '$120.55',
      status: 'Cr',
      description: 'Commissions',
      statusColor: 'bg-green-500'
    },
    {
      id: '#10102',
      date: 'Thu Dec 06 2018',
      amount: '$9.68',
      status: 'Cr',
      description: 'Affiliates',
      statusColor: 'bg-green-500'
    },
    {
      id: '#10103',
      date: 'Sat Apr 20 2024',
      amount: '$105.22',
      status: 'Dr',
      description: 'Grocery',
      statusColor: 'bg-red-500'
    },
    {
      id: '#10104',
      date: 'Thu Apr 18 2024',
      amount: '$80.59',
      status: 'Cr',
      description: 'Refunds',
      statusColor: 'bg-green-500'
    },
    {
      id: '#10105',
      date: 'Thu Apr 18 2024',
      amount: '$750.95',
      status: 'Dr',
      description: 'Bill Payments',
      statusColor: 'bg-red-500'
    }
  ];

  const getStatusBadge = (status:string) => {
    const baseClasses = "px-2 py-1 text-xs rounded-full font-medium";
    
    switch (status) {
      case 'Verified':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Blocked':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="  px-3 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        
        {/* New Accounts Table */}
        <div className=" rounded-lg overflow-hidden text-gray-900 dark:text-white shadow-lg">
          <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold ">New Accounts</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="w-full ">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 ">
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Account
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Username
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {newAccounts.map((account, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {account.id}
                    </td>
                    
                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center text-sm">
                            {account.avatar}
                          </div>
                        </div>
                        <div className="ml-1">
                          <div className="text-sm font-medium ">
                            {account.user}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadge(account.account)}>
                        {account.account}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {account.username}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className=" rounded-lg overflow-hidden text-gray-900 dark:text-white shadow-lg">
          <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold ">Recent Transactions</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {recentTransactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {transaction.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${transaction.statusColor} text-white`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {transaction.description}
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
