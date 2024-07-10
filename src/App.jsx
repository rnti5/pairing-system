import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentLogin from "./student/components/StudentLogin";
import StudentRegistration from "./student/components/StudentRegistration";
import StudentDashboard from "./student/components/StudentDashboard";
import ProjectRecommendation from "./student/components/ProjectRecommendation";
import LecturerSignUp from "./lecturer/components/signup";
import LecturerSignIn from "./lecturer//components/signin";
import ForgotPassword from "./lecturer//components/forgotpassword";
import LecturerDashboard from "./lecturer//components/dashboard";
import Projects from "./lecturer//components/projects";
import Files from "./lecturer//components/files";
import Settings from "./lecturer//components/settings";
import Profile from "./lecturer//components/profile";
import HomePage from "./lecturer//components/homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route
          path="/project-recommendation"
          element={<ProjectRecommendation />}
        />
        <Route path="/" element={<LecturerSignIn />} />
        <Route path="/signup" element={<LecturerSignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/files" element={<Files />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
