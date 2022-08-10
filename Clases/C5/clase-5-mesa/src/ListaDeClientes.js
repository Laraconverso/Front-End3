import React from "react";
import Perro from "./components/Perro";

const Perros=[
  {
    nombre:"Firulais",
    edad:"11",
    sexo:"Macho",
    raza:"Pastor alemán",
    tamaño:"Grande",
  },
  {
    nombre:"Maya",
    edad:"3",
    sexo:"Hembra",
    raza:"Pug", 
    tamaño:"Chico",
  },
  {
    nombre:"Pipo",
    edad:"5", 
    sexo:"Macho", 
    raza:"Schnauzer", 
    tamaño:"Mediano"
  },
  {
    nombre:"Pacha", 
    edad:"2", 
    sexo:"Hembra", 
    raza:"Mestizo", 
    tamaño:"Chico"
  }

]

const ListaDeClientes=()=>{
    return (
      <div>
        <h1>Clientes caninos de Veterinaria</h1>
        <ul>
          {
            Perros.map((perro)=>{
              return(
                <Perro nombre={perro.nombre} edad={perro.edad} sexo={perro.sexo} raza={perro.raza} tamaño={perro.tamaño}/>
              )
            })
          }
        </ul>
      </div>
    );
}

export default ListaDeClientes;