import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './pokedex.css'


const Home = ({pokeSel}) => {
  return (
    <>
      <h2>POKEMONES 🏠</h2>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Home;