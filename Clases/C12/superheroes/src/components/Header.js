import React from 'react'

const Header = ({superhero}) => {
  return (
    <nav>
        <h1>Persoaje Seleccionado: </h1>
        <p>Nombre: {superhero.superhero}</p>
        <p>Alter Ego: {superhero.alter_ego}</p>
        
    </nav>
  )
}

export default Header