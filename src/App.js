import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Suspense, lazy, useId } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mylayout from './newlayout';

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
     <div>       
         <Mylayout />       
      </div>
    </div>
  );
}

export default App;
