import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import "@stripe/stripe-js"
import QrCado from './components/qrcode/avocado';
import QrMango from "./components/qrcode/mango";
import QrPassion from "./components/qrcode/passion";
import JuicePage from './components/juicepage';
import Cancel from "./components/cancel";
import Login from "./components/login";



function App() {
  const {isAuthenticated}=useAuth0();
  return (
    <div className="App">
     <Router>
        <Routes>
          // <Route index element={!isAuthenticated ? <Login/>: <JuicePage />} />
          <Route index element={<JuicePage />} />
          <Route exact path="/qrcode/avocado" element={<QrCado />} />
          <Route exact path="/qrcode/mango" element={<QrMango />} />
          <Route exact path="/qrcode/passion" element={<QrPassion />} />
          <Route exact path="cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
