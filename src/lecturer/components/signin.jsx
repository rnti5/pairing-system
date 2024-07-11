// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-background rounded shadow-md mt-10">
//       <h2 className="text-2xl text-primary mb-6">Sign In</h2>
//       <label className="block text-secondary mb-2">Email:</label>
//       <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border border-secondary rounded" required />
//       <label className="block text-secondary mb-2">Password:</label>
//       <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-4 border border-secondary rounded" required />
//       <button type="submit" className="bg-primary text-white p-2 w-full rounded">Sign In</button>
//       <div className="flex justify-between mt-4 text-secondary">
//         <p>Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link></p>
//         <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
//       </div>
//     </form>
//   );
// };

// export default SignIn;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LecturerSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and successful sign-in
    // In a real app, you would handle the authentication process here
    navigate("/lecturer-dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10"
    >
      <h2 className="text-2xl text-blue-600 mb-6">Sign In</h2>
      <label className="block text-gray-700 mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <label className="block text-gray-700 mb-2">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 w-full rounded"
      >
        Sign In
      </button>
      <div className="flex justify-between mt-4 text-gray-700">
        <p>
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
        <Link to="/forgot-password" className="text-blue-600">
          Forgot Password?{" "}
        </Link>
      </div>
    </form>
  );
};

export default LecturerSignIn;
