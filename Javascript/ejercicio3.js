/**
 * EJERCICIO 3 - Gestión de Producto
 * Tienes el siguiente arreglo.
 * Realiza las siguientes operaciones:
 *  - Agregar "Monitor"
 *  - Agregar "Audífonos" al inicio
 *  - Eliminar el último elemento
 *  - Mostrar el arreglo final
 */

const productos = ["Laptop", "Mouse", "Teclado"];

productos.push("Monitor");
productos.unshift("Audífonos");
productos.pop();

console.log("Arreglo final de productos:", productos);
