/**
 * TODO: EJERCICIO 4 - Interfaces
 *
 * Crea una interface llamada Empleado.
 *
 * Debe contener:
 *
 * - nombre
 * - cargo
 * - salario
 *
 * Después:
 *
 * - Crea dos empleados.
 * - Muéstralos por consola.
 */

interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

let empleado1: Empleado = {
    nombre: "Ana",
    cargo: "Desarrolladora",
    salario: 3000
};

let empleado2: Empleado = {
    nombre: "Carlos",
    cargo: "Diseñador",
    salario: 2500
};

console.log(empleado1);
console.log(empleado2);