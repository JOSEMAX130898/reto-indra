// adapter.js
function mapPeople(data) {
    const mapeo = {
        "name": "nombre",
        "height": "altura",
        "mass": "masa",
        "hair_color": "color_del_cabello",
        "skin_color": "color_de_piel",
        "eye_color": "color_de_ojos",
        "birth_year": "año_de_nacimiento",
        "gender": "género",
        "homeworld": "planeta_natal",
        "films": "películas",
        "species": "especie",
        "vehicles": "vehículos",
        "starships": "naves_estelares",
        "created": "creado",
        "edited": "editado",
        "url": "url"
    };

    const resultado = {};
    for (const key in data) {
        if (mapeo.hasOwnProperty(key)) {
            resultado[mapeo[key]] = data[key];
        } else {
            resultado[key] = data[key];
        }
    }
    return resultado;
}
function mapPlanets(data) {
    const mapeo = {
        "name": "nombre",
        "rotation_period": "periodo_de_rotación",
        "orbital_period": "periodo_orbital",
        "diameter": "diámetro",
        "climate": "clima",
        "gravity": "gravedad",
        "terrain": "terreno",
        "surface_water": "agua_en_la_superficie",
        "population": "población",
        "residents": "residentes",
        "films": "películas",
        "created": "creado",
        "edited": "editado",
        "url": "url"
    };

    const resultado = {};
    for (const key in data) {
        if (mapeo.hasOwnProperty(key)) {
            resultado[mapeo[key]] = data[key];
        } else {
            resultado[key] = data[key];
        }
    }
    return resultado;
}

module.exports = {
    mapPeople,
    mapPlanets
};