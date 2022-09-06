import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Gatitos from './Gatitos';
import Perritos from './Perritos';
import Home from './Home';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/perritos' element={<Perritos/>}/>
          <Route path='/gatitos' element={<Gatitos/>}/>
        </Route>
      </Routes>
  </div>
  )
}
