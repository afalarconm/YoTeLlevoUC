import './App.css';
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        
        <div className="container">
          <h1 className="text-3xl font-bold text-red-600 ">
          Hello world!
          Grupo 23
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
