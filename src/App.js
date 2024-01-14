import "./App.css";
import { HomePage } from "./components/home/HomePage";
import Login from "./components/login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/registration/Registration";
import Preview from "./components/preview/Preview.jsx";
import { Header } from "./components/commonComponents";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
