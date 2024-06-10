// src/components/Dashboard.js

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 p-4 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold">
          Project Pairing System and Management
        </h2>
        <nav className="mt-8">
          <ul>
            <li className="mt-4">
              <Link to="/chat" className="text-white hover:text-gray-300">
                Chat
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="/gantt-chart"
                className="text-white hover:text-gray-300"
              >
                Gantt Chart
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/schedule" className="text-white hover:text-gray-300">
                Schedule
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-end">
          <div className="flex items-center space-x-4">
            <span>Welcome, Student Name</span>
            <button className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload Avatar
            </button>
          </div>
        </div>
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
