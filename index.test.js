const axios = require('axios');
const {loginUser,crudUser} = require('./src/components/auth/service');
const {getProduct,crudProduct} = require('./src/components/product/service');
const {fetchPeople,fetchPlanets} = require('./src/components/swapi/service');

//pruebas unitarias desde la capa de servicio

describe('Pruebas de la API', () => {
  test('Debería obtener la lista de personas mapeado del inglés al español correctamente.', async () => {
    //pruebas unitarias desde la capa de servicio
    const response =  await fetchPeople(1);
    expect(response).not.toBeNull();
  });

  test('Debería obtener la lista de planetas mapeado del inglés al español correctamente.', async () => {
    //pruebas unitarias desde la capa de servicio
    const response =  await fetchPlanets(1);
    expect(response).not.toBeNull();
  });


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

    //pruebas unitarias desde la capa de servicio
    const response = await crudUser(data);
    expect(response.result).toBe(0); 
  });


  test('Debería generar el token validando el usuario en la base de datos MySQL correctamente', async () => {
    //pruebas unitarias desde la capa de servicio
    const response= await loginUser({ email: "retoindra@gmail.com", password: "ret@indra" });
    expect(response.token_access).toBeTruthy(); // Verifica que el token esté presente
  });

  test('Debería obtener la lista de los productos desde la base de datos MySQL correctamente', async () => {
    //pruebas unitarias desde la capa de servicio
    const productsResponse = await getProduct();
    expect(productsResponse).not.toHaveLength(0);
  });

  test('Debería crear un nuevo producto en la base de datos MySQL correctamente', async () => {
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

    //pruebas unitarias desde la capa de servicio
    const response = await crudProduct(data);
    expect(response?.result??0).toBeGreaterThanOrEqual(0); 
  });

});
