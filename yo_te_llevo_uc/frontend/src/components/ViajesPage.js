import Navbar from "./Navbar.js";
// import {useEffect, useState } from 'react';
// import { response } from "../../../back/src/utils/app.js";
import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/viajes";
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>




export default function App() {
    // const{backendData, setBackendData} = useState([{}])

    // useEffect(() => {
    //     fetch("/api").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //         }
    //     )
    // })
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

      if (!post) return null;

    <table class = "table table-stripped">
        <tr class="bg-info">
            <th>Origen</th>
            <th>Destino</th>
            <th>Cupos</th>
            <th>Hora Inicio</th>
            <th>Comentarios</th>
        </tr>

        <tbody class="myTable">

        </tbody>

    </table>

    function buildTable(post){
        var table = document.getElementById("myTable")

        for (var i = 0; i < post.length; i++) {
            var row = <tr>
                <td>{post[i].origen}</td>
                <td>{post[i].destino}</td>
                <td>{post[i].cupos}</td>
                <td>{post[i].hora_inicio}</td>
                <td>{post[i].comentarios}</td>
            </tr>
            table.innerHTML += row
        }

    }


    return (
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        <div class="flex-1">
            <div class="container mx-auto px-4 py-8">
                <script>
                    {buildTable(post)}
                </script>
            </div>
      
        <footer class="text-center text-gray-500 text-xs">
         &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
        </footer>


        </div>
        </div>
    
    );
}