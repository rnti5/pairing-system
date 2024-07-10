import { useState, useEffect } from "react";

const LecturerDashboard = () => {
  const [lecturer, setLecturer] = useState({
    name: "Dr. John Doe",
    picture: "https://via.placeholder.com/150", // Placeholder image URL, replace with actual URL
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    console.log("Dashboard component mounted");
    // Fetch initial chat messages or lecturer info if needed
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setChatMessages([
        ...chatMessages,
        { sender: lecturer.name, message: newMessage },
      ]);
      setNewMessage("");
      console.log("Message sent:", newMessage);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md flex flex-col">
        <div className="flex items-center mb-8">
          <img
            src={lecturer.picture}
            alt="Lecturer"
            className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300"
          />
          <h1 className="text-2xl font-bold text-blue-600">{lecturer.name}</h1>
        </div>
        <nav className="space-y-4">
          <button className="w-full text-left text-gray-700 p-2 rounded hover:bg-blue-100">
            Home
          </button>
          <button className="w-full text-left text-gray-700 p-2 rounded hover:bg-blue-100">
            Settings
          </button>
          <button className="w-full text-left text-gray-700 p-2 rounded hover:bg-blue-100">
            Logout
          </button>
        </nav>
        <button
          className="w-full text-left text-gray-700 p-2 mt-8 rounded hover:bg-blue-100"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? "Close Chat" : "Open Chat"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 flex flex-col">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {/* Add any additional header content here */}
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-full"
            />
          </div>
        </header>
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
        <div className="flex-grow"></div>{" "}
        {/* Filler to push the grid to the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-gray-50 border border-gray-300 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              File Management
            </h2>
            <button className="bg-orange-500 text-white p-2 rounded w-full hover:bg-orange-600">
              Send/Receive Files
            </button>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-300 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Project Suggestions
            </h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Suggest projects here..."
            ></textarea>
            <button className="bg-orange-500 text-white p-2 rounded w-full hover:bg-orange-600">
              Submit
            </button>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-300 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Search</h2>
            <input
              type="text"
              placeholder="Search group names or files..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerDashboard;
