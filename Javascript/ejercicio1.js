/**
 * EJERCICIO 1 - Calculadora Básica
 * Crea una función llamada calculadora que reciba dos números y un operador (+, -, *, /).
 * La función debe retornar el resultado de la operación
 * Debe imprimir un ejemplo con cada operador
 * Tener en cuenta la division por 0
 * Ejemplo: calculadora(10, 5, "+"); -> Resultado esperado: 15 
 */

function calculadora(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Error: no se puede dividir entre 0");
                return null;
            }
            resultado = num1 / num2;
            break;
        default:
            console.log("Operador no válido");
            return null;
    }

    return resultado;
}

console.log("Suma:", calculadora(10, 5, "+"));
console.log("Resta:", calculadora(10, 5, "-"));
console.log("Multiplicación:", calculadora(10, 5, "*"));
console.log("División:", calculadora(10, 5, "/"));
console.log("División por 0:", calculadora(10, 0, "/"));
