import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2.js";


function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Navbar2 />
      <section class="w-full h-screen bg-hero bg-cover bg-center">

        <div class="flex justify-center items-center h-4/6 flex-col">
          <h1 className="text-7xl text-white font-bold mx-auto max-w-6xl">
            <span class="bg-gradient-to-r bg-clip-text" >Bienvenido Benjamin, 
            <br/> a Yo Te Llevo UC!</span>
          </h1>
          <h2 className="text-4xl text-white max-w-6xl text-left">
            <span class="bg-gradient-to-r bg-clip-text">Organiza tus turnos abajo</span>
          </h2>
        </div>
        
        <div class="flex justify-center items-center flex-row">
          <button type="button" onClick={() => navigate("/Viajes")} class="text-whte-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400">Crear Viaje</button>
          <button type="button" onClick={() => navigate("/Viajes")} class="text-white-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400">Ver turnos</button>
        </div>
        </section>




      </div>
  );
}

export default App;
