import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

  const [setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) {
      errors.name = "Full Name is required.";
    }
    if (!/^\d{8}$/.test(formData.studentRefNumber)) {
      errors.referenceNumber =
        "Student Reference Number must be exactly 8 digits.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        formData.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
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
        const res = await axios.post(
          "http://localhost:5000/api/auth/register/lecturer",
          formData
        );

        if (res.data.token) {
          // Save the token and navigate to the dashboard
          localStorage.setItem("token", res.data.token);
          navigate("/student-dashboard");
        } else {
          // Handle registration errors
          console.log(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
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
