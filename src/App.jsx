
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/Login";
import CreateAccount from "./assets/pages/CreateAccount";
import HomePage from "./assets/pages/HomePage";
import UserProfile from "./assets/pages/UserProfile";
import PageUserOther from "./assets/pages/PageUserOther";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-other" element={<PageUserOther/>} />
      </Routes>
    </Router>
  );
}

export default App;
