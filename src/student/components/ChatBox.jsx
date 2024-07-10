// src/components/ChatBox.js

const ChatBox = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Chat</h2>
      <div className="border p-2 h-64 overflow-y-auto">
        Chat content here...
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full mt-2 p-2 border rounded"
      />
    </div>
  );
};

export default ChatBox;
