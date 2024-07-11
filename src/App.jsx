import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSignIn from "./student/components/StudentSignIn";
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

import LandingPage from "./LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-signin" element={<StudentSignIn />} />
        <Route path="/student-register" element={<StudentRegistration />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route
          path="/project-recommendation"
          element={<ProjectRecommendation />}
        />
        <Route path="/lecturer-signin" element={<LecturerSignIn />} />
        <Route path="/lecturer-signup" element={<LecturerSignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/files" element={<Files />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
