// Navbar.js
import React, { useState } from "react";
import "../styles/navbar.css";
import useAuth from '../hooks/useAuth';
import { AuthContext } from "../contexts/AuthContext.jsx";


export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const { currentUser } = useAuth();

    const authContext = React.useContext(AuthContext);


    function Logout(){
      authContext.handleUserLogout();

    }

    return (
      <nav className="navigation">
        <a href="/" className="flex items-center px-3">
            <img src="https://www.uc.cl/site/templates/dist/images/logo-uc-wh.svg" className="mr-3 h-6 sm:h-9 fill-black" alt="UC Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Yo Te Llevo UC</span>
        </a>
        <button className="hamburger"
                onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                }}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
          <ul>
            <li>
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="/Login" style={{display: currentUser ? "none": ""}} >Inicia Sesión</a>
            </li>
            <li>
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="/Register" style={{display: currentUser ? "none": ""}}>Registrate</a>
            </li>  
            <li>
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="/" onClick={Logout} style={{display: currentUser ? "": "none"}}>Cerrar Sesión</a>
            </li>   
            <li>
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="/Viajes">Viajes</a>
            </li>
            <li>
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="/Profile" style={{display: currentUser ? "": "none"}}>Mi perfil</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }