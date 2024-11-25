import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import LandingPage from "./Pages/LandingPage";
//if user is not signed in redirect to landing Page "/login" else stay in "/"


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LandingPage/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
