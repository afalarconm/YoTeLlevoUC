import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage"
import ViajesPage from "./components/ViajesPage"
import RegisterPage from "./components/RegisterPage"
import PruebaPage from "./components/PruebaPage"
import CreateViaje from "./components/CreateViaje"
import Profile from "./components/ProfilePage"
import EditViaje from "./components/EditViaje"
import EditProfile from "./components/EditProfile"
import ViajeDetails from './components/ViajeDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import AuthContextProvider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/Register' element={<RegisterPage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Viajes" element={<ViajesPage/>} />
          <Route path='/Prueba' element={<PruebaPage/>} />
          <Route path='/CreateViaje' element={<CreateViaje/>} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/EditViaje/:id' element={<EditViaje/>} />
          <Route path='/EditProfile' element={<EditProfile/>} />
          <Route path='/ViajeDetails/:id' element={<ViajeDetails/>} />

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
