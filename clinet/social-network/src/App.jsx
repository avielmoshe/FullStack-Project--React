import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import LandingPage from "./Pages/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register"
//if user is not signed in redirect to landing Page "/login" else stay in "/"


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/signin" element={<Login/>} />
    <Route path="/signup" element={<Register/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
