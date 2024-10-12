
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/Login";
import CreateAccount from "./assets/pages/CreateAccount";
import HomePage from "./assets/pages/HomePage";
import UserProfile from "./assets/pages/UserProfile";
import PageUserOther from "./assets/pages/PageUserOther";
import ProtectedRoute from "./assets/components/Security/ProtectedRoute";
import Logout from "./assets/components/Security/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-other"
          element={
            <ProtectedRoute>
              <PageUserOther />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
