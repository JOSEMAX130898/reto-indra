// controller.js

const { fetchPeople,fetchPlanets} = require('./service');

async function getPeople(req, res) {
    try {
        
        const page = req.params.page??1;
        // Obtener los datos de la API
        const rawData = await fetchPeople(page);
        
        // Enviar la respuesta adaptada
        return res.json(rawData);
    } catch (error) {
        // Manejar errores en caso de que ocurran
        console.error('Error al obtener datos:', error);
        return res.status(500).json({ error: 'Error al obtener datos' });
    }
}

async function getPlanets(req, res) {
    try {
        const page = req.params.page??1;
        // Obtener los datos de la API
        const rawData = await fetchPlanets(page);  

        // Enviar la respuesta adaptada
        return res.json(rawData);
    } catch (error) {
        // Manejar errores en caso de que ocurran
        console.error('Error al obtener datos:', error);
        return res.status(500).json({ error: 'Error al obtener datos' });
    }
}

module.exports = {
    getPeople,
    getPlanets
};