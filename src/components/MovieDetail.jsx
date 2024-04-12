import React, { useState, useEffect } from 'react';
import { fetchMovieById } from './MovieApi'; 
import { Link, useParams } from "react-router-dom";

//Funcion para obtener los parametros de la url
const MovieDetail = ({ match }) => {
  const { id } = useParams(); //Utilizo el hook de react router para obtener el id de la url
  const [movie, setMovie] = useState(null); //Con useState creo un estado que almacena los detalles de las peliculas

  //UseEffect para cargar los detalles de la peliculas
  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchMovieById(id); //Obtenemos los detalles por el id de fetch en MovieApi
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  //Mensaje de carga si todavia no se muestra la informacion
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-container'>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <Link to="/" className="btn">Volver al buscador</Link>
    </div>
    
  );
};

export default MovieDetail;
