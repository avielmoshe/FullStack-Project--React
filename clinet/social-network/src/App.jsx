import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";

//if user is not signed in redirect to landing Page "/login" else stay in "/"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
