
import Navbar from "./Navbar.js";
import React, { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([null]);

  useEffect(() => {
    fetch("/viajes")
      .then(res => res.json())
      .then((data) => setData(data.Viajes));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <br>
      </br>
      <br></br>
      <p>Hola!</p>
      <p>{data.id}</p>
        <p>{data.nombre}</p>
        <p>{data.fecha}</p>
        <p>{data.destino}</p>
        <p>{data.hora}</p>



      </div>
  );
}

export default App;