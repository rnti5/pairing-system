// src/components/LandingPage.js

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-black text-white p-4 flex justify-between items-center">
        <img src="path/to/your/logo.png" alt="Logo" className="h-10" />
        <nav>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center mt-12">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Project Pairing Apps Portal
        </h1>
        <p className="text-lg mb-8">Please select any of the sections below</p>

        <div className="flex space-x-6">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Students</h2>
            <p className="mb-4">
              Enter this section to access the students&apos; portal.
            </p>
            <Link
              to="/student-signin"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Go &gt;&gt;
            </Link>
          </div>

          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Lecturer</h2>
            <p className="mb-4">This section is exclusively for Lecturers.</p>
            <Link
              to="lecturer-signin"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Go &gt;&gt;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
