import React from "react";
import salesData from "../data/salesData";

const AdminPage = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Laporan Penjualan */}
      <section className="bg-gray-800 p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sales Report</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-4 py-2">Game</th>
              <th className="px-4 py-2">Sales</th>
              <th className="px-4 py-2">Revenue ($)</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item) => (
              <tr key={item.id} className="border-b border-gray-700">
                <td className="px-4 py-2">{item.game}</td>
                <td className="px-4 py-2">{item.sales}</td>
                <td className="px-4 py-2">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminPage;
