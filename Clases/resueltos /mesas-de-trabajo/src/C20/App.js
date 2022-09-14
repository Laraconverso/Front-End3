import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import Navbar from './components/Navbar'
import Search from './components/Search'
import "./styles/global.css"

const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/pokemon/search" element={<Search/>} />
                <Route path="/pokemon/:id" element={<Pokemon/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App