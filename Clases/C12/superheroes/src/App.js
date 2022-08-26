import './App.css';
import {useState} from 'react';
import Users from './components/Users.json'
import Cards from './components/Cards';
import Header from './components/Header';

function App() {
  const[superhero, setSuperhero] = useState({
    superhero:"", 
    publisher:"", 
    alter_ego:"",
    first_appearance:"",
    characters:""
  })
  return (
    <div>
      <Header superhero={superhero}/>
      <Cards lista={Users} setSuperhero={setSuperhero}/>
    </div>

  );
}

export default App;
