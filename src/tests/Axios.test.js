import axios from 'axios';// Import Axios
import { fetchData, API } from '../components/Axios';// Trae la Data



//*OJO PRESET BABEL*

beforeEach(() => {  // 1 Antes de Cada Test 
  axios.get.mockClear() // 2 Borra el estado de la funcion Simulada anterior
})

jest.mock('axios') // Funcion Simulada

describe("fetchData", () => { // llamado del test 
  it("API RECIBIDO", async () => { // Respuesta del Test
    const data = {}  // Var Vacia



    axios.get.mockResolvedValueOnce(Promise.resolve(data)) // Resolucion Promesa que trae el Data

    await expect(fetchData('react')).resolves.toEqual(data); // espectactativa que espera para comparar
                            // OJO RESOLVES CON S
    expect(axios.get).toHaveBeenCalledWith(`${API}/search?query=react`) // se llamo al mock con argumentos especificos

  })
})

it("API DENEGADO", async () => { // llamado test negativo
  const errorMsj = "Error de conexion"; // Creacion de msj de error

  axios.get.mockImplementationOnce(() => // llama al mock
    Promise.reject(new Error(errorMsj)), // en caso de Teject crear el error 
  );
  await expect(fetchData('react')).rejects.toThrow(errorMsj); // devuelve el error creado
                          // OJO REJECTS CON S
})







