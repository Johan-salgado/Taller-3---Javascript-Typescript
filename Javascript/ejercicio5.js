/**
 * EJERCICIO 5 - Filtrar Empleados
 * Dado el siguiente arreglo:
 * Obtén un nuevo arreglo que contenga únicamente los empleados 
 * cuyo salario sea mayor o igual a 4000.
 */

const empleados = [
    { nombre: "Ana", salario: 3000 },
    { nombre: "Luis", salario: 5000 },
    { nombre: "Pedro", salario: 2500 },
    { nombre: "Sara", salario: 7000 }
];

const empleadosConBuenSalario = empleados.filter(empleado => empleado.salario >= 4000);

console.log("Empleados con salario mayor o igual a 4000:", empleadosConBuenSalario);
