/**
 * TODO: EJERCICIO 2 - Arrays Tipados
 *
 * Crea los siguientes arreglos:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 *
 * Después:
 *
 * - Agrega un nuevo elemento (uso del push).
 * - Elimina el último elemento (uso del pop).
 * - Recorre cada arreglo utilizando for...of.
 */

let numeros: number[] = [1, 2, 3];
let textos: string[] = ["hola", "mundo"];
let booleanos: boolean[] = [true, false];

numeros.push(4);
textos.push("ts");
booleanos.push(true);

numeros.pop();
textos.pop();
booleanos.pop();

for (let num of numeros) {
    console.log(num);
}
for (let texto of textos) {
    console.log(texto);
}
for (let bool of booleanos) {
    console.log(bool);
}