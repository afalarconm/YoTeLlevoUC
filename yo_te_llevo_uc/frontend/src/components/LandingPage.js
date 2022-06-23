import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js";
import useAuth from '../hooks/useAuth';
import { useState, useEffect } from "react";


function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const { currentUser } = useAuth();

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
    <div className="bg-grey-600">
      <Navbar />
      <div className="flex flex-row h-screen bg-slate-800">

          <div className="w-5/6 h-screen">
            <div className="flex flex-col items-center justify-center h-5/6">
              <br />
              <h1 className="text-7xl text-white font-bold mx-auto max-w-6xl ">
                <span className="text-gradient bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Bienvenido  {user ? user.username  : 'a Yo Te Llevo UC!'} </span>
              </h1>
              <br />
              <h2 className="text-3xl text-white max-w-6xl italic text-center">
                <span className="bg-gradient-to-r bg-clip-text">La plataforma N1 para organizar tus turnos a la universidad</span>
              </h2>
              <br />
              <br />
              <div className="flex justify-center items-center flex-row">
                <button type="button"  onClick={() => navigate("/Login")} 
                className="text-whte-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400 inline-flex items-center" style={{display: currentUser ? "none": ""}}>
                <svg class="svg-icon pr-1" viewBox="0 0 20 20">
                  <path fill="none" d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"></path>
                </svg>
                Iniciar sesión
                </button>
                <button type="button"  onClick={() => navigate("/Register")} className="text-white-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400 inline-flex items-center" style={{display: currentUser ? "none": ""}}>
                <svg class="svg-icon pr-1" viewBox="0 0 20 20">
                  <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                </svg>
                Registrate
                </button>

                
                <button type="button"  onClick={() => navigate("/Profile")} 
                className="text-whte-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400 inline-flex items-center" style={{display: currentUser ? "": "none"}}>
                  <svg class="svg-icon pr-1" viewBox="0 0 20 20">
                    <path fill="none" d="M15.808,14.066H6.516v-1.162H5.354v1.162H4.193c-0.321,0-0.581,0.26-0.581,0.58s0.26,0.58,0.581,0.58h1.162
                      v1.162h1.162v-1.162h9.292c0.32,0,0.58-0.26,0.58-0.58S16.128,14.066,15.808,14.066z M15.808,9.419h-1.742V8.258h-1.162v1.161
                      h-8.71c-0.321,0-0.581,0.26-0.581,0.581c0,0.321,0.26,0.581,0.581,0.581h8.71v1.161h1.162v-1.161h1.742
                      c0.32,0,0.58-0.26,0.58-0.581C16.388,9.679,16.128,9.419,15.808,9.419z M17.55,0.708H2.451c-0.962,0-1.742,0.78-1.742,1.742v15.1
                      c0,0.961,0.78,1.74,1.742,1.74H17.55c0.962,0,1.742-0.779,1.742-1.74v-15.1C19.292,1.488,18.512,0.708,17.55,0.708z M18.13,17.551
                      c0,0.32-0.26,0.58-0.58,0.58H2.451c-0.321,0-0.581-0.26-0.581-0.58v-15.1c0-0.321,0.26-0.581,0.581-0.581H17.55
                      c0.32,0,0.58,0.26,0.58,0.581V17.551z M15.808,4.774H9.419V3.612H8.258v1.162H4.193c-0.321,0-0.581,0.26-0.581,0.581
                      s0.26,0.581,0.581,0.581h4.065v1.162h1.161V5.935h6.388c0.32,0,0.58-0.26,0.58-0.581S16.128,4.774,15.808,4.774z"></path>
                  </svg>
                  Tu Perfil
                  </button>
                <button type="button"  onClick={() => navigate("/Viajes")} className="text-white-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400 inline-flex items-center" style={{display: currentUser ? "": "none"}}>
                <svg class="svg-icon pr-1" viewBox="0 0 20 20">
                  <path fill="none" d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
                    c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
                    c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
                    s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"></path>
                </svg>
                  Ver Viajes</button>
              </div>
            </div>
          </div>

          <div className=" w-2/5" >
            <div className="py-12">
              <img src="https://images.unsplash.com/photo-1497361727480-725cf2c9427d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" class="shadow-lg rounded align-center border-none" alt=""></img>
            </div>
          </div>
      </div>
      
      

        

        

        

        




      </div>
  );
}

export default App;
