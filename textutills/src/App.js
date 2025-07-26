import './App.css';
import Alert from './component/Alert.js';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm.js';
import About from './component/About.js';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('white');
  const [modename, setModeName] = useState('Toggle Dark Mode');
  const [alert, setAlert] = useState(null);

  // Alert function
  const showAlert = (type, message) => {
    setAlert({ type: type, message: message });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Toggle Mode
  const toggleMode = () => {
    if (mode === "white") {
      setMode('black');
      setModeName('Toggle Light Mode');
      document.body.style.backgroundColor = "rgba(6, 97, 142, 1)";
      showAlert("success", "Dark mode has been toggled");
    } else {
      setMode('white');
      setModeName('Toggle Dark Mode');
      document.body.style.backgroundColor = "#f5f7fa";
      showAlert("success", "Light mode has been toggled");
    }
  };

  // text color variable
  const txtColor = mode === "white" ? "#1a1a1a" : "white";

  // Props for components
  const propsNav = {
    mode: mode,
    toggleMode: toggleMode,
    modename: modename,
    brandName: "Textutills"
  };

  const propsTxt = {
    mode: mode,
    txtColor: txtColor,
    heading: "Enter text to analyze",
    showAlert: showAlert
  };

  // Set document title with alternating intervals
  useEffect(() => {
    const interval1 = setInterval(() => {
      document.title = "TextUtill is amazing";
    }, 2000);

    const interval2 = setInterval(() => {
      document.title = "Install now";
    }, 1500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar {...propsNav} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm {...propsTxt} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
