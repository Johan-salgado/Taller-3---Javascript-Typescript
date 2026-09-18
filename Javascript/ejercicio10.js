/**
 * EJERCICIO 10 - Sistema de Gestión de Estudiantes
 * Dado el siguiente arreglo:
 * Desarrolla un programa que permita:
 *  - Mostrar únicamente los estudiantes aprobados (nota mayor o igual a 3.0).
 *  - Mostrar únicamente los mayores de edad.
 *  - Obtener un arreglo únicamente con los nombres.
 *  - Buscar al estudiante con id 3.
 *  - Calcular el promedio de todas las notas.
 *  - Encontrar el estudiante con la nota más alta.
 *  - Crear un nuevo arreglo agregando la propiedad estado, cuyo valor será "Aprobó" o "Reprobó" según la nota.
 *  - Realizar una copia del arreglo utilizando el operador Spread.
 */

const estudiantes2 = [
    {
        id: 1,
        nombre: "Ana",
        nota: 4.5,
        edad: 20
    },
    {
        id: 2,
        nombre: "Luis",
        nota: 3.8,
        edad: 18
    },
    {
        id: 3,
        nombre: "Carlos",
        nota: 4.9,
        edad: 22
    },
    {
        id: 4,
        nombre: "Laura",
        nota: 2.9,
        edad: 19
    }
];

const estudiantesAprobados = estudiantes2.filter(estudiante => estudiante.nota >= 3.0);

const estudiantesMayoresDeEdad = estudiantes2.filter(estudiante => estudiante.edad >= 18);

const nombresEstudiantes = estudiantes2.map(estudiante => estudiante.nombre);

const estudianteConId3 = estudiantes2.find(estudiante => estudiante.id === 3);

const promedioNotas = estudiantes2.reduce((acumulado, estudiante) => acumulado + estudiante.nota, 0) / estudiantes2.length;

const estudianteConNotaMasAlta = estudiantes2.reduce((mejor, actual) => {
    return actual.nota > mejor.nota ? actual : mejor;
});

const estudiantesConEstado = estudiantes2.map(estudiante => {
    return {
        ...estudiante,
        estado: estudiante.nota >= 3.0 ? "Aprobó" : "Reprobó"
    };
});

const copiaEstudiantes2 = [...estudiantes2];

console.log("Estudiantes aprobados:", estudiantesAprobados);
console.log("Estudiantes mayores de edad:", estudiantesMayoresDeEdad);
console.log("Nombres de los estudiantes:", nombresEstudiantes);
console.log("Estudiante con id 3:", estudianteConId3);
console.log("Promedio de notas:", promedioNotas);
console.log("Estudiante con la nota más alta:", estudianteConNotaMasAlta);
console.log("Estudiantes con estado:", estudiantesConEstado);
console.log("Copia del arreglo de estudiantes:", copiaEstudiantes2);
