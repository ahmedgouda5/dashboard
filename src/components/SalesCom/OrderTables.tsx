
const OrderTables = () => {
  return (
    <div className=" text-gray-900 dark:text-white font-sans px-2 rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold text-white mb-4">
        Electronics Delivery
      </h1>

      <p className="text-gray-400 text-sm mb-6">
        Track and manage electronics delivery-only inventory
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-[#2c3144] text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Delivery Date</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#353849] hover:bg-[#2a2f3d]">
              <td className="px-4 py-3">Laptop</td>
              <td className="px-4 py-3">Electronics</td>
              <td className="px-4 py-3">45</td>
              <td className="px-4 py-3 text-green-400 font-semibold">In Stock</td>
              <td className="px-4 py-3">2025-09-01</td>
              <td className="px-4 py-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                  View
                </button>
              </td>
            </tr>
            <tr className="border-b border-[#353849] hover:bg-[#2a2f3d]">
              <td className="px-4 py-3">Smartphone</td>
              <td className="px-4 py-3">Electronics</td>
              <td className="px-4 py-3">12</td>
              <td className="px-4 py-3 text-yellow-400 font-semibold">Low Stock</td>
              <td className="px-4 py-3">2025-09-05</td>
              <td className="px-4 py-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                  View
                </button>
              </td>
            </tr>
            <tr className="hover:bg-[#2a2f3d]">
              <td className="px-4 py-3">Headphones</td>
              <td className="px-4 py-3">Accessories</td>
              <td className="px-4 py-3">0</td>
              <td className="px-4 py-3 text-red-400 font-semibold">Out of Stock</td>
              <td className="px-4 py-3">2025-09-10</td>
              <td className="px-4 py-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTables;
