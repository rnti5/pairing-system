import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [lecturer, setLecturer] = useState({
    name: 'Dr. John Doe',
    picture: 'https://via.placeholder.com/150' // Placeholder image URL, replace with actual URL
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log('Dashboard component mounted');
    // Fetch or initialize student data here
    setStudents([
      { id: 1, name: 'Student One', email: 'student1@example.com' },
      { id: 2, name: 'Student Two', email: 'student2@example.com' },
      { id: 3, name: 'Student Three', email: 'student3@example.com' }
    ]);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md flex flex-col">
        <div className="flex items-center mb-8">
          <img src={lecturer.picture} alt="Lecturer" className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300" />
          <h1 className="text-2xl font-bold text-blue-600">{lecturer.name}</h1>
        </div>
        <nav className="space-y-4">
          <button className="w-full text-left text-gray-700 p-2 rounded hover:bg-blue-100">Home</button>
          <button className="w-full text-left text-gray-700 p-2 rounded hover:bg-blue-100">Settings</button>
          <button className="w-full text-left text-gray-700 p-2 rounded hover:bg-blue-100">Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Supervised Students</h1>
          <div>
            <input
              type="text"
              placeholder="Search students..."
              className="p-2 border border-gray-300 rounded-full"
            />
          </div>
        </header>

        {/* Students List */}
        <div className="p-4 bg-white border border-gray-300 rounded shadow">
          <ul>
            {students.map(student => (
              <li key={student.id} className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold">{student.name}</span>
                    <span className="block text-sm text-gray-600">{student.email}</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Profile
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
