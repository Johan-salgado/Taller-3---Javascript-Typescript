/**
 * TODO: EJERCICIO 5 - Union Types
 *
 * Crea una función llamada mostrarDato.
 *
 * Debe recibir un parámetro que pueda ser:
 *
 * - string
 * - number
 *
 * Si recibe un string deberá mostrarlo en mayúsculas (uso del toUpperCase).
 * Si recibe un número deberá mostrarlo con dos decimales (uso del toFixed).
 */

function mostrarDato(param: string | number) {
    if (typeof param === "string") {
        console.log(param.toUpperCase());
    } else {
        console.log(param.toFixed(2));
    }
}

mostrarDato("hola typescript");
mostrarDato(15.5);