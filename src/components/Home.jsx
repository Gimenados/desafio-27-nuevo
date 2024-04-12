import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //Creo variable de llmado que almacena el termino de busqueda ingresado por el usuario
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home-container">
      <h1>Buscador de películas</h1>
      <div className="home-input">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busca tu película.."
        />
        {/* Enlace para buscar en el catálogo */}
        <Link to={`/catalog?search=${searchTerm}`} className="btn">Buscar</Link>
      </div>
    </div>
  );
};

export default Home;
