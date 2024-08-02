import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSignIn from "./student/components/StudentSignIn";
import StudentRegistration from "./student/components/StudentRegistration";
import StudentDashboard from "./student/components/StudentDashboard";

import LecturerRegistration from "./lecturer/components/LecturerRegistration";
import LecturerSignIn from "./lecturer/components/LecturerSignIn";
import ForgotPassword from "./components/ForgotPassword";
import LecturerDashboard from "./lecturer/components/LecturerDashboard";

import LecturerProfile from "./lecturer/components/LecturerProfile";
import Logout from "./components/Logout";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-signin" element={<StudentSignIn />} />
        <Route path="/student-register" element={<StudentRegistration />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/lecturer-signin" element={<LecturerSignIn />} />
        <Route path="/lecturer-signup" element={<LecturerRegistration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/lecturer-profile" element={<LecturerProfile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
