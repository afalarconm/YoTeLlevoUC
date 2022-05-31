import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from "./components/LandingPage"
import LogedIn from "./components/LogedIn"
import LoginPage from "./components/LoginPage"
import ViajesPage from "./components/ViajesPage"
import RegisterPage from "./components/RegisterPage"
import PruebaPage from "./components/PruebaPage"
import CreateViaje from "./components/CreateViaje"
import { BrowserRouter, Routes, Route } from 'react-router-dom';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path='/Register' element={<RegisterPage/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="/Viajes" element={<ViajesPage/>} />
      <Route path='/LogedIn' element={<LogedIn/>} />
      <Route path='/Prueba' element={<PruebaPage/>} />
      <Route path='/CreateViaje' element={<CreateViaje/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
