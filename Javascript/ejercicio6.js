/**
 * EJERCICIO 6 - Estadísticas de Ventas
 * Dado el siguiente arreglo:
 * Calcular:
 *  - Total vendido.
 *  - Venta más alta (Math.max investigar).
 *  - Promedio de ventas.
 */

const ventas = [250, 400, 150, 600, 800];

const totalVendido = ventas.reduce((acumulado, ventaActual) => acumulado + ventaActual, 0);
const ventaMasAlta = Math.max(...ventas);
const promedioVentas = totalVendido / ventas.length;

console.log("Total vendido:", totalVendido);
console.log("Venta más alta:", ventaMasAlta);
console.log("Promedio de ventas:", promedioVentas);
