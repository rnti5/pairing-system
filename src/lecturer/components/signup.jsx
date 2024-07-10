// import React, { useState } from 'react';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     referenceNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     primarySkills: '',
//     secondarySkills: '',
//     programmingLanguages: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform validation
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-background rounded shadow-md mt-10">
//       <h2 className="text-2xl text-primary mb-6">Sign Up</h2>

//       <label className="block text-secondary mb-2">Name:</label>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         required
//       />

//       <label className="block text-secondary mb-2">Reference Number:</label>
//       <input
//         type="text"
//         name="referenceNumber"
//         value={formData.referenceNumber}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         required
//       />

//       <label className="block text-secondary mb-2">Email:</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         required
//       />

//       <label className="block text-secondary mb-2">Password:</label>
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         required
//       />

//       <label className="block text-secondary mb-2">Confirm Password:</label>
//       <input
//         type="password"
//         name="confirmPassword"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         required
//       />

//       <label className="block text-secondary mb-2">Primary Skills:</label>
//       <input
//         type="text"
//         name="primarySkills"
//         value={formData.primarySkills}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         placeholder="e.g., Machine Learning, Data Science"
//         required
//       />

//       <label className="block text-secondary mb-2">Secondary Skills:</label>
//       <input
//         type="text"
//         name="secondarySkills"
//         value={formData.secondarySkills}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         placeholder="e.g., AI, Cybersecurity"
//         required
//       />

//       <label className="block text-secondary mb-2">Programming Languages (Optional):</label>
//       <input
//         type="text"
//         name="programmingLanguages"
//         value={formData.programmingLanguages}
//         onChange={handleChange}
//         className="w-full p-2 mb-4 border border-secondary rounded"
//         placeholder="e.g., Python, JavaScript, R"
//       />

//       <button type="submit" className="bg-primary text-white p-2 w-full rounded">Sign Up</button>
//       <p className="mt-4 text-secondary">Already have an account? <a href="/signin" className="text-primary">Sign In</a></p>
//     </form>
//   );
// };

// export default SignUp;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LecturerSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    referenceNumber: "",
    email: "",
    password: "",
    primarySkills: "",
    secondarySkills: "",
    programmingLanguages: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the data and navigate to the dashboard
    navigate("/dashboard", { state: { name: formData.name } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Reference Number
            </label>
            <input
              type="text"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Primary Skills
            </label>
            <input
              type="text"
              name="primarySkills"
              value={formData.primarySkills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Secondary Skills
            </label>
            <input
              type="text"
              name="secondarySkills"
              value={formData.secondarySkills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Programming Languages
            </label>
            <input
              type="text"
              name="programmingLanguages"
              value={formData.programmingLanguages}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LecturerSignUp;
