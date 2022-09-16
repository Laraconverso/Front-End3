import { useState , useEffect} from "react";
import "./styles/styles.css";
import axios from "axios";

// Aquí definimos cuantos elementos tendrá
// nuestra galería. (Max: 10)
const TOTAL_CHARACTERS = 5;

// Este es el endpoint para obtener nuestros
// personajes. Puedes ver la documentación
// aquí: https://thesimpsonsquoteapi.glitch.me/
const API_URL = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${TOTAL_CHARACTERS}`;

// Este componente es el encargado de mostrar cada uno de los
// personajes.
const Card = ({ url, name }) => (
  <div className="image-card">
    <div className="card-img-title">
      <h5>{name}</h5>
    </div>
    <img src={url} className="card-img" alt={name} />
  </div>
);

// Aquí tenemos nuestra galería de imágenes.
const ImageGallery = () => {
  // En este estado guardamos el listado de personajes.
  const [characters, setCharacters] = useState([]);
  

  // Tenemos que realizar el request correspondiente para obtener la
  // información de la API y almacenarlo en el state. Para ello
  // utilizaremos un useEffect.

  // EL CODIGO VA AQUI...
    //const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
           // try {
                const result = await axios(`${API_URL}`)
                setCharacters(result.data)
           // }
            //catch (error) { setErrorMessage(error.message) }
        };
        fetchData();
        return () => {
            setCharacters({});
            //setErrorMessage("");
        }
    }, [])

  // Esta función se encarga de renderizar cada uno de los
  // personajes
  const renderCharacters = (characters) =>
    characters.map(({ character, image }, index) => (
      <Card url={image} name={character} key={`${character}-${index}`} />
    ));

  return (
    <div className="gallery-container">
      {characters.length ? (
        renderCharacters(characters)
      ) : (
        <p className="loading-text">Cargando Galería...</p>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg"
        alt="The Simpsons"
        className="title-image"
      />
      <ImageGallery />
    </div>
  );
}
