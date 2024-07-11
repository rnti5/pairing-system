// src/components/StudentRegistration.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    studentRefNumber: "",
    email: "",
    skills: "",
    desiredProjectField: "",
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
    if (!formData.fullName) {
      errors.fullName = "Full Name is required.";
    }
    if (!/^\d{8}$/.test(formData.studentRefNumber)) {
      errors.studentRefNumber =
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic here
      console.log(formData);
      // Assuming successful registration, navigate to the dashboard
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Student Registration</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.fullName ? "border-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>
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
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>
            <input
              id="skills"
              name="skills"
              type="text"
              required
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., Python, JavaScript, React"
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.skills ? "border-red-500" : ""
              }`}
            />
            {errors.skills && (
              <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="desiredProjectField"
              className="block text-sm font-medium text-gray-700"
            >
              Desired Project Field
            </label>
            <input
              id="desiredProjectField"
              name="desiredProjectField"
              type="text"
              required
              value={formData.desiredProjectField}
              onChange={handleChange}
              placeholder="e.g., IoT, Machine Learning, AI, Cybersecurity"
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.desiredProjectField ? "border-red-500" : ""
              }`}
            />
            {errors.desiredProjectField && (
              <p className="mt-1 text-sm text-red-600">
                {errors.desiredProjectField}
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
              Register
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:text-indigo-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentRegistration;
