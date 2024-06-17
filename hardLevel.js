import { propiedades } from "./dataBase";
// 11. Filtrar los objetos por una ciudad que comienza con la letra "M".

    const propiedadesEnCiudadM = propiedades.filter((propiedad )=> { return propiedad.includes(' ,M');
        });
      console.log(propiedadesEnCiudadM);

// 12. Obtener un nuevo array con los objetos cuya fecha de publicación es anterior al 15 de mayo de 2024.


const limitDate = new Date("2024-06-24");

const propiedadesFechaAnterior = propiedades.filter(propiedad => {
    const datePublic = new Date(propiedad.fechaDePublicacion);
    return datePublic < limitDate;
  });

console.log(propiedadesFechaAnterior);


//13. Obtener la cantidad total de fotos de los objetos cuyo precio de venta es mayor a 300,000.

const higherPrice = propiedades.filter(propiedad => propiedad.precioDeVenta > 300000);

const totalPhotos = higherPrice.reduce((total, propiedad) => total + propiedad.cantidadDeFotos, 0);


console.log(totalPhotos);


