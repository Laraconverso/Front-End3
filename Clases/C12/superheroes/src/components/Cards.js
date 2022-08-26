import React from 'react'

const Cards = ({lista, setSuperhero}) => {
  return (
    <div>
        <h1>Listado</h1>
        <ul>
            {lista.map(superhero => <button onClick={() => setSuperhero(superhero)} > {superhero.superhero}</button>)}
        </ul>
    </div>
  )
}

export default Cards