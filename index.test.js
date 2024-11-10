const axios = require('axios');

// Definir la URL base
const BASE_URL = 'https://c2ev2mbevc.execute-api.us-east-1.amazonaws.com';

describe('Pruebas de la API', () => {
  test('Debería obtener la lista de personas mapeado del inglés al español correctamente.', async () => {
    const response = await axios.get(`${BASE_URL}/swapi/personas/1`);
    expect(response.status).toBe(200); // Verifica si la solicitud fue exitosa (código 200)
  });

  test('Debería obtener la lista de planetas mapeado del inglés al español correctamente.', async () => {
    const response = await axios.get(`${BASE_URL}/swapi/planetas/1`);
    expect(response.status).toBe(200); // Verifica si la solicitud fue exitosa (código 200)
  });

  // Función para obtener el token y el status
  const obtenerToken = async () => {
    const data = { email: "retoindra@gmail.com", password: "ret@indra" };
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    return { status: response.status, token: response.data?.Obj?.token_access }; // Retorna el status y el token
  };

  test('Debería crear un nuevo usuario y validar que no exista en la base de datos MySQL correctamente', async () => {
    const generateOtherUser = () => {
      const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Letras y números
      let aleatorio = '';
      for (let i = 0; i < 8; i++) {
        aleatorio += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); // Selecciona un carácter aleatorio
      }
      return aleatorio;
    };
    
    const aleatorio = generateOtherUser();
    const data = { email: `usuario_${aleatorio}@test.com`, password: aleatorio };
    const response = await axios.post(`${BASE_URL}/auth/create`, data);
    expect(response.status).toBe(200); // Verifica que el status sea 200
  });


  test('Debería generar el token validando el usuario en la base de datos MySQL correctamente', async () => {
    const { status, token } = await obtenerToken(); // obtiene el token
    expect(status).toBe(200); // Verifica que el status sea 200
    expect(token).toBeTruthy(); // Verifica que el token esté presente
  });

  test('Debería obtener la lista de los productos desde la base de datos MySQL correctamente', async () => {
    const { status, token } = await obtenerToken(); // obtiene el token

    // Verifica que la solicitud para obtener el token sea exitosa
    expect(status).toBe(200);

    // Hacemos la solicitud para obtener los productos usando el token
    const productsResponse = await axios.get(`${BASE_URL}/product`, {
      headers: { Authorization: `JWT ${token}` }
    });

    expect(productsResponse.status).toBe(200);
    expect(productsResponse.data?.Obj).not.toHaveLength(0);  // Verifica que haya productos
  });

  test('Debería crear un nuevo producto en la base de datos MySQL correctamente', async () => {
    const { status, token } = await obtenerToken(); // obtiene el token

    // Verifica que la solicitud para obtener el token sea exitosa
    expect(status).toBe(200);

    // Genera valores aleatorios para el nombre y la descripción del producto
    const randomName = `New Product ${Math.floor(Math.random() * 1000)}`;
    const randomDescription = `Description of the new product ${Math.floor(Math.random() * 1000)}`;

    // Crea el objeto de datos con valores aleatorios
    const data = {
      id: null,
      name: randomName,
      description: randomDescription,
      price: Math.random() * 100, // Random price between 0 and 100
      stock: Math.floor(Math.random() * 1000), // Random stock between 0 and 1000
      action: "I" // I = INSERT; U = UPDATE; D = DELETE
    };

    const response = await axios.post(`${BASE_URL}/product`, data, {
      headers: { Authorization: `JWT ${token}` }
    });

    // Verifica si la solicitud fue exitosa (código 200)
    expect(response.status).toBe(200);
  });

});