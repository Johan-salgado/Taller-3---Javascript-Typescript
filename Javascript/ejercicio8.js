/**
 * EJERCICIO 8 - Copias y Referencias
 * Dado el siguiente objeto:
 * Realiza lo siguiente:
 *  - Crea una copia del usuario utilizando asignación (=).
 *  - Modifica el nombre de la copia.
 *  - Observa el resultado de ambos.
 *  - Ahora crea una copia utilizando Spread.
 *  - Modifica nuevamente el nombre.
 *  - Observa el resultado de ambos.
 *  - Explica la diferencia entre ambos casos.
 */

const usuario = {
    nombre: "Carlos",
    edad: 30
};

const copiaUsuarioReferencia = usuario;
copiaUsuarioReferencia.nombre = "Andrés";

console.log("--- Copia con asignación (=) ---");
console.log("Usuario original:", usuario);
console.log("Copia:", copiaUsuarioReferencia);

const usuarioOriginal2 = { nombre: "Carlos", edad: 30 };
const copiaUsuarioSpread = { ...usuarioOriginal2 };
copiaUsuarioSpread.nombre = "Andrés";

console.log("--- Copia con Spread ---");
console.log("Usuario original:", usuarioOriginal2);
console.log("Copia:", copiaUsuarioSpread);
