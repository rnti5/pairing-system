// src/components/Logout.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await auth.signOut();
        navigate("/");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    logout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Logging out...</h2>
      </div>
    </div>
  );
};

export default Logout;
