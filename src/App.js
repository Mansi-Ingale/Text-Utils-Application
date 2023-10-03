import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1600);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled!!", "success");
      document.body.style.backgroundColor = "#042743";
      setText("Disable Dark Mode");

    } else {
      setMode("light");
      showAlert("Light mode has been enabled!!", "success");
      document.body.style.backgroundColor = "white";
      setText("Enable Dark Mode");


    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutTitle="AboutTextUtils" mode={mode} toggleMode={toggleMode} text={text} />

      <Alert alert={alert} />
      
      <div className="container my-3">

      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
        <Route exact path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      </div>
      </Router>

    </>
  );
}

export default App;
