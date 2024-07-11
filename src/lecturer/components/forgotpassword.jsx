import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-background rounded shadow-md mt-10"
    >
      <h2 className="text-2xl text-primary mb-6">Forgot Password</h2>
      <label className="block text-secondary mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-secondary rounded"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white p-2 w-full rounded"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPassword;
