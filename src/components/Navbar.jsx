// src/components/Navbar.js

const Navbar = ({ studentName }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">
        Project Pairing System and Management
      </h1>
      <div className="flex items-center">
        <span className="mr-4">Welcome, {studentName}</span>
        <label className="relative cursor-pointer">
          <input type="file" className="hidden" />
          <span className="inline-block w-8 h-8 overflow-hidden bg-gray-400 rounded-full cursor-pointer">
            <svg
              className="w-full h-full text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-1 2H6v6h12v-6h-5v2H11v-2zm11-8v16H2V6H1V4h22v2h-1z" />
            </svg>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
