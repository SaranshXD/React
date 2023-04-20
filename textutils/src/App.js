import React,{useState} from 'react';

// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import { Router } from 'react-router-dom';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  }from "react-router-dom";

function App() {
 
    const [mode,setMode] = useState("light")
    const [text,setText] = useState("Enable")
    
    const toggleMode = () => {
      console.log("triggered")
      if(mode==="light"){
        setMode("grey")
        document.body.style.backgroundColor = '#1b014e';
        setText("Disable")
      }
      else {
        setMode("light")
        document.body.style.backgroundColor = 'white';
        setText("Enable")


      }
    }


  return (
    
  <> 
  <Router>
    <Navbar title="Saransh"  home="Home " mode={mode} toggleMode = {toggleMode} text={text} />

  
  <Routes>
    <Route path="/home" element={<TextForm head="Enter the text" mode={mode}/>}/>
    <Route path="/about" element={<About/>} />
  </Routes>
 
  {/* //  <Router> */}
     
    {/* <About/> */}
    {/* // </Router> */}
    </Router>
  </>  
  );
}

export default App; 
