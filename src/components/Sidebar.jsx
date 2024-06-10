// src/components/Sidebar.js

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <nav className="mt-10">
        <Link
          to="/chat"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
        >
          Chat
        </Link>
        <Link
          to="/gantt-chart"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
        >
          Gantt Chart
        </Link>
        <Link
          to="/schedule"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
        >
          Schedule
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
