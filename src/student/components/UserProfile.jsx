// src/components/UserProfile.js

import PropTypes from "prop-types";

const UserProfile = ({ avatar, onAvatarChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <img
          src={avatar}
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
          onChange={onAvatarChange}
        />
      </div>
      <span>Welcome, Student Name</span>
    </div>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  onAvatarChange: PropTypes.func.isRequired,
};

export default UserProfile;
