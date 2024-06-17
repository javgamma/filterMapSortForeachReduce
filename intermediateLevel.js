import { propiedades } from "./dataBase.js";

import { addTotal } from "./easyLevel.js";

// 6. Filtrar los objetos por un rango de precios de venta. El rango de precios será recibido por parámetro.

function filterByPriceRange(propiedades, priceMin, priceMaxi) {
  return propiedades.filter(
    (propiedad) =>
      propiedad.precioDeVenta >= priceMin &&
      propiedad.precioDeVenta <= priceMaxi
  );
}
console.log(filterByPriceRange(propiedades, 500000, 900000));

// 7. Obtener un nuevo array con los objetos que tienen una cantidad de fotos par.

const evenNumberOfPhotos = propiedades.filter(
  (x) => x.cantidadDeFotos % 2 === 0
);

console.log(evenNumberOfPhotos);

// 8. Obtener la suma total y el promedio de los metros cuadrados de todos los objetos

const numero = [1, 2, 3, 4, 5];

console.log(addTotal(numero));

const totalSquareMeters = propiedades.map((props) => props.metrosCuadrados);

const totalSum = addTotal(totalSquareMeters);

console.log("El total de Metros Cuadrados es de: " + totalSum);

let average = totalSum / totalSquareMeters.length;
console.log(average);

//9. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "calle".

const propertiesWithStreet = propiedades.filter(props => 
    props.direccion.toLowerCase().includes("calle")
  );

  console.log(propertiesWithStreet);

// 10. Ordenar los objetos por precio de venta de forma descendente.

const orderBySellingPriceDes = propiedades.sort((a,b) => b.precioDeVenta - a.precioDeVenta);

console.log(orderBySellingPriceDes);