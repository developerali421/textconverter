
import './App.css';
import Alert from './component/Alert.js';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm.js';
import About from './component/About.js';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [ mode , setMode] = useState('white');
  const [ modename , setModeName] = useState('Toggle Dark Mode');
  const [alert, setAlert] = useState(null);

  setInterval(() => {
    document.title="TextUtill is amazing"
  }, 2000);

  setInterval(() => {
    document.title="Install now "
  }, 1500);

 

  // Toggle mode function
  const toggleMode = ()=>{
       if(mode==="white"){
        setMode('black');
        setModeName('Toggle Light Mode');
        document.body.style.backgroundColor="rgba(6, 97, 142, 1)";
        showAlert("success", "Dark mode has been toggled");

       
       } else {
        setMode('white');
        setModeName('Toggle Dark Mode');
        document.body.style.backgroundColor="#f5f7fa";
        showAlert("success", "Light mode has been toggled");


       }



  }




  // Alert handler function 

  const showAlert = (type,message)=>{

   setAlert({   type:type,  
               message:message   });

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  };


  // text color variable
const txtColor = mode ==="white"?"#1a1a1a":"white";

  //  TextForm Component props Object 

  const propsNav = {
            mode: mode , toggleMode: toggleMode , modename: modename , brandName:"Textutills"

  };

 const propsTxt={mode : mode , txtColor:txtColor , heading:"Enter text to analyze" , showAlert:showAlert} ;
  return (
    <div className="App">
 <Router>
       
  <Navbar { ...propsNav }/>
   <Alert alert = {alert} />
      <div className='container'>
                <Routes>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
             <TextForm   {...propsTxt }/>
          </Route>
        </Routes>

    
     
      </div>
      </Router> 
    </div>
   
  );
}

export default App;
