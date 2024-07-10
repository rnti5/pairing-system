// src/components/StudentDashboard.js
import { useState } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import ChatBox from "./ChatBox";
import GanttChart from "./GanttChart";
import MeetingScheduler from "./MeetingScheduler";

const StudentDashboard = () => {
  const [student, setStudent] = useState({
    name: "John Doe",
    avatar: "",
    supervisor: "Dr. Smith",
    peers: ["Jane Doe", "Mark Johnson", "Emily Davis"],
  });

  const [showChat, setShowChat] = useState(false);

  const navigate = useNavigate();

  const handleAvatarChange = (e) => {
    // Implement avatar change logic here
    setStudent((prev) => ({
      ...prev,
      avatar: URL.createObjectURL(e.target.files[0]),
    }));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-800 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Project Pairing System and Management
          </h2>
          <nav className="mt-8">
            <ul>
              <li className="mt-4">
                <button
                  className="text-white hover:text-gray-300"
                  onClick={() => setShowChat(true)}
                >
                  Chat
                </button>
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
              <li className="mt-4">
                <Link
                  to="/file-sharing"
                  className="text-white hover:text-gray-300"
                >
                  File Sharing
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="/project-recommendation"
                  className="text-white hover:text-gray-300"
                >
                  Project Recommendation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            onClick={() => navigate("/settings")}
          >
            Settings
          </button>
          <button
            className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-4"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={student.avatar || "default-avatar.png"}
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleAvatarChange}
              />
            </div>
            <span>Welcome, {student.name}</span>
          </div>
        </div>

        <Routes>
          <Route path="/gantt-chart" element={<GanttChart />} />
          <Route path="/schedule" element={<MeetingScheduler />} />
          {/* Add more routes as needed */}
        </Routes>

        <div className="flex justify-end items-end mb-4">
          <div className="w-1/4 bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">
              Supervisor: {student.supervisor}
            </h3>
            <h4 className="text-lg font-medium">Peers:</h4>
            <ul className="list-disc list-inside">
              {student.peers.map((peer, index) => (
                <li key={index}>{peer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showChat && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-1/2">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowChat(false)}
            ></button>
            <ChatBox />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
