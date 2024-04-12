const apiKey = '81ae97b1'; //Clave de la apiKey
const apiUrl = 'https://www.omdbapi.com/'; //URL de api

// Función para obtener la información de una película por su ID
//Acepta un moviId y devuelvo una promesa que resuelve en los detalles de una pelicula correspondiente al id proporcionado
const fetchMovieById = async (movieId) => {
  const response = await fetch(`${apiUrl}?i=${movieId}&apikey=${apiKey}`);
  const data = await response.json();
  return data;
};

export { apiKey, apiUrl, fetchMovieById };
