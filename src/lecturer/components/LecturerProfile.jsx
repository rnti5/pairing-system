// src/lecturer/components/LecturerProfile.jsx

import { useState } from "react";
import UserProfile from "../../components/UserProfile";

const LecturerProfile = () => {
  const [avatar, setAvatar] = useState("default-lecturer-avatar-url");
  const [userName] = useState("Lecturer Name");

  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
  };

  return (
    <div>
      <h1>Lecturer Profile</h1>
      <UserProfile
        avatar={avatar}
        onAvatarChange={handleAvatarChange}
        userName={userName}
        role="Lecturer"
      />
    </div>
  );
};

export default LecturerProfile;
