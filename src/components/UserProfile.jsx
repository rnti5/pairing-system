// src/components/UserProfile.jsx

import { useState } from "react";
import PropTypes from "prop-types";

const UserProfile = ({ avatar, onAvatarChange, userName, role }) => {
  const [localAvatar, setLocalAvatar] = useState(avatar);
  const [error, setError] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalAvatar(reader.result);
        onAvatarChange(reader.result);
      };
      reader.onerror = () => {
        setError("Error loading file. Please try again.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <img
          src={localAvatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <label
          htmlFor="avatarUpload"
          className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </label>
        <input
          id="avatarUpload"
          type="file"
          className="hidden"
          onChange={handleAvatarChange}
        />
      </div>
      <span>
        Welcome, {userName} ({role})
      </span>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  onAvatarChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserProfile;
