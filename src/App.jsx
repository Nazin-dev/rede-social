import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./assets/pages/Login";
import CreateAccount from "./assets/pages/CreateAccount";
import HomePage from "./assets/pages/HomePage";
import UserProfile from "./assets/pages/UserProfile";
import PageUserOther from "./assets/pages/PageUserOther";
import EmailVerification from "./assets/pages/PasswordRecoveryPage/EmailVerification";
import VerificationCode from "./assets/pages/PasswordRecoveryPage/VerificationCode";
import NewPassword from "./assets/pages/PasswordRecoveryPage/NewPassword";
import ProtectedRoute from "./assets/components/Security/ProtectedRoute";
import RedirectToHomeIfAuthenticated from "./assets/components/Security/RedirectToHomeIfAuthenticated";
import Logout from "./assets/components/Security/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <RedirectToHomeIfAuthenticated />
            <Login />
          </>
          }
        />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/email-recovery" element={<EmailVerification/>} />
        <Route path="/verification-code" element={<VerificationCode/>} />
        <Route path="/new-password" element={<NewPassword/>} />
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
          path="/user-other/:id"
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
