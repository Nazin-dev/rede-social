
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./assets/pages/Login";
import CreateAccount from "./assets/pages/CreateAccount";
import HomePage from "./assets/pages/HomePage";
import UserProfile from "./assets/pages/UserProfile";
import PageUserOther from "./assets/pages/PageUserOther";
import EmailVerification from "./assets/pages/PasswordRecoveryPage/EmailVerification";
import VerificationCode from "./assets/pages/PasswordRecoveryPage/VerificationCode";
import NewPassword from "./assets/pages/PasswordRecoveryPage/NewPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-other" element={<PageUserOther/>} />
        <Route path="/email-recovery" element={<EmailVerification/>} />
        <Route path="/verification-code" element={<VerificationCode/>} />
        <Route path="/new-password" element={<NewPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
