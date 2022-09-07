import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

const PokeType = () => {
  const url = `https://pokeapi.co/api/v2/type`
  const [pokeType, setpokeType] = useState();

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setpokeType(res.data.results)
        })
    }, [url])

  return (
    <div>
        <div className='select-Type'>
          <ul>
        {pokeType.map(poke =>
            <li>{poke.name}</li>
        )}</ul>
      </div>
      <Outlet/>
    </div>
  )
}

export default PokeType;