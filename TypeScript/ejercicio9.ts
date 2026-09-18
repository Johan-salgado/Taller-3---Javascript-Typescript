/**
 * EJERCICIO 9 - Generics
 * Crea una función genérica llamada obtenerPrimero().
 * Debe recibir un arreglo de cualquier tipo y retornar el primer elemento.
 * Prueba la función con un arreglo de números, strings y booleanos.
 */

function obtenerPrimero<T>(arreglo: T[]): T {
    return arreglo[0];
}

const numerosGenerics = [1, 2, 3];
const textosGenerics = ["a", "b", "c"];
const booleanosGenerics = [true, false];

console.log(obtenerPrimero(numerosGenerics));
console.log(obtenerPrimero(textosGenerics));
console.log(obtenerPrimero(booleanosGenerics));

export {};
