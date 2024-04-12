import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { apiUrl, fetchMovieById, apiKey } from "./MovieApi";


const Catalog = () => {
  //Almacena la lista de peliculas
  const [movies, setMovies] = useState([]);
  //Para obtener la ubicacion actual del navegar 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  //Cargar una pelicula cada vez que el termino de busqueda cambia
  useEffect(() => {
    //Realizo la solicitud a la api de la pelicula
    const fetchMovies = async () => {
      try {
        //Se carga la pelicula
        const response = await fetch(`${apiUrl}?s=${searchTerm}&apikey=${apiKey}`);
        //JSON para convertir la respuesta en json y se asignan a la variable data
        const data = await response.json();
        //Verifica si la prop seach existe en los datos obtenidos
        if (data.Search) {
          setMovies(data.Search);
        }
        //Sino error en consola
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    
    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="catalog-container">
      <h1>Catálogo</h1>
      <div>
        <p>Resultados para: <strong>{searchTerm}</strong></p>
      </div>
      <ul className="movie-list">
        
        {/* Map para iterar sobre cada elemento de la lista */}
        {movies.map((movie) => (
          // Crea un elemento de lista en el DOM. Key para identificar de manera unica cada elemento 
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>Año: {movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`} className="btn">Detalles</Link>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <Link to="/" className="btn">Volver al buscador</Link>
      </div>
    </div>
  );
};

export default Catalog;



// https://www.omdbapi.com/?i=tt3896198&apikey=81ae97b1