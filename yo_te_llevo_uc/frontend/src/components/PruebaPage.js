
import Navbar from "./Navbar.js";
import React, { useEffect, useState } from 'react';


function App() {

  return (
    <div className="bg-grey-600">
      <Navbar />
      <div className=" bg-slate-500 relative w-1/2 h-screen m-8 overflow-hidden">
          <div className="absolute z-30 flex w-full h-full">
            <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
              <h1 className="text-7xl text-white font-bold mx-auto max-w-6xl">
                <span className="bg-gradient-to-r bg-clip-text" >Bienvenido a Yo Te Llevo UC {localStorage.getItem("username")}!</span>
              </h1>
              <h2 className="text-4xl text-white max-w-6xl text-left">
                <span className="bg-gradient-to-r bg-clip-text">La plataforma N1 para organizar tus turnos a la universidad</span>
              </h2>
            </div>
          </div>
        </div>
      <section className="w-1/2 right-0 h-screen bg-hero bg-cover bg-center">
      </section>

        

        

        

        




      </div>
  );
}

export default App;
