import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PokeList from "./PokeList";
import PokeType from "./PokeType";
import Pokemon from "./Pokemon";
import NotFound from "./NotFound";

function App() {

   return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}>
              <Route path='/pokemon' element={<PokeList/>}>
                  <Route path=':pokeName' element={<Pokemon/>}/>
              </Route>
              <Route path='/type' element={<PokeType/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;