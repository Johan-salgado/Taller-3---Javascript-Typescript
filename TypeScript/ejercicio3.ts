/**
 * TODO: EJERCICIO 3 - Crear un Type
 *
 * Crea un type llamado Producto que contenga:
 *
 * - id
 * - nombre
 * - precio
 * - disponible
 *
 * Después:
 *
 * - Crea dos productos.
 * - Imprime ambos productos.
 */

type Producto = {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
};

let producto1: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};

let producto2: Producto = {
    id: 2,
    nombre: "Ratón",
    precio: 25,
    disponible: false
};

console.log(producto1);
console.log(producto2);