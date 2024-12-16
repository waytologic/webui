import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Suspense, lazy, useId } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/f737751420.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []); // The empty array means this effect runs only once (on mount)
  
  return (
    <div className="App">
    <h1> <i className="fa-sharp fa-light fa-address-book">&nbsp;</i> hI bHUVAN <br/>
    <i className="fa-sharp fa-light fa-spider-web">&nbsp;</i> Web UI </h1>
    </div>
  );
}

export default App;
