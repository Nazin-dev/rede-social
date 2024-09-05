
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/Login";
import CreateAccount from "./assets/pages/CreateAccount";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />

        
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
