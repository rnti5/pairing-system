import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    studentRefNumber: "",
    email: "",
    password: "",
    skills: "",
    desiredProjectField: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        // Save user data to Firestore
        await addDoc(collection(db, "students"), {
          uid: user.uid,
          fullName: formData.fullName,
          email: formData.email,
          studentRefNumber: formData.studentRefNumber,
          skills: formData.skills,
          desiredProjectField: formData.desiredProjectField,
        });

        navigate("/student-dashboard");
      } catch (error) {
        console.error("Error during registration:", error);
        setErrors({ form: "Failed to register. Please try again." });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Student Registration</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {errors.form && <p className="text-sm text-red-600">{errors.form}</p>}
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
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className={`w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
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
          <Link
            to="/student-signin"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentRegistration;
