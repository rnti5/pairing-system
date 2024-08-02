// src/student/components/StudentProfile.jsx

import { useState } from "react";
import UserProfile from "../../components/UserProfile";

const StudentProfile = () => {
  const [avatar, setAvatar] = useState("default-student-avatar-url");
  const [userName] = useState("Student Name");

  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
  };

  return (
    <div>
      <h1>Student Profile</h1>
      <UserProfile
        avatar={avatar}
        onAvatarChange={handleAvatarChange}
        userName={userName}
        role="Student"
      />
    </div>
  );
};

export default StudentProfile;
