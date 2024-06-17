import {propiedades} from "./dataBase.js";

//1. Filtrar los objetos del array por una ciudad específica. La ciudad la recibirá por parámetro.

function filtrarPorCiudad(propiedades, ciudad) {
  return propiedades.filter((propiedad) => {
    const direccion = propiedad.direccion;
    const cityInAddress = direccion.split(",").pop().trim();
    return cityInAddress.toLowerCase() === ciudad.toLowerCase();
  });
}


console.log(filtrarPorCiudad(propiedades, "Madrid"));


//2. Obtener un nuevo array con los nombres de los objetos.




const nameProperties = propiedades.map(x => x.nombre);

console.log(nameProperties);






// 3. Obtener la suma total de las cantidades de fotos de todos los objetos.

export const addTotal = (number) => {
    let accumulator = 0;
    for (let i  = 0; i  < number.length; i ++) {
        accumulator = accumulator + number[i];
    }
    return accumulator;
}



const photosProperties = propiedades.map( x => x.cantidadDeFotos);
console.log(photosProperties);

console.log("La suma total de fotos es de: " + addTotal(photosProperties)); 

// 4. Obtener un nuevo array con los objetos que tienen más de 100 metros cuadrados

const mapByMore100Meters = propiedades.map(x => x.metrosCuadrados);
console.log(mapByMore100Meters);
const overOneHundredSquareMeters = propiedades.filter( x => x.metrosCuadrados > 100)
console.log(overOneHundredSquareMeters);

//5. Ordenar los objetos por fecha de publicación de forma ascendente.

const orderByAscendingDate = propiedades.sort((a,b) => {
    const dateA = new Date(a.fechaDePublicacion);
    const dateB = new Date(b.fechaDePublicacion);
    
    return dateA - dateB;
});






