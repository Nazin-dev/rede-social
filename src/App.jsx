
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/Login";
import CreateAccount from "./assets/pages/CreateAccount";
import HomePage from "./assets/pages/HomePage";
import UserProfile from "./assets/pages/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
