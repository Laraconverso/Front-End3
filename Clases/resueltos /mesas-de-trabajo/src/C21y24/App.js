import useFetch from "./hooks/useFetch";
import usePagination from "./hooks/usePagination";
import "./styles/styles.css";

// PARA REALIZAR ESTE EJERCICIO, PUEDES COMENZAR
// DESDE EL ARCHIVO "src/hooks/useFetch".
// UNA VEZ REALIZADO DICHO CUSTOM HOOKS, PUEDES
// CONTINUAR CON EL ARCHIVO "src/hooks/usePagination".
//LUEGO, PUEDES VOLVER AQUI.

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
  const { isLoading, apiData, errorMessage } = useFetch(`${API_URL}`);
  //Ahora, importamos nuestro custom hook y le pasamos
  // los argumentos: nuestro array de personajes y la cantidad
  // de ellos que queremos mostrar en cada página.
  const {
    itemsInPage,
    totalItems,
    currentData,
    nextPage,
    prevPage
  } = usePagination(apiData, 1);

  // Esta función se encarga de renderizar cada uno de los
  // personajes
  const renderCharacters = (characters) =>
    characters.map(({ character, image }, index) => (
      <Card url={image} name={character} key={`${character}-${index}`} />
    ));

  // Verificamos si nuestro useFetch nos devuelve un error y mostramos el
  // mensaje
  if (errorMessage) return <p className="loading-text">{errorMessage}</p>;

  return (
    <div className="gallery-container">
      {/*
      Ahora que tenemos nuestro hook de paginación, 
      reemplazamos la variable sobre la cual realizaremos
      el renderizado. Además, deberemos validar que el hook no se
      encuentre "fetcheando la data", utilizando la info que nos 
      brinda nuestro useFetch.
       */}
      <div>
        {currentData.length || !isLoading ? (
          renderCharacters(currentData)
        ) : (
          <p className="loading-text">Cargando Galería...</p>
        )}
      </div>
      {/*
      Además, agregamos un componente que se encargará
      de navegar entre las distintas páginas y mostrar
      el número de los items actuales sobre el total.
       */}
      <div className="pagination-bar">
        <button onClick={prevPage}>Anterior</button>
        <p>{`${itemsInPage} / ${totalItems}`}</p>
        <button onClick={nextPage}>Siguiente</button>
      </div>
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
