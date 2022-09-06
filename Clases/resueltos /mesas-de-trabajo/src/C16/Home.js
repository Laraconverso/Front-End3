import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export default function Home() {
  return (
          <div>
              <ul>
                  <li><Link to='/'>🏠🏠Home🏠🏠</Link></li>
                  <li><Link to='/perritos'>🐶🐶🐶Guauguaus🐶🐶🐶</Link></li>
                  <li><Link to='/gatitos'>🐱🐱🐱Miaumiaus🐱🐱🐱</Link></li>
              </ul>
              <h1>✨✨Tenemos✨✨</h1>
              <Outlet/>
          </div>
        )
      }
