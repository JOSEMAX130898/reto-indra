const axios = require('axios');
const { mapPeople,mapPlanets} = require('../../utils/adapter');
const config = require('../../config');
const apiUrl = config.urlSwapi;

async function fetchPeople(page) {
    try {
        // Solicitud GET a la API utilizando await
        const response = await axios.get(`${apiUrl}/people/${page}`);
        const people = response.data;
        
        // Manejar la respuesta de la API aquí 
        const peopleMap = mapPeople(people);   
        return peopleMap; // Devolvemos los datos adaptados
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}
async function fetchPlanets(page) {
    try {
        // Solicitud GET a la API utilizando await
        const response = await axios.get(`${apiUrl}/planets/${page}`);
        const planets = response.data;

        // Manejar la respuesta de la API aquí
        const planetsMap = mapPlanets(planets);  
        return planetsMap; // Devolvemos los datos adaptados
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}

module.exports = {
    fetchPeople,
    fetchPlanets
};