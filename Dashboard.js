import React, { useState } from "react";
import { FaCar, FaMotorcycle, FaCity, FaExpand } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-lg font-bold flex items-center">
          <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2"></span>
          Parking Admin Dashboard
        </h1>
        <div className="relative">
          <button onClick={() => setShowMenu(!showMenu)}>
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg">
              <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-200">
                <HiOutlineLogout className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
          <div>
            <p className="text-gray-600">Total Parking Slots</p>
            <h2 className="text-2xl font-bold">1000</h2>
          </div>
          <FaCar className="text-gray-400 text-3xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Two-Wheeler Slots</p>
              <h2 className="text-2xl font-bold text-green-600">400</h2>
            </div>
            <FaMotorcycle className="text-green-400 text-3xl" />
          </div>
          <div className="mt-4 w-full h-24 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Four-Wheeler Slots</p>
              <h2 className="text-2xl font-bold text-blue-600">600</h2>
            </div>
            <FaCar className="text-blue-400 text-3xl" />
          </div>
          <div className="mt-4 w-full h-24 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
          <div>
            <p className="text-gray-600">Total Parking Area</p>
            <h2 className="text-2xl font-bold">25000 sq.ft</h2>
          </div>
          <FaExpand className="text-gray-400 text-3xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Total Cities</p>
              <h2 className="text-2xl font-bold">5</h2>
            </div>
            <FaCity className="text-gray-400 text-3xl" />
          </div>
          <button className="mt-2 text-blue-600 hover:underline">
            Show Cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
