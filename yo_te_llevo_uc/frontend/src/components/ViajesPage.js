import Navbar from "./Navbar.js";
// import {useEffect, useState } from 'react';
// import { response } from "../../../back/src/utils/app.js";




export default function Form() {
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


    return (
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        <div class="flex-1">
 
    <div class="flex-1">
     
        <div class="px-4 sm:px-6 lg:px-8 py-4">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-xl font-semibold text-gray-900">Viajes</h1>
                    <p class="mt-2 text-sm text-gray-700">El listados de todos los viajes disponibles hasta el momento.</p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"><a href="\CreateViaje">Añadir viaje</a></button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="table-fixed min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Conductor</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Lugar de Salida</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Horario</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Capacidad</th>

                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Sergio Pérez</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Lugar ejemplo de salida</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8:30</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3/4</td>

                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="/" class="text-green-600 hover:text-green-900 px-3">Chat</a>
                                            <a href="/" class="text-indigo-600 hover:text-indigo-900">Unirme</a>
                                        </td>
                                    </tr>
                    
                                </tbody>

                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Max Verstappen</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Lugar ejemplo de salida</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">11:30</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3/3</td>

                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                            <a href="/" class="text-green-600 hover:text-green-900 px-4">Chat</a>
                                            <a href="/" class="text-red-600 hover:text-red-900 pr-4">Lleno</a>
                                        </td>
                                    </tr>
                    
                                </tbody>
                                
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lewis Hamilton</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Lugar ejemplo de salida</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10:00</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1/4</td>

                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="/" class="text-green-600 hover:text-green-900 px-3">Chat</a>
                                            <a href="/" class="text-indigo-600 hover:text-indigo-900">Unirme</a>
                                        </td>
                                    </tr>
                    
                                </tbody>
                                
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
        <footer class="text-center text-gray-500 text-xs">
         &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
        </footer>


        </div>
    
    );
}