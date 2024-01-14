import "./App.css";
import { HomePage } from "./components/home/HomePage";
import Login from "./components/login/Login.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Registration from "./components/registration/Registration";
import Preview from "./components/preview/Preview.jsx";
import { Header } from "./components/commonComponents";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Preview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
