import "./App.css";
import { HomePage } from "./components/home/HomePage";
import Login from "./components/login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
