import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "../../components/UserProfile";

const StudentDashboard = () => {
  const [student, setStudent] = useState({
    name: "John Doe",
    avatar: "default-avatar.png", // Default avatar URL
    supervisor: "Dr. Smith",
    peers: ["Jane Doe", "Mark Johnson", "Emily Davis"],
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const navigate = useNavigate();

  const handleAvatarChange = (newAvatar) => {
    setStudent((prev) => ({
      ...prev,
      avatar: newAvatar,
    }));
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setChatMessages([
        ...chatMessages,
        { sender: student.name, message: newMessage },
      ]);
      setNewMessage("");
    }
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
                  onClick={() => setIsChatOpen(!isChatOpen)}
                >
                  {isChatOpen ? "Close Chat" : "Open Chat"}
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
            onClick={() => navigate("/logout")}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <UserProfile
            avatar={student.avatar}
            onAvatarChange={handleAvatarChange}
            userName={student.name}
            role="Student"
          />
        </div>

        {/* Floating Chat Window */}
        {isChatOpen && (
          <div className="fixed bottom-0 right-0 m-4 w-96 bg-white border border-gray-300 rounded shadow-lg">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">Chat</h2>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-red-500"
              >
                Close
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <strong>{msg.sender}: </strong>
                  <span>{msg.message}</span>
                </div>
              ))}
            </div>
            <div className="flex p-4 border-t border-gray-200">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-l"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-r"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
