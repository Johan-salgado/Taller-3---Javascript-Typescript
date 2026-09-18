/**
 * EJERCICIO 9 - Desestructuración
 * Dado el siguiente objeto:
 * Realiza las siguientes tareas:
 *  - Extrae las propiedades marca y ram.
 *  - Renombra almacenamiento como ssd.
 *  - Asigna un valor por defecto a una propiedad llamada tarjetaGrafica.
 */

const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

const {
    marca,
    ram,
    almacenamiento: ssd,
    tarjetaGrafica = "No especificada"
} = computador;

console.log("Marca:", marca);
console.log("RAM:", ram);
console.log("SSD:", ssd);
console.log("Tarjeta gráfica:", tarjetaGrafica);
