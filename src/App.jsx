// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/StudentLogin";
import StudentRegistration from "./components/StudentRegistration";
import StudentDashboard from "./components/StudentDashboard";
// Other page components
import Chat from "./components/Chat";

import Schedule from "./components/Schedule";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
};

export default App;
