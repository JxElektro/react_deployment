import axios from "axios"; // Importa Axios

export const API = 'https://hn.algolia.com/api/v1'; // Simplifica el URL y lo exporta

export const fetchData = async query => {  // Crea la var que almacena la Data
  const url = `${API}/search?query=${query}`; // Simplifica el url y toma su modificador de la query
  return await axios.get(url); // obtiene el resultado despues de esperar(url)
};

fetchData('react') // ??