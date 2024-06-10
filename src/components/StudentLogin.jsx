import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../auth";

const StudentLogin = () => {
  const [formData, setFormData] = useState({
    studentRefNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!/^\d{8}$/.test(formData.studentRefNumber)) {
      errors.studentRefNumber =
        "Student Reference Number must be exactly 8 digits.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await signIn(
          formData.studentRefNumber + "@example.com",
          formData.password
        );
        navigate("/dashboard");
      } catch (error) {
        setErrors({ form: error.message });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Student Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="studentRefNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Student Reference Number
            </label>
            <input
              id="studentRefNumber"
              name="studentRefNumber"
              type="text"
              required
              value={formData.studentRefNumber}
              onChange={handleChange}
              placeholder="12345678"
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.studentRefNumber ? "border-red-500" : ""
              }`}
            />
            {errors.studentRefNumber && (
              <p className="mt-1 text-sm text-red-600">
                {errors.studentRefNumber}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          {errors.form && (
            <p className="mt-1 text-sm text-red-600">{errors.form}</p>
          )}
        </form>
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
